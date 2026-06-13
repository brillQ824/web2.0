export const competenceSchema = {
  name: 'competence',
  title: 'Kompetencje',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'short',
      title: 'Krótki opis',
      type: 'text',
      validation: (Rule: any) => Rule.required().max(200)
    },
    {
      name: 'icon',
      title: 'Ikona (emoji lub kod)',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Kolejność',
      type: 'number',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'body',
      title: 'Treść',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Tekst alternatywny'
            }
          ]
        }
      ]
    },
    {
      name: 'cover',
      title: 'Obrazek główny',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      title: 'Galeria',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Tekst alternatywny'
            }
          ]
        }
      ]
    },
    {
      name: 'relatedProjects',
      title: 'Powiązane projekty',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }]
    }
  ]
}

export const projectSchema = {
  name: 'project',
  title: 'Projekty',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Wstęp',
      type: 'text',
      validation: (Rule: any) => Rule.required().max(300)
    },
    {
      name: 'body',
      title: 'Treść',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'cover',
      title: 'Obrazek główny',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      title: 'Galeria',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        }
      ]
    },
    {
      name: 'date',
      title: 'Data',
      type: 'date',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'role',
      title: 'Rola w projekcie',
      type: 'string',
    },
    {
      name: 'results',
      title: 'Wyniki',
      type: 'object',
      fields: [
        {
          name: 'key1',
          title: 'Wynik 1',
          type: 'string'
        },
        {
          name: 'key2',
          title: 'Wynik 2',
          type: 'string'
        },
        {
          name: 'key3',
          title: 'Wynik 3',
          type: 'string'
        }
      ]
    },
    {
      name: 'tags',
      title: 'Tagi',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }]
    },
    {
      name: 'relatedProjects',
      title: 'Podobne projekty',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }]
    }
  ]
}

export const newsSchema = {
  name: 'news',
  title: 'Aktualności',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'date',
      title: 'Data',
      type: 'date',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Wstęp',
      type: 'text',
      validation: (Rule: any) => Rule.required().max(300)
    },
    {
      name: 'body',
      title: 'Treść',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'cover',
      title: 'Obrazek główny',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Kategoria',
      type: 'string',
      options: {
        list: [
          { title: 'Alioth Group', value: 'alioth-group' },
          { title: 'Technologia', value: 'technologia' },
          { title: 'Biznes', value: 'biznes' },
        ]
      }
    }
  ]
}

export const careerSchema = {
  name: 'career',
  title: 'Kariera',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Stanowisko',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'location',
      title: 'Lokalizacja',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'type',
      title: 'Typ zatrudnienia',
      type: 'string',
      options: {
        list: [
          { title: 'Pełny etat', value: 'full-time' },
          { title: 'Część etatu', value: 'part-time' },
          { title: 'Kontrakt', value: 'contract' },
        ]
      }
    },
    {
      name: 'description',
      title: 'Opis',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
}

export const tagSchema = {
  name: 'tag',
  title: 'Tagi',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nazwa',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required()
    }
  ]
}

export const settingsSchema = {
  name: 'settings',
  title: 'Ustawienia',
  type: 'document',
  fields: [
    {
      name: 'orgName',
      title: 'Nazwa organizacji',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Adres',
      type: 'text',
    },
    {
      name: 'phone',
      title: 'Telefon',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'legal',
      title: 'Dane rejestrowe',
      type: 'object',
      fields: [
        {
          name: 'nip',
          title: 'NIP',
          type: 'string'
        },
        {
          name: 'krs',
          title: 'KRS',
          type: 'string'
        }
      ]
    },
    {
      name: 'socials',
      title: 'Social media',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url'
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url'
        }
      ]
    },
    {
      name: 'mapIframe',
      title: 'Iframe mapy',
      type: 'text',
    }
  ]
}

export const homePageSchema = {
  name: 'homePage',
  title: 'Strona główna',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Sekcja Hero',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Tytuł',
          type: 'string'
        },
        {
          name: 'subtitle',
          title: 'Podtytuł',
          type: 'text'
        }
      ]
    },
    {
      name: 'featuredCompetences',
      title: 'Wyróżnione kompetencje',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'competence' }] }]
    },
    {
      name: 'featuredProjects',
      title: 'Wyróżnione projekty',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }]
    }
  ]
}

export const groupPageSchema = {
  name: 'groupPage',
  title: 'Strona Grupa',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Sekcja Hero',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Tytuł',
          type: 'string'
        },
        {
          name: 'subtitle',
          title: 'Podtytuł',
          type: 'text'
        }
      ]
    },
    {
      name: 'mission',
      title: 'Misja',
      type: 'text',
    },
    {
      name: 'values',
      title: 'Wartości',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string'
            },
            {
              name: 'description',
              type: 'text'
            }
          ]
        }
      ]
    },
    {
      name: 'timeline',
      title: 'Historia',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'year',
              type: 'string'
            },
            {
              name: 'title',
              type: 'string'
            },
            {
              name: 'description',
              type: 'text'
            }
          ]
        }
      ]
    }
  ]
}

export const schemaTypes = [
  competenceSchema,
  projectSchema,
  newsSchema,
  careerSchema,
  tagSchema,
  settingsSchema,
  homePageSchema,
  groupPageSchema,
]

