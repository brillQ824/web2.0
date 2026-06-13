'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import type { Locale } from '@/i18n/config'

const footerNavigation = {
  firma: {
    pl: [
      { name: 'O brillQ AI', href: '/grupa' },
      { name: 'R&D', href: '/rd' },
      { name: 'Szkolenia & Książki', href: '/produkty' },
      { name: 'Kontakt', href: '/kontakt' },
    ],
    en: [
      { name: 'About brillQ AI', href: '/grupa' },
      { name: 'R&D', href: '/rd' },
      { name: 'Training & Books', href: '/produkty' },
      { name: 'Contact', href: '/kontakt' },
    ],
  },
  prawne: {
    pl: [
      { name: 'Polityka prywatności', href: '/polityka-prywatnosci' },
      { name: 'Polityka cookies', href: '/polityka-cookies' },
    ],
    en: [
      { name: 'Privacy Policy', href: '/polityka-prywatnosci' },
      { name: 'Cookie Policy', href: '/polityka-cookies' },
    ],
  },
}

const socialLinks = [
  {
    name: 'LinkedIn',
    ariaLabel: 'brillQ AI na LinkedIn (otwiera nową kartę)',
    href: 'https://www.linkedin.com/company/brill-ai',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  },
  {
    name: 'GitHub',
    ariaLabel: 'brillQ AI na GitHub (otwiera nową kartę)',
    href: 'https://github.com/brill-ai',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    )
  },
]

export default function Footer({ lang = 'pl' }: { lang?: Locale }) {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.1 })

  return (
    <footer
      ref={footerRef}
      className="bg-black text-gray-400 relative overflow-hidden"
      aria-labelledby="footer-heading"
      style={{
        borderTop: '1px solid rgba(112, 112, 112, 0.2)',
      }}
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Background video element (optional) */}
      <div
        className="absolute video-glow"
        style={{
          bottom: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'rgba(178, 158, 82, 0.02)',
          borderRadius: '8px',
          opacity: 0.5,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(178, 158, 82, 0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="mx-auto relative z-10" style={{ maxWidth: 'var(--page-width)', padding: '100px 100px 60px' }}>
        {/* Trust Badge */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="inline-block relative"
            style={{
              borderTop: '1px solid rgba(178, 158, 82, 0.3)',
              borderBottom: '1px solid rgba(178, 158, 82, 0.3)',
              padding: '16px 40px',
            }}
          >
            <p
              className="text-primary"
              style={{
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                fontWeight: 400,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                opacity: 0.9,
              }}
            >
              {lang === 'pl'
                ? 'Zaufanie wiodących przedsiębiorstw w Europie i na świecie'
                : 'Trusted by forward-thinking enterprises in Europe and worldwide'}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-12 gap-8 md:gap-10 lg:gap-12 mb-20">
          {/* Company Info */}
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8">
              {/* Logo with border */}
              <motion.div
                className="inline-block mb-6"
                style={{
                  border: '1px solid var(--color-primary)',
                  padding: '16px 24px',
                }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(178, 158, 82, 0.8)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-2xl font-normal tracking-tight" style={{ letterSpacing: '-0.01em' }}>
                  <span className="text-white" style={{ fontWeight: 400 }}>brillQ</span>
                  <span className="text-primary ml-2" style={{ fontWeight: 400 }}>AI</span>
                </div>
              </motion.div>
              <p className="text-sm text-gray-300 leading-relaxed" style={{ lineHeight: 1.8, opacity: 0.8 }}>
                Advanced AI & Machine Learning Solutions
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-normal text-gray-300 mb-3 uppercase tracking-wider" style={{ letterSpacing: '0.1em' }}>{lang === 'en' ? 'Contact' : 'Kontakt'}</p>
                <div className="space-y-2 text-sm" style={{ lineHeight: 1.8 }}>
                  <p className="text-gray-400">t: <a href="tel:+48662466446" className="hover:text-primary transition-colors duration-500">+48 662 466 446</a></p>
                  <p className="text-gray-400"><a href="mailto:hello@brillQ.today" className="hover:text-primary transition-colors duration-500">hello@brillQ.today</a></p>
                </div>
              </div>

              <div>
                <p className="text-xs font-normal text-gray-300 mb-3 uppercase tracking-wider" style={{ letterSpacing: '0.1em' }}>{lang === 'en' ? 'Address' : 'Adres'}</p>
                <div className="space-y-1.5 text-sm text-gray-400" style={{ lineHeight: 1.8 }}>
                  <p>Aleja Prymasa Tysiąclecia 83A</p>
                  <p>01-242 Warszawa</p>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-gray-300" style={{ opacity: 0.7 }}>
                <p>NIP: 5223203240</p>
                <p>KRS: 0000901473</p>
              </div>
            </div>
          </motion.div>

          {/* Firma */}
          <motion.div
            className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-sm font-normal text-gray-300 uppercase mb-6" style={{ letterSpacing: '0.1em' }}>
              {lang === 'en' ? 'Company' : 'Firma'}
            </h3>
            <ul className="space-y-3">
              {footerNavigation.firma[lang].map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/${lang}${item.href}`}
                    className="text-base text-gray-400 hover:text-primary transition-colors duration-500"
                    style={{ lineHeight: 1.8, fontWeight: 300 }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Prawne & Social */}
          <motion.div
            className="col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-sm font-normal text-gray-300 uppercase mb-6" style={{ letterSpacing: '0.1em' }}>
              {lang === 'en' ? 'Legal' : 'Prawne'}
            </h3>
            <ul className="space-y-3 mb-8">
              {footerNavigation.prawne[lang].map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/${lang}${item.href}`}
                    className="text-base text-gray-400 hover:text-primary transition-colors duration-500"
                    style={{ lineHeight: 1.8, fontWeight: 300 }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-normal text-gray-300 uppercase mb-4" style={{ letterSpacing: '0.1em' }}>
                  Social Media
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="text-gray-400"
                      aria-label={item.ariaLabel}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: 'var(--color-primary)' }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-normal text-gray-300 uppercase mb-4" style={{ letterSpacing: '0.1em' }}>
                  Language
                </h3>
                <LanguageSwitcher currentLang={lang} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8" style={{ borderTop: '1px solid rgba(112, 112, 112, 0.15)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-300" style={{ opacity: 0.7, fontWeight: 300 }}>
              brillQ AI © 2025–2026. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style jsx>{`
        @media (max-width: 992px) {
          div[style*="padding: 100px"] {
            padding: 48px 24px 40px !important;
          }
        }
      `}</style>
    </footer>
  )
}

