'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { Locale } from '@/i18n/config'

export default function HeroSection({ lang = 'pl' }: { lang?: Locale }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Opóźnij animacje do momentu gdy strona jest gotowa
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden bg-black flex items-center justify-center"
      style={{
        minHeight: '100vh',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      {/* Gradient Background - Static, fast loading */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(178, 158, 82, 0.08) 0%, rgba(0, 0, 0, 0.95) 50%, #000000 100%)',
          zIndex: 0,
        }}
      />

      {/* Animated gradient orbs - Only after page loads */}
      {isLoaded && (
        <>
          <motion.div
            className="absolute"
            style={{
              width: '500px',
              height: '500px',
              top: '15%',
              left: '5%',
              background: 'radial-gradient(circle, rgba(178, 158, 82, 0.12) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(80px)',
              zIndex: 0,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{
              opacity: { duration: 1.5 },
              scale: { duration: 1.5 },
              x: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
              y: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
            }}
          />

          <motion.div
            className="absolute"
            style={{
              width: '400px',
              height: '400px',
              bottom: '20%',
              right: '10%',
              background: 'radial-gradient(circle, rgba(178, 158, 82, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(90px)',
              zIndex: 0,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: [0, -20, 0],
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 1.5, delay: 0.3 },
              scale: { duration: 1.5, delay: 0.3 },
              x: { duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 },
              y: { duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 },
            }}
          />
        </>
      )}

      {/* Content Container */}
      <div
        className="relative z-10 w-full text-center"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 80px)',
          minHeight: '600px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          contain: 'layout',
        }}
      >
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ minHeight: '200px' }}
        >
          <h1
            style={{
              fontSize: 'clamp(48px, 7vw, 96px)',
              lineHeight: 1.1,
              fontWeight: 400,
              color: 'var(--color-light)',
              letterSpacing: '-0.02em',
              marginBottom: 'clamp(20px, 2.5vw, 28px)',
              willChange: 'transform',
            }}
          >
            {lang === 'pl' ? (
              <>
                Kształtujemy przyszłość<br />
                dzięki{' '}
                <span style={{ color: 'var(--color-primary)', display: 'inline-block' }}>
                  sztucznej inteligencji
                </span>
              </>
            ) : (
              <>
                We shape the future<br />
                through{' '}
                <span style={{ color: 'var(--color-primary)', display: 'inline-block' }}>
                  artificial intelligence
                </span>
              </>
            )}
          </h1>
        </motion.div>

        {/* Sub-headline - Sprzedażowy komunikat */}
        <motion.p
          style={{
            fontSize: 'clamp(22px, 2.2vw, 28px)',
            color: 'rgba(255, 255, 255, 0.95)',
            fontWeight: 500,
            lineHeight: 1.4,
            maxWidth: '900px',
            margin: '0 auto',
            marginBottom: 'clamp(16px, 2vw, 20px)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {lang === 'pl'
            ? 'Pomagamy firmom przejść od eksperymentów z AI do systemów, które realnie zarabiają pieniądze.'
            : 'We help companies transition from AI experiments to systems that actually generate revenue.'}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href={`/${lang}/kontakt`}
            className="inline-block px-10 py-5 bg-primary text-black hover:bg-primary/90 transition-all duration-300 rounded-full font-semibold uppercase tracking-wider text-sm"
            style={{
              boxShadow: '0 4px 14px 0 rgba(178, 158, 82, 0.4)',
            }}
          >
            {lang === 'pl' ? 'Rozpocznij Wdrożenie AI' : 'Start AI Implementation'}
          </a>
          <a
            href={`/${lang}/kontakt#konsultacja`}
            className="inline-block px-10 py-5 border-2 border-gray-700 text-white hover:border-primary hover:text-primary transition-all duration-300 rounded-full font-semibold uppercase tracking-wider text-sm"
          >
            {lang === 'pl' ? 'Bezpłatna konsultacja 30 min →' : 'Free 30-min Consultation →'}
          </a>
        </motion.div>

        {/* Trust indicators - Optional */}
        <motion.div
          className="flex gap-8 justify-center items-center flex-wrap"
          style={{
            marginTop: 'clamp(60px, 8vw, 80px)',
            opacity: isLoaded ? 0.6 : 0,
            minHeight: '120px',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 0.6 : 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
            <div className="text-center">
              <div
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 400,
                  color: 'var(--color-primary)',
                  lineHeight: 1,
                }}
              >
                10+
              </div>
              <div
                style={{
                  fontSize: 'clamp(12px, 1.2vw, 14px)',
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginTop: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {lang === 'pl' ? 'AI Ekspertów' : 'AI Experts'}
              </div>
            </div>

            <div
              style={{
                width: '1px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            />

            <div className="text-center">
              <div
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 400,
                  color: 'var(--color-primary)',
                  lineHeight: 1,
                }}
              >
                300+
              </div>
              <div
                style={{
                  fontSize: 'clamp(12px, 1.2vw, 14px)',
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginTop: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {lang === 'pl' ? 'Wdrożeń i modeli AI' : 'AI Deployments & Models'}
              </div>
            </div>

            <div
              style={{
                width: '1px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            />

            <div className="text-center">
              <div
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 400,
                  color: 'var(--color-primary)',
                  lineHeight: 1,
                }}
              >
                12
              </div>
              <div
                style={{
                  fontSize: 'clamp(12px, 1.2vw, 14px)',
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginTop: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {lang === 'pl' ? 'AI Specjalizacji' : 'AI Specializations'}
              </div>
            </div>

            <div
              style={{
                width: '1px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            />

            <div className="text-center">
              <div
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 400,
                  color: 'var(--color-primary)',
                  lineHeight: 1,
                }}
              >
                10+ TB
              </div>
              <div
                style={{
                  fontSize: 'clamp(12px, 1.2vw, 14px)',
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginTop: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {lang === 'pl' ? 'Danych ML' : 'ML Data'}
              </div>
            </div>

            <div
              style={{
                width: '1px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            />

            <div className="text-center">
              <div
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 400,
                  color: 'var(--color-primary)',
                  lineHeight: 1,
                }}
              >
                99.9%
              </div>
              <div
                style={{
                  fontSize: 'clamp(12px, 1.2vw, 14px)',
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginTop: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Uptime SLA
              </div>
            </div>

            <div
              style={{
                width: '1px',
                height: '40px',
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            />

            <div className="text-center">
              <div
                style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 400,
                  color: 'var(--color-primary)',
                  lineHeight: 1,
                }}
              >
                20+
              </div>
              <div
                style={{
                  fontSize: 'clamp(12px, 1.2vw, 14px)',
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginTop: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {lang === 'pl' ? 'Lat łącznego doświadczenia' : 'Years of Combined Experience'}
              </div>
            </div>
          </motion.div>
      </div>

      {/* Scroll indicator - Subtle */}
      {isLoaded && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ zIndex: 2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 2,
            delay: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      )}
    </section>
  )
}
