import Script from 'next/script'

interface OrganizationSchema {
  name: string
  url: string
  logo: string
  description: string
  address: {
    streetAddress: string
    addressLocality: string
    postalCode: string
    addressCountry: string
  }
  contactPoint: {
    telephone: string
    email: string
  }
  sameAs: string[]
}

interface BreadcrumbItem {
  name: string
  url: string
}

export function OrganizationJsonLd() {
  const schema: OrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'brillQ AI',
    url: 'https://brillQ.today',
    logo: 'https://brillQ.today/logo.png',
    description: 'Advanced AI & Machine Learning Solutions. Specjalizujemy się w LLM, Agentic AI, Deep Learning, NLP i Computer Vision.',
    telephone: '+48662466446',
    email: 'hello@brillQ.today',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Aleja Prymasa Tysiąclecia 83A',
      addressLocality: 'Warszawa',
      postalCode: '01-242',
      addressCountry: 'PL'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+48662466446',
      email: 'hello@brillQ.today',
      contactType: 'customer service',
      availableLanguage: ['Polish', 'English']
    },
    sameAs: [
      'https://www.linkedin.com/company/brill-ai',
      'https://github.com/brill-ai'
    ]
  } as any

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://brillQ.today${item.url}`
    }))
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI & Machine Learning Development',
    name: 'Wdrożenia AI i Machine Learning',
    description: 'Wdrożenia AI, LLM, Computer Vision, MLOps dla firm. Specjalizujemy się w Agentic AI, NLP, Deep Learning i Generative AI.',
    provider: {
      '@type': 'Organization',
      name: 'brillQ AI',
      url: 'https://brillQ.today'
    },
    areaServed: [
      { '@type': 'Country', name: 'Poland' },
      { '@type': 'Continent', name: 'Europe' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Usługi AI',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Large Language Models (LLM)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agentic AI' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Computer Vision' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Natural Language Processing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MLOps & Infrastructure' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Generative AI' } },
      ]
    }
  }

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleJsonLd({ 
  title, 
  description, 
  datePublished, 
  dateModified,
  image 
}: { 
  title: string
  description: string
  datePublished: string
  dateModified?: string
  image?: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image || undefined,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: 'Brill AI'
    },
    publisher: {
      '@type': 'Organization',
      name: 'brillQ AI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://brillQ.today/logo.png'
      }
    }
  }

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

