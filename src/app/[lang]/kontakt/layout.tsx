import type { Metadata } from 'next'
import type { Locale } from '@/i18n/config'

const BASE_URL = 'https://brillq.today'

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const { lang } = params
  return {
    title: lang === 'en' ? 'Contact brillQ AI — Free AI Consultation' : 'Skontaktuj się z brillQ AI — Bezpłatna Konsultacja',
    description: lang === 'en'
      ? 'Contact brillQ AI. Free 30-min consultation — we will discuss your AI and Machine Learning needs.'
      : 'Skontaktuj się z brillQ AI. Bezpłatna konsultacja 30 min — omówimy Twoje potrzeby w zakresie AI i Machine Learning.',
    alternates: {
      canonical: `${BASE_URL}/${lang}/kontakt`,
      languages: {
        'pl': `${BASE_URL}/pl/kontakt`,
        'en': `${BASE_URL}/en/kontakt`,
        'x-default': `${BASE_URL}/en/kontakt`,
      },
    },
  }
}

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
