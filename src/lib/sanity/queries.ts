import { client } from './client'

// Competences
export async function getCompetences() {
  return client.fetch(`
    *[_type == "competence"] | order(order asc) {
      _id,
      title,
      slug,
      short,
      icon
    }
  `)
}

export async function getCompetenceBySlug(slug: string) {
  return client.fetch(`
    *[_type == "competence" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      short,
      body,
      cover,
      gallery,
      relatedProjects[]-> {
        _id,
        title,
        slug,
        excerpt,
        cover
      }
    }
  `, { slug })
}

// Projects
export async function getProjects(tag?: string) {
  if (tag) {
    return client.fetch(`
      *[_type == "project" && $tag in tags[]->slug.current] | order(date desc) {
        _id,
        title,
        slug,
        excerpt,
        cover,
        tags[]-> {
          title,
          slug
        }
      }
    `, { tag } as any)
  }
  
  return client.fetch(`
    *[_type == "project"] | order(date desc) {
      _id,
      title,
      slug,
      excerpt,
      cover,
      tags[]-> {
        title,
        slug
      }
    }
  `)
}

export async function getProjectBySlug(slug: string) {
  return client.fetch(`
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      cover,
      gallery,
      date,
      role,
      results,
      tags[]-> {
        title,
        slug
      },
      relatedProjects[]-> {
        _id,
        title,
        slug,
        excerpt,
        cover
      }
    }
  `, { slug })
}

// News
export async function getNews() {
  return client.fetch(`
    *[_type == "news"] | order(date desc) {
      _id,
      title,
      slug,
      date,
      excerpt,
      cover
    }
  `)
}

export async function getNewsBySlug(slug: string) {
  return client.fetch(`
    *[_type == "news" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      date,
      excerpt,
      body,
      cover,
      category
    }
  `, { slug })
}

// Careers
export async function getCareers() {
  return client.fetch(`
    *[_type == "career"] | order(_createdAt desc) {
      _id,
      title,
      location,
      type,
      description
    }
  `)
}

// Settings
export async function getSettings() {
  return client.fetch(`
    *[_type == "settings"][0] {
      orgName,
      address,
      phone,
      email,
      legal,
      socials,
      mapIframe
    }
  `)
}

// Home page
export async function getHomePage() {
  return client.fetch(`
    *[_type == "homePage"][0] {
      hero,
      featuredCompetences[]-> {
        _id,
        title,
        slug,
        short,
        icon
      },
      featuredProjects[]-> {
        _id,
        title,
        slug,
        excerpt,
        cover
      }
    }
  `)
}

// Group page
export async function getGroupPage() {
  return client.fetch(`
    *[_type == "groupPage"][0] {
      hero,
      mission,
      values,
      timeline
    }
  `)
}

// Tags
export async function getTags() {
  return client.fetch(`
    *[_type == "tag"] | order(title asc) {
      _id,
      title,
      slug
    }
  `)
}

