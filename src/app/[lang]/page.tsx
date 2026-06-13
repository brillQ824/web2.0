// ⭐ STRONA GŁÓWNA - Home Page Components (OPTIMIZED VERSION)
// Zoptymalizowano z 16 → 8 sekcji dla lepszej UX i conversion rate

import HeroSection from '@/components/pages/home/HeroSection'
import FourColumnSection from '@/components/pages/home/FourColumnSection'
import WhyUsSection from '@/components/pages/home/WhyUsSection'
import CaseStudiesSection from '@/components/pages/home/CaseStudiesSection'
import ProcessSection from '@/components/pages/home/ProcessSection'
import PartnersSection from '@/components/pages/home/PartnersSection'
import FinalCTASection from '@/components/pages/home/FinalCTASection'
import { ServiceJsonLd } from '@/components/shared/JsonLd'
import { Locale } from '@/i18n/config'

const BASE_URL = 'https://brillq.today'

export async function generateMetadata({ params }: { params: { lang: string } }) {
  const { lang } = params
  return {
    title: lang === 'en'
      ? 'brillQ - Advanced AI & Machine Learning Solutions'
      : 'brillQ - Zaawansowane Rozwiązania AI i Machine Learning',
    description: lang === 'en'
      ? 'We build advanced AI, ML, Deep Learning and LLM solutions. Specializing in Agentic AI, NLP, Computer Vision and MLOps.'
      : 'Tworzymy zaawansowane rozwiązania AI, ML, Deep Learning i LLM. Specjalizujemy się w Agentic AI, NLP, Computer Vision i MLOps.',
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        'pl': `${BASE_URL}/pl`,
        'en': `${BASE_URL}/en`,
        'x-default': `${BASE_URL}/en`,
      },
    },
  }
}

/**
 * Strona główna brillQ
 *
 * Struktura (7 sekcji):
 * 1. Hero - Pierwsze wrażenie, główny komunikat
 * 2. Competences - Co oferujemy (12 kompetencji AI/ML z efektami biznesowymi)
 * 3. Why Us - Dlaczego brillQ? (przewaga konkurencyjna)
 * 4. Process - Jak wygląda współpraca? (5 kroków wdrożenia AI)
 * 5. Partners - Certyfikacje i standardy
 * 6. Insights - AI & brillQ (thought leadership)
 * 7. CTA - Call to action
 */
export default function HomePage({ params }: { params: { lang: Locale } }) {
  return (
    <>
      <ServiceJsonLd />

      {/* 1. HERO - First impression */}
      <HeroSection lang={params.lang} />

      {/* 2. COMPETENCES - Co oferujemy (z animacjami) */}
      <FourColumnSection lang={params.lang} />

      {/* 3. WHY US - Dlaczego brillQ? */}
      <WhyUsSection />

      {/* 4. CASE STUDIES - Realne wdrożenia AI */}
      <CaseStudiesSection lang={params.lang} />

      {/* 5. PROCESS - Jak wygląda współpraca? */}
      <ProcessSection lang={params.lang} />

      {/* 6. SOCIAL PROOF - Partnerzy */}
      <PartnersSection lang={params.lang} />

      {/* 7. CTA - Call to action */}
      <FinalCTASection lang={params.lang} />
    </>
  )
}
