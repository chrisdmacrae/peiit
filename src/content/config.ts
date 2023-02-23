import { z, defineCollection } from 'astro:content';

const seo = z.optional(z.object({
  title: z.optional(z.string()),
  description: z.optional(z.string())
}))

const pageCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform(str => new Date(str)),
    meta: seo
  }),
})

const newsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.optional(z.string()),
    pubDate: z.string().transform(str => new Date(str)),
    meta: seo
  }),
  slug: (entry) => `news/${entry.defaultSlug}`
})

const profileCollection = defineCollection({
  schema: z.object({
    firstName: z.string(),
    lastName: z.string(),
    title: z.string(),
    photo: z.string(),
    description: z.string(),
    pubDate: z.string().transform(str => new Date(str)),
    meta: seo,
    peiDevsElder: z.optional(z.union([z.literal('active'), z.literal('inactive')]))
  }),
  slug: (entry) => entry.defaultSlug.startsWith('pei-devs') ? entry.defaultSlug : `news/${entry.defaultSlug}`
})

export const collections = {
  'pages': pageCollection,
  'news': newsCollection,
  'profiles': profileCollection,
}