'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [error, setError] = useState('')

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Proszę wypełnić wszystkie wymagane pola')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Proszę podać poprawny adres email')
      return
    }

    // Here you would send the form data to your backend
    // TODO: Implement API call to /api/contact

    // Reset form
    setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    setError('')
    setIsOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    setError('')
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
      >
        Kontakt
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
                  Skontaktuj się z nami
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
                  Jesteśmy gotowi, aby pomóc Ci w realizacji Twojego projektu AI.
                  Wypełnij formularz, a nasz zespół skontaktuje się z Tobą w ciągu 24 godzin.
                </motion.p>
              </div>

              {/* Right Column - Form */}
              <div className="flex flex-col justify-center">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Imię i nazwisko *"
                      required
                      style={{
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
                      }}
                      onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-primary)'}
                      onBlur={(e) => e.target.style.borderBottomColor = 'var(--color-gray4)'}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email *"
                      required
                      style={{
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
                      }}
                      onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-primary)'}
                      onBlur={(e) => e.target.style.borderBottomColor = 'var(--color-gray4)'}
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Telefon"
                      style={{
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
                      }}
                      onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-primary)'}
                      onBlur={(e) => e.target.style.borderBottomColor = 'var(--color-gray4)'}
                    />
                  </div>

                  {/* Company Field */}
                  <div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Firma"
                      style={{
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
                      }}
                      onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-primary)'}
                      onBlur={(e) => e.target.style.borderBottomColor = 'var(--color-gray4)'}
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Wiadomość *"
                      required
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '16px 0',
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid var(--color-gray4)',
                        color: 'var(--color-light)',
                        fontSize: '16px',
                        fontWeight: 300,
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.borderBottomColor = 'var(--color-primary)'}
                      onBlur={(e) => e.target.style.borderBottomColor = 'var(--color-gray4)'}
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <p style={{ color: '#d74747', fontSize: '14px', fontWeight: 300 }}>
                      {error}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
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
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#c9b366'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    Wyślij wiadomość
                  </button>
                </form>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Zamknij formularz kontaktowy"
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
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-light)'}
            >
              <span aria-hidden="true">×</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
