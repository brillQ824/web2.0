'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import type { Locale } from '@/i18n/config'

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '16px 0',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--color-gray4)',
  color: 'var(--color-light)',
  fontSize: '16px',
  fontWeight: 300,
  outline: 'none',
  transition: 'border-color 0.3s ease',
}

const focusBorder = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  e.target.style.borderBottomColor = 'var(--color-primary)'
}
const blurBorder = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  e.target.style.borderBottomColor = 'var(--color-gray4)'
}

export default function ContactPopup({ lang = 'en' }: { lang?: Locale }) {
  const isEn = lang === 'en'
  const t = {
    tab: isEn ? 'Contact' : 'Kontakt',
    heading: isEn ? 'Get in touch' : 'Skontaktuj się z nami',
    subtitle: isEn
      ? 'We’re ready to help bring your AI project to life. Fill out the form and our team will get back to you within 24 hours.'
      : 'Jesteśmy gotowi, aby pomóc Ci w realizacji Twojego projektu AI. Wypełnij formularz, a nasz zespół skontaktuje się z Tobą w ciągu 24 godzin.',
    name: isEn ? 'Full name *' : 'Imię i nazwisko *',
    phone: isEn ? 'Phone' : 'Telefon',
    company: isEn ? 'Company' : 'Firma',
    message: isEn ? 'Message *' : 'Wiadomość *',
    phoneLabel: isEn ? 'Phone' : 'Telefon',
    consentPre: isEn
      ? 'I consent to the processing of my personal data by brillQ in order to respond to my inquiry. More in the '
      : 'Wyrażam zgodę na przetwarzanie moich danych osobowych przez brillQ w celu odpowiedzi na zapytanie. Więcej w ',
    consentLink: isEn ? 'Privacy Policy' : 'Polityce Prywatności',
    send: isEn ? 'Send message' : 'Wyślij wiadomość',
    sending: isEn ? 'Sending…' : 'Wysyłanie…',
    success: isEn ? '✓ Message sent! We’ll get back to you soon.' : '✓ Wiadomość wysłana! Odezwiemy się wkrótce.',
    errSend: isEn ? '✗ Sending failed. Please try again or email us directly.' : '✗ Błąd wysyłania. Spróbuj ponownie lub napisz bezpośrednio.',
    errRequired: isEn ? 'Please fill in all required fields.' : 'Proszę wypełnić wszystkie wymagane pola.',
    errEmail: isEn ? 'Please enter a valid email address.' : 'Proszę podać poprawny adres email.',
    errShort: isEn ? 'Message must be at least 10 characters.' : 'Wiadomość musi zawierać co najmniej 10 znaków.',
    errConsent: isEn ? 'You must consent to the processing of your data.' : 'Musisz wyrazić zgodę na przetwarzanie danych.',
    close: isEn ? 'Close contact form' : 'Zamknij formularz kontaktowy',
  }

  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false,
    honeypot: '',
  })
  const { executeRecaptcha } = useGoogleReCaptcha()

  // Lock body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Client-side validation (mirrors contactFormSchema)
    if (!formData.name || !formData.email || !formData.message) {
      setError(t.errRequired)
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError(t.errEmail)
      return
    }
    if (formData.message.trim().length < 10) {
      setError(t.errShort)
      return
    }
    if (!formData.consent) {
      setError(t.errConsent)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const recaptchaToken = executeRecaptcha
        ? await executeRecaptcha('contact_popup')
        : 'no-recaptcha'

      // phone isn't part of contactFormSchema — fold it into the message
      const message = formData.phone
        ? `${formData.message}\n\n${t.phoneLabel}: ${formData.phone}`
        : formData.message

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message,
          consent: formData.consent,
          honeypot: formData.honeypot,
          recaptchaToken,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', company: '', message: '', consent: false, honeypot: '' })
        document.dispatchEvent(new Event('formSubmitted'))
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Activation Handle */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed z-contact-form"
        style={{
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          padding: '24px 12px',
          backgroundColor: 'var(--color-primary)',
          border: 'none',
          cursor: 'pointer',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '0.1em',
          color: '#000',
          textTransform: 'uppercase',
        }}
        whileHover={{ paddingLeft: '16px', paddingRight: '16px' }}
        transition={{ duration: 0.3 }}
        aria-label={t.tab}
      >
        {t.tab}
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-contact-form"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(6px)',
            }}
          />
        )}
      </AnimatePresence>

      {/* Contact Form Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ right: 'calc(-1200px)' }}
            animate={{ right: 0 }}
            exit={{ right: 'calc(-1200px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 h-full z-contact-form overflow-y-auto"
            style={{
              width: 'min(1200px, calc(100vw - 66px))',
              maxHeight: 'min(calc(100vh - 112px), 750px)',
              top: '56px',
              backgroundColor: 'rgba(50, 50, 50, 0.95)',
              backdropFilter: 'blur(6px)',
              padding: 'clamp(40px, 8vw, 80px)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 h-full">
              {/* Left Column - Text */}
              <div className="flex flex-col justify-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{
                    fontSize: 'clamp(36px, 5vw, 64px)',
                    fontWeight: 400,
                    color: 'var(--color-light)',
                    lineHeight: 1.2,
                    marginBottom: '32px',
                  }}
                >
                  {t.heading}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{
                    fontSize: '18px',
                    fontWeight: 300,
                    color: 'var(--color-gray2)',
                    lineHeight: 1.8,
                  }}
                >
                  {t.subtitle}
                </motion.p>
              </div>

              {/* Right Column - Form */}
              <div className="flex flex-col justify-center">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.name}
                      required
                      style={inputStyle}
                      onFocus={focusBorder}
                      onBlur={blurBorder}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email *"
                      required
                      style={inputStyle}
                      onFocus={focusBorder}
                      onBlur={blurBorder}
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.phone}
                      style={inputStyle}
                      onFocus={focusBorder}
                      onBlur={blurBorder}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t.company}
                      style={inputStyle}
                      onFocus={focusBorder}
                      onBlur={blurBorder}
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.message}
                      required
                      rows={4}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={focusBorder}
                      onBlur={blurBorder}
                    />
                  </div>

                  {/* Honeypot - hidden from users, catches bots */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                  />

                  {/* Consent (required by RODO/GDPR) */}
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      style={{ marginTop: '4px', width: '18px', height: '18px', accentColor: 'var(--color-primary)', flexShrink: 0 }}
                    />
                    <span style={{ fontSize: '13px', fontWeight: 300, color: 'var(--color-gray2)', lineHeight: 1.6 }}>
                      {t.consentPre}
                      <a href={`/${lang}/polityka-prywatnosci`} style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
                        {t.consentLink}
                      </a>
                      . *
                    </span>
                  </label>

                  {/* Messages */}
                  {error && (
                    <p style={{ color: '#d74747', fontSize: '14px', fontWeight: 300 }}>{error}</p>
                  )}
                  {submitStatus === 'success' && (
                    <p style={{ color: '#4ade80', fontSize: '14px', fontWeight: 400 }}>{t.success}</p>
                  )}
                  {submitStatus === 'error' && (
                    <p style={{ color: '#d74747', fontSize: '14px', fontWeight: 400 }}>{t.errSend}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      maxWidth: '300px',
                      padding: '18px 48px',
                      backgroundColor: 'var(--color-primary)',
                      color: '#000',
                      border: 'none',
                      fontSize: '14px',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.6 : 1,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (isSubmitting) return
                      e.currentTarget.style.backgroundColor = '#c9b366'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    {isSubmitting ? t.sending : t.send}
                  </button>
                </form>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label={t.close}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'transparent',
                border: 'none',
                color: 'var(--color-light)',
                fontSize: '32px',
                cursor: 'pointer',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-light)')}
            >
              <span aria-hidden="true">×</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
