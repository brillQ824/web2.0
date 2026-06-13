'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: Gtag.Gtag
  }
}

interface CookieConsentProps {
  lang?: string
}

export default function CookieConsent({ lang = 'pl' }: CookieConsentProps) {
  const [showConsent, setShowConsent] = useState(false)
  const [consentGiven, setConsentGiven] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowConsent(true)
    } else {
      setConsentGiven(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowConsent(false)
    setConsentGiven(true)
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowConsent(false)
    setConsentGiven(true)
    // Jawna odmowa — GA nie będzie zbierać danych
    window.gtag?.('consent', 'update', { analytics_storage: 'denied' })
  }

  const reopenConsent = () => {
    localStorage.removeItem('cookieConsent')
    setConsentGiven(false)
    setShowConsent(true)
  }

  return (
    <>
      {/* Banner zgody */}
      <AnimatePresence>
        {showConsent && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 border-t border-gray-800"
            style={{ background: 'rgba(10, 10, 10, 0.97)', backdropFilter: 'blur(12px)' }}
            role="dialog"
            aria-live="polite"
            aria-label="Zgoda na pliki cookie"
          >
            <div className="container-custom">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-300" style={{ lineHeight: 1.6 }}>
                    Używamy plików cookie do analizy ruchu (Google Analytics). Możesz zaakceptować lub odrzucić cookies analityczne — niezbędne pliki cookie zawsze pozostają aktywne.{' '}
                    <Link
                      href={`/${lang}/polityka-cookies`}
                      className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                    >
                      Polityka Cookies
                    </Link>
                    {' '}·{' '}
                    <Link
                      href={`/${lang}/polityka-prywatnosci`}
                      className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                    >
                      Polityka Prywatności
                    </Link>
                  </p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <button
                    onClick={declineCookies}
                    className="px-5 py-2 text-sm font-medium text-gray-300 border border-gray-700 rounded-full hover:border-gray-500 hover:text-white transition-colors"
                  >
                    Tylko niezbędne
                  </button>
                  <button
                    onClick={acceptCookies}
                    className="px-5 py-2 text-sm font-medium text-black rounded-full transition-colors"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    Akceptuj wszystkie
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Przycisk "Zmień ustawienia cookies" — widoczny po podjęciu decyzji */}
      <AnimatePresence>
        {consentGiven && !showConsent && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={reopenConsent}
            className="fixed bottom-4 left-4 z-40 text-xs text-gray-600 hover:text-gray-400 transition-colors"
            style={{ fontSize: '11px', letterSpacing: '0.05em' }}
            aria-label="Zmień ustawienia cookies"
            title="Zmień ustawienia cookies"
          >
            🍪 Cookies
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

