import type { Metadata } from 'next'
import type { Locale } from '@/i18n/config'

const BASE_URL = 'https://brillq.today'

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
  const { lang } = params
  return {
    title: lang === 'en' ? 'AI Training Courses & Books | brillQ AI' : 'Szkolenia i Książki AI dla firm | brillQ',
    description: lang === 'en'
      ? 'AI training and books for companies — practical knowledge on Large Language Models, Agentic AI and Machine Learning from brillQ experts.'
      : 'Szkolenia i książki o AI dla firm — praktyczna wiedza o Large Language Models, Agentic AI i Machine Learning od ekspertów brillQ.',
    alternates: {
      canonical: `${BASE_URL}/${lang}/produkty`,
      languages: {
        'pl': `${BASE_URL}/pl/produkty`,
        'en': `${BASE_URL}/en/produkty`,
        'x-default': `${BASE_URL}/en/produkty`,
      },
    },
  }
}

export default function ProduktyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
