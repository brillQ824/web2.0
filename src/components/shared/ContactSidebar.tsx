'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Contact Handle Tab - Fixed on right side */}
      <div
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999] contact-handle"
        style={{
          display: 'none', // Hidden on mobile by default
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary text-black font-normal uppercase tracking-wider"
          style={{
            padding: '16px 12px',
            fontSize: '11px',
            letterSpacing: '0.15em',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontWeight: 400,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#c9b366'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-primary)'
          }}
        >
          Kontakt
        </button>
      </div>

      {/* Contact Popup Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-[9998]"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 h-full bg-black z-contact-form popup-blur overflow-y-auto"
              style={{
                width: '100%',
                maxWidth: '600px',
                borderLeft: '1px solid rgba(112, 112, 112, 0.3)',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 text-gray-400 hover:text-primary transition-colors duration-300"
                style={{
                  padding: '8px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="p-12" style={{ paddingTop: '80px' }}>
                {/* Title Section */}
                <div className="mb-12">
                  <h2
                    className="text-white mb-4"
                    style={{
                      fontSize: 'clamp(32px, 4vw, 48px)',
                      fontWeight: 400,
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Skontaktuj się z nami
                  </h2>
                  <p
                    className="text-gray-400"
                    style={{
                      fontSize: '16px',
                      fontWeight: 300,
                      lineHeight: 1.8,
                    }}
                  >
                    Jesteśmy gotowi pomóc w realizacji Twoich projektów AI
                  </p>
                </div>

                {/* Contact Form */}
                <form className="space-y-8">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-400 mb-2"
                      style={{
                        fontSize: '12px',
                        fontWeight: 300,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-transparent text-white border-0 border-b border-gray-600 focus:border-primary outline-none transition-colors duration-300"
                      style={{
                        padding: '12px 0',
                        fontSize: '16px',
                        fontWeight: 300,
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-400 mb-2"
                      style={{
                        fontSize: '12px',
                        fontWeight: 300,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-transparent text-white border-0 border-b border-gray-600 focus:border-primary outline-none transition-colors duration-300"
                      style={{
                        padding: '12px 0',
                        fontSize: '16px',
                        fontWeight: 300,
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-400 mb-2"
                      style={{
                        fontSize: '12px',
                        fontWeight: 300,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Telefon (opcjonalnie)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-transparent text-white border-0 border-b border-gray-600 focus:border-primary outline-none transition-colors duration-300"
                      style={{
                        padding: '12px 0',
                        fontSize: '16px',
                        fontWeight: 300,
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-400 mb-2"
                      style={{
                        fontSize: '12px',
                        fontWeight: 300,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Wiadomość
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full bg-transparent text-white border-0 border-b border-gray-600 focus:border-primary outline-none transition-colors duration-300 resize-none"
                      style={{
                        padding: '12px 0',
                        fontSize: '16px',
                        fontWeight: 300,
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-primary text-black uppercase tracking-wider hover:bg-opacity-90 transition-all duration-300"
                    style={{
                      padding: '16px 48px',
                      fontSize: '11px',
                      fontWeight: 400,
                      letterSpacing: '0.15em',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Wyślij wiadomość
                  </button>
                </form>

                {/* Contact Info */}
                <div className="mt-16 pt-12" style={{ borderTop: '1px solid rgba(112, 112, 112, 0.2)' }}>
                  <h3
                    className="text-white mb-6"
                    style={{
                      fontSize: '18px',
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Informacje kontaktowe
                  </h3>
                  <div className="space-y-4 text-gray-400" style={{ fontSize: '14px', lineHeight: 1.8 }}>
                    <p>
                      <strong style={{ color: 'var(--color-light)', fontWeight: 400 }}>Email:</strong>{' '}
                      <a href="mailto:hello@brillQ.today" className="hover:text-primary transition-colors duration-300">
                        hello@brillQ.today
                      </a>
                    </p>
                    <p>
                      <strong style={{ color: 'var(--color-light)', fontWeight: 400 }}>Telefon:</strong>{' '}
                      <a href="tel:+48222452381" className="hover:text-primary transition-colors duration-300">
                        +48 22 245 23 81
                      </a>
                    </p>
                    <p>
                      <strong style={{ color: 'var(--color-light)', fontWeight: 400 }}>Adres:</strong><br />
                      Varso Tower, level 44<br />
                      Chmielna 69<br />
                      00-801 Warszawa
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Show handle only on desktop */}
      <style jsx>{`
        @media (min-width: 1200px) {
          .contact-handle {
            display: block !important;
          }
        }
      `}</style>
    </>
  )
}
