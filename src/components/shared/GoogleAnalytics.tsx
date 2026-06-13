'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: Gtag.Gtag
    dataLayer?: any[]
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_ID) return

    const url = pathname + searchParams.toString()

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_ID, {
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  if (!GA_ID) {
    return null
  }

  return (
    <>
      <Script
        id="google-analytics-consent"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Consent Mode v2 — domyślnie DENIED do czasu wyrażenia zgody
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              wait_for_update: 500,
            });

            // Przywróć wcześniejszą zgodę jeśli już udzielona
            var _consent = typeof localStorage !== 'undefined' && localStorage.getItem('cookieConsent');
            if (_consent === 'accepted') {
              gtag('consent', 'update', { analytics_storage: 'granted' });
            }

            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `,
        }}
      />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
    </>
  )
}

