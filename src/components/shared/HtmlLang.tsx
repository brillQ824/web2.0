'use client'

import { useEffect } from 'react'
import type { Locale } from '@/i18n/config'

/**
 * Sets <html lang> to the active locale on the client.
 * The root layout owns <html> but can't read the [lang] route param,
 * so the per-locale value is applied here.
 */
export default function HtmlLang({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return null
}
