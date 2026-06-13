import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { env } from '@/env.mjs'

// Simple in-memory rate limiting fallback for development
class InMemoryRateLimiter {
  private store = new Map<string, { count: number; resetTime: number }>()

  async limit(identifier: string, options: { requests: number; window: string }): Promise<{
    success: boolean
    limit: number
    remaining: number
    reset: number
  }> {
    const now = Date.now()
    const windowMs = this.parseWindow(options.window)
    const record = this.store.get(identifier)

    // Clean up old entries periodically
    if (this.store.size > 1000) {
      Array.from(this.store.entries()).forEach(([key, value]) => {
        if (now > value.resetTime) {
          this.store.delete(key)
        }
      })
    }

    if (!record || now > record.resetTime) {
      this.store.set(identifier, { count: 1, resetTime: now + windowMs })
      return {
        success: true,
        limit: options.requests,
        remaining: options.requests - 1,
        reset: now + windowMs,
      }
    }

    if (record.count >= options.requests) {
      return {
        success: false,
        limit: options.requests,
        remaining: 0,
        reset: record.resetTime,
      }
    }

    record.count++
    return {
      success: true,
      limit: options.requests,
      remaining: options.requests - record.count,
      reset: record.resetTime,
    }
  }

  private parseWindow(window: string): number {
    const match = window.match(/^(\d+)\s*([smhd])$/)
    if (!match) throw new Error(`Invalid window format: ${window}`)

    const [, amount, unit] = match
    const multipliers: Record<string, number> = {
      s: 1000,
      m: 60 * 1000,
      h: 60 * 60 * 1000,
      d: 24 * 60 * 60 * 1000,
    }

    return parseInt(amount) * multipliers[unit]
  }
}

// Create rate limiter based on environment
function createRateLimiter() {
  // Use Upstash Redis in production if configured
  if (env.UPSTASH_REDIS_REST_URL && env.UPSTASH_REDIS_REST_TOKEN) {
    const redis = new Redis({
      url: env.UPSTASH_REDIS_REST_URL,
      token: env.UPSTASH_REDIS_REST_TOKEN,
    })

    return new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, '60 s'),
      analytics: true,
      prefix: 'webbrill:ratelimit',
    })
  }

  // Fallback to in-memory for development
  console.warn(
    '⚠️  Using in-memory rate limiting. Configure Upstash Redis for production use.'
  )
  return new InMemoryRateLimiter()
}

export const contactFormRateLimiter = createRateLimiter()

// Contact form specific rate limiter (more restrictive)
export async function checkContactFormRateLimit(
  identifier: string
): Promise<{ success: boolean; limit: number; remaining: number; reset: number }> {
  const result = await contactFormRateLimiter.limit(identifier, {
    requests: 5,
    window: '60 s',
  })

  return result
}

// General API rate limiter (less restrictive)
export async function checkApiRateLimit(
  identifier: string
): Promise<{ success: boolean; limit: number; remaining: number; reset: number }> {
  if (env.UPSTASH_REDIS_REST_URL && env.UPSTASH_REDIS_REST_TOKEN) {
    const redis = new Redis({
      url: env.UPSTASH_REDIS_REST_URL,
      token: env.UPSTASH_REDIS_REST_TOKEN,
    })

    const ratelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(20, '60 s'),
      analytics: true,
      prefix: 'webbrill:api',
    })

    return await ratelimit.limit(identifier)
  }

  // Fallback for development
  const fallback = new InMemoryRateLimiter()
  return await fallback.limit(identifier, {
    requests: 20,
    window: '60 s',
  })
}
