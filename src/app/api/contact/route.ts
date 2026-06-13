import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/utils/validation'
import { checkContactFormRateLimit } from '@/lib/rate-limit'
import { z } from 'zod'
import { Resend } from 'resend'

// Lazy initialization of Resend to avoid build-time errors
function getResendClient() {
  if (!process.env.RESEND_API_KEY) {
    return null
  }
  return new Resend(process.env.RESEND_API_KEY)
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  // In production, verify with Google reCAPTCHA API
  // For demo purposes, we'll skip actual verification
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY

  if (!recaptchaSecret) {
    console.warn('⚠️  reCAPTCHA secret key not configured')
    return true // Allow in development
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${recaptchaSecret}&response=${token}`,
    })
    const data = await response.json()
    return data.success && data.score > 0.5
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
                request.headers.get('x-real-ip') ||
                'anonymous'

    // Rate limiting with Upstash Redis (or in-memory fallback)
    const rateLimitResult = await checkContactFormRateLimit(ip)

    if (!rateLimitResult.success) {
      const resetDate = new Date(rateLimitResult.reset)
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          resetAt: resetDate.toISOString(),
          limit: rateLimitResult.limit,
          remaining: rateLimitResult.remaining,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.reset.toString(),
            'Retry-After': Math.ceil((rateLimitResult.reset - Date.now()) / 1000).toString(),
          }
        }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactFormSchema.parse(body)

    // Check honeypot
    if (validatedData.honeypot) {
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      )
    }

    // Verify reCAPTCHA
    const isValidRecaptcha = await verifyRecaptcha(validatedData.recaptchaToken)
    if (!isValidRecaptcha) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      )
    }

    // Extract chatHistory from raw body (not in schema)
    const chatHistory = typeof body.chatHistory === 'string' ? body.chatHistory : null

    // Send email notification
    try {
      const resend = getResendClient()
      const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'

      if (resend) {
        await resend.emails.send({
          from: `brillQ Contact Form <${fromEmail}>`,
          to: 'hello@brillQ.today',
          replyTo: validatedData.email,
          subject: `Nowa wiadomość od ${validatedData.name}${validatedData.company ? ` (${validatedData.company})` : ''}`,
          html: `
            <h2>Nowa wiadomość z formularza kontaktowego</h2>
            <p><strong>Imię i nazwisko:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            ${validatedData.company ? `<p><strong>Firma:</strong> ${validatedData.company}</p>` : ''}
            <p><strong>Wiadomość:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
            ${chatHistory ? `
            <hr>
            <h3>Rozmowa z AI Asystentem</h3>
            <pre style="background:#f5f5f5;padding:12px;border-radius:4px;font-size:13px;white-space:pre-wrap">${chatHistory}</pre>
            ` : ''}
            <hr>
            <p style="color: #666; font-size: 12px;">Wysłane z formularza kontaktowego brillQ.today</p>
          `,
        })
      } else {
        console.warn('⚠️  RESEND_API_KEY not configured - email not sent')
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Don't fail the request if email fails - log it instead
    }

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': rateLimitResult.limit.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': rateLimitResult.reset.toString(),
        }
      }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

