'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/utils/validation'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import type { Locale } from '@/i18n/config'

interface ContactFormProps {
  chatHistory?: string
  lang?: Locale
}

export default function ContactForm({ chatHistory = '', lang = 'pl' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { executeRecaptcha } = useGoogleReCaptcha()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Get reCAPTCHA token
      const recaptchaToken = executeRecaptcha
        ? await executeRecaptcha('contact_form')
        : 'no-recaptcha'

      // Include chat history and reCAPTCHA token with form data
      const submitData = {
        ...data,
        recaptchaToken,
        chatHistory: chatHistory || undefined,
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        // Dispatch custom event to notify bot assistant
        document.dispatchEvent(new Event('formSubmitted'))
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-800">
      <h2 className="text-white font-light mb-6" style={{ fontSize: 'clamp(24px, 2.5vw, 32px)', fontWeight: 300, lineHeight: 1.2 }}>
        {lang === 'en' ? 'Send a message' : 'Wyślij wiadomość'}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            {lang === 'en' ? 'Full name *' : 'Imię i nazwisko *'}
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            aria-required="true"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-gray-800 text-white placeholder-gray-400 ${
              errors.name ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder={lang === 'en' ? 'John Smith' : 'Jan Kowalski'}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            aria-required="true"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-gray-800 text-white placeholder-gray-400 ${
              errors.email ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder="jan.kowalski@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
            {lang === 'en' ? 'Company' : 'Firma'}
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-gray-800 text-white placeholder-gray-400"
            placeholder={lang === 'en' ? 'Company name' : 'Nazwa firmy'}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            {lang === 'en' ? 'Message *' : 'Wiadomość *'}
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            aria-required="true"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none bg-gray-800 text-white placeholder-gray-400 ${
              errors.message ? 'border-red-500' : 'border-gray-600'
            }`}
            placeholder={lang === 'en' ? 'Describe your AI project or inquiry...' : 'Opisz swój projekt AI lub zapytanie...'}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>

        {/* Honeypot */}
        <input
          {...register('honeypot')}
          type="text"
          name="honeypot"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* reCAPTCHA token is fetched via hook in onSubmit */}

        {/* Consent */}
        <div>
          <label className="flex items-start gap-3">
            <input
              {...register('consent')}
              type="checkbox"
              className="mt-1 w-5 h-5 text-primary border-gray-600 rounded focus:ring-2 focus:ring-primary bg-gray-800"
            />
            <span className="text-sm text-gray-400">
              {lang === 'en'
                ? 'I consent to the processing of my personal data by brillQ for the purpose of responding to my inquiry. More information in the '
                : 'Wyrażam zgodę na przetwarzanie moich danych osobowych przez brillQ w celu odpowiedzi na zapytanie. Więcej informacji w '}
              <a href={`/${lang}/polityka-prywatnosci`} className="text-primary underline">
                {lang === 'en' ? 'Privacy Policy' : 'Polityce Prywatności'}
              </a>
              . *
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1 text-sm text-red-400">{errors.consent.message}</p>
          )}
        </div>

        {/* Chat History Notice */}
        {chatHistory && (
          <div className="p-3 bg-primary/10 border border-primary/30 rounded-lg">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <p className="text-primary text-sm">
                {lang === 'en'
                  ? 'Your conversation with the AI Assistant will be attached to the submission so we can better understand your needs.'
                  : 'Twoja rozmowa z AI Assistentem zostanie dołączona do zgłoszenia, abyśmy lepiej zrozumieli Twoje potrzeby.'}
              </p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-12 py-4 bg-primary text-black hover:bg-primary/90 transition-all duration-500 rounded-full text-sm font-medium uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {lang === 'en' ? 'Sending...' : 'Wysyłanie...'}
            </span>
          ) : (
            lang === 'en' ? 'Send message' : 'Wyślij wiadomość'
          )}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
            <p className="text-green-400 font-medium">
              {lang === 'en'
                ? '✓ Message sent successfully! We\'ll get back to you soon.'
                : '✓ Wiadomość została wysłana pomyślnie! Skontaktujemy się z Tobą wkrótce.'}
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
            <p className="text-red-400 font-medium">
              {lang === 'en'
                ? '✗ An error occurred while sending. Please try again or contact us directly.'
                : '✗ Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.'}
            </p>
          </div>
        )}
      </form>

      <p className="mt-6 text-sm text-gray-400">
        {lang === 'en' ? '* Required fields' : '* Pola wymagane'}
      </p>
    </div>
  )
}

