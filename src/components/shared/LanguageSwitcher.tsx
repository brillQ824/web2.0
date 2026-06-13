'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import type { Locale } from '@/i18n/config'

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname()

  // Remove the current language prefix from pathname
  const pathnameWithoutLang = pathname.replace(/^\/(pl|en)/, '') || ''

  return (
    <div className="flex gap-6 text-xs">
      <Link
        href={`/pl${pathnameWithoutLang}`}
        className="transition-colors duration-300 uppercase tracking-wider"
        style={{
          color: currentLang === 'pl' ? 'var(--color-primary)' : 'var(--color-gray-500)',
          fontWeight: currentLang === 'pl' ? 400 : 300,
          letterSpacing: '0.1em',
        }}
      >
        PL
      </Link>
      <Link
        href={`/en${pathnameWithoutLang}`}
        className="hover:text-primary transition-colors duration-300 uppercase tracking-wider"
        style={{
          color: currentLang === 'en' ? 'var(--color-primary)' : 'var(--color-gray-500)',
          fontWeight: currentLang === 'en' ? 400 : 300,
          letterSpacing: '0.1em',
        }}
      >
        EN
      </Link>
    </div>
  )
}
