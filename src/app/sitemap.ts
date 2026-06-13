import { MetadataRoute } from 'next'

const BASE_URL = 'https://brillq.today'
const locales = ['pl', 'en'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  // Static subpages (without language prefix)
  const staticSlugs = [
    { slug: '', priority: 1.0, freq: 'daily' as const },
    { slug: '/kontakt', priority: 0.9, freq: 'weekly' as const },
    { slug: '/grupa', priority: 0.8, freq: 'weekly' as const },
    { slug: '/rd', priority: 0.8, freq: 'weekly' as const },
    { slug: '/produkty', priority: 0.8, freq: 'weekly' as const },
    { slug: '/polityka-prywatnosci', priority: 0.3, freq: 'yearly' as const },
    { slug: '/polityka-cookies', priority: 0.3, freq: 'yearly' as const },
  ]

  const entries: MetadataRoute.Sitemap = []

  // Static pages — both languages
  for (const { slug, priority, freq } of staticSlugs) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${slug}`,
        lastModified: new Date(),
        changeFrequency: freq,
        priority,
      })
    }
  }

  return entries
}

