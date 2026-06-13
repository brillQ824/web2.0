export type Locale = 'pl' | 'en'

export const defaultLocale: Locale = 'pl'

export const locales: Locale[] = ['pl', 'en']

export const translations = {
  pl: {
    nav: {
      home: 'Strona główna',
      competences: 'Kompetencje',
      projects: 'Projekty',
      about: 'O brillQ',
      contact: 'Kontakt',
    },
    hero: {
      title1: 'Kształtujemy przyszłość',
      title2: 'dzięki',
      title2Accent: 'sztucznej inteligencji',
      subtitle: 'Innowacyjne rozwiązania AI, Machine Learning i Deep Learning. Specjalizujemy się w Agentic AI, NLP, Computer Vision i MLOps.',
      cta1: 'Odkryj nasze kompetencje',
      cta2: 'Skontaktuj się',
    },
    section2: {
      title: 'Wierzymy, że',
      accent1: 'sztuczna inteligencja',
      middle: 'jest kluczem do',
      accent2: 'bezprecedensowych innowacji',
    },
    footer: {
      contact: 'Kontakt',
      address: 'Adres',
      competences: 'Kompetencje',
      company: 'Firma',
      legal: 'Prawne',
      socialMedia: 'Social Media',
      copyright: 'brillQ AI © 2025. All rights reserved.',
    },
    contactSidebar: {
      title: 'Skontaktuj się z nami',
      subtitle: 'Jesteśmy gotowi pomóc w realizacji Twoich projektów AI',
      name: 'Imię i nazwisko',
      email: 'Email',
      phone: 'Telefon (opcjonalnie)',
      message: 'Wiadomość',
      submit: 'Wyślij wiadomość',
      contactInfo: 'Informacje kontaktowe',
    },
  },
  en: {
    nav: {
      home: 'Home',
      competences: 'Competences',
      projects: 'Projects',
      about: 'About brillQ',
      contact: 'Contact',
    },
    hero: {
      title1: 'Shaping the future',
      title2: 'with',
      title2Accent: 'artificial intelligence',
      subtitle: 'Innovative AI, Machine Learning and Deep Learning solutions. We specialize in Agentic AI, NLP, Computer Vision and MLOps.',
      cta1: 'Discover our competences',
      cta2: 'Contact us',
    },
    section2: {
      title: 'We believe that',
      accent1: 'artificial intelligence',
      middle: 'is the key to',
      accent2: 'unprecedented innovation',
    },
    footer: {
      contact: 'Contact',
      address: 'Address',
      competences: 'Competences',
      company: 'Company',
      legal: 'Legal',
      socialMedia: 'Social Media',
      copyright: 'brillQ AI © 2025. All rights reserved.',
    },
    contactSidebar: {
      title: 'Get in touch',
      subtitle: 'We are ready to help you realize your AI projects',
      name: 'Full name',
      email: 'Email',
      phone: 'Phone (optional)',
      message: 'Message',
      submit: 'Send message',
      contactInfo: 'Contact information',
    },
  },
}

export function getTranslations(locale: Locale = defaultLocale) {
  return translations[locale]
}
