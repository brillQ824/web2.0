'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'
import type { Locale } from '@/i18n/config'

const mainNavigation = [
  { name: 'Strona główna', href: '' },
  { name: 'O brillQ AI', href: '/grupa' },
  { name: 'R&D', href: '/rd' },
  { name: 'Produkty', href: '/produkty' },
]

export default function Header({ lang = 'pl' }: { lang?: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  // Close menu on route change
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false)
    }
    document.body.style.overflow = 'unset'
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Header background on scroll
  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10)
          ticking = false
        })
        ticking = true
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        {lang === 'pl' ? 'Przeskocz do treści' : 'Skip to content'}
      </a>

      <header
        className="fixed top-0 left-0 right-0 transition-all duration-500 z-header header-blur"
        style={{
          backgroundColor: scrolled || menuOpen ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.3)',
          borderBottom: scrolled || menuOpen ? '1px solid rgba(112,112,112,0.2)' : '1px solid transparent',
        }}
      >
        <nav
          className="mx-auto flex items-center justify-between"
          style={{
            maxWidth: 'var(--page-width)',
            padding: '12px 24px',
          }}
          aria-label={lang === 'pl' ? 'Główna nawigacja' : 'Main navigation'}
        >
          {/* Logo */}
          <Link href={`/${lang}`} className="block relative" style={{ lineHeight: 0 }}>
            <motion.div
              className="font-bold tracking-tight"
              style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <span style={{ color: 'var(--color-light)' }}>brillQ</span>{' '}
              <span style={{ color: 'var(--color-primary)' }}>AI</span>
            </motion.div>
          </Link>

          {/* Right side: language switcher + burger menu */}
          <div className="flex items-center" style={{ gap: '20px' }}>
            <LanguageSwitcher currentLang={lang} />

            <motion.button
            type="button"
            className="cursor-pointer relative burger-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            style={{ padding: '8px' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={(e) => {
              const path = e.currentTarget.querySelector('path')
              if (path) {
                path.setAttribute('stroke', 'var(--color-primary)')
              }
            }}
            onMouseLeave={(e) => {
              const path = e.currentTarget.querySelector('path')
              if (path) {
                path.setAttribute('stroke', 'var(--color-light)')
              }
            }}
          >
            <motion.svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.path
                d={menuOpen ? "M18 6L6 18M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                stroke="var(--color-light)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={false}
                animate={{ d: menuOpen ? "M18 6L6 18M6 6l12 12" : "M4 6h16M4 12h16M4 18h16" }}
                style={{
                  transition: 'stroke 0.3s ease',
                }}
              />
            </motion.svg>
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Fullscreen Menu - Always in DOM, controlled by CSS */}
      <div
        className="fixed left-0 w-full h-full bg-black z-menu"
        style={{
          top: menuOpen ? '0' : '-100%',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          overflowY: 'auto',
          overflowX: 'hidden',
          transitionProperty: 'top, opacity',
          transitionDuration: '0.5s',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div
          className="flex h-full menu-container"
          style={{
            maxWidth: 'var(--page-width)',
            margin: '0 auto',
            paddingTop: '88px',
            gap: '0px',
          }}
        >
          {/* Main Navigation - Left Side */}
          <div
            className="flex flex-col justify-between h-full main-nav"
            style={{
              flex: '0 0 auto',
              paddingLeft: 'clamp(24px, 8vw, 128px)',
              paddingRight: 'clamp(24px, 5vw, 80px)',
              minWidth: 'clamp(280px, 50vw, 400px)',
            }}
          >
            <div className="flex flex-col gap-6">
              {mainNavigation.map((item, index) => {
                const itemHref = `/${lang}${item.href}`
                const isActive = pathname === itemHref
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: menuOpen ? 0.3 + index * 0.08 : 0 }}
                  >
                    <Link
                      href={itemHref}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <motion.div
                        className="relative inline-block"
                        whileHover={{ x: 8 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <motion.span
                          className="block"
                          style={{
                            fontSize: 'clamp(36px, 4vw, 64px)',
                            fontWeight: 400,
                            color: isActive ? 'var(--color-light)' : 'var(--color-gray4)',
                            textDecoration: 'none',
                            lineHeight: 1.2,
                            letterSpacing: '-0.02em',
                          }}
                          whileHover={{ color: 'var(--color-light)' }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.name}
                        </motion.span>
                        <motion.div
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            height: '2px',
                            backgroundColor: 'var(--color-primary)',
                            width: 0,
                          }}
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {/* Language Switcher */}
            <div className="mt-auto mb-12">
              <LanguageSwitcher currentLang={lang} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style jsx>{`
        @media (max-width: 992px) {
          nav {
            padding: 12px 24px !important;
          }

          .menu-container {
            flex-direction: column !important;
            padding: 88px 24px 24px !important;
            overflow-y: auto !important;
            gap: 0px !important;
          }

          .main-nav {
            padding-left: 0 !important;
            padding-right: 0 !important;
            min-width: auto !important;
            width: 100% !important;
          }
        }
      `}</style>
    </>
  )
}
