import type { Metadata } from 'next'
import type { Locale } from '@/i18n/config'

const BASE_URL = 'https://brillq.today'

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const { lang } = params
  return {
    title: lang === 'en' ? 'About brillQ AI — Expert AI & ML Team' : 'O brillQ AI — kim jesteśmy | brillQ',
    description: lang === 'en'
      ? 'brillQ is a Liquid Enterprise — a network of independent AI, ML and Deep Learning experts. Learn about our model and values.'
      : 'brillQ to Liquid Enterprise — sieć niezależnych ekspertów AI, ML i Deep Learning. Poznaj nasz model działania i wartości.',
    alternates: {
      canonical: `${BASE_URL}/${lang}/grupa`,
      languages: {
        'pl': `${BASE_URL}/pl/grupa`,
        'en': `${BASE_URL}/en/grupa`,
        'x-default': `${BASE_URL}/en/grupa`,
      },
    },
  }
}

export default function GrupaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
