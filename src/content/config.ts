import { z, defineCollection } from 'astro:content';

const seo = z.optional(z.object({
  title: z.string(),
  description: z.string()
}))

const pageCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform(str => new Date(str)),
    meta: seo
  }),
})

const profileCollection = defineCollection({
  schema: z.object({
    firstName: z.string(),
    lastName: z.string(),
    title: z.string(),
    photo: z.string(),
    description: z.string(),
    pubDate: z.string().transform(str => new Date(str)),
    meta: seo
  }),  
})

export const collections = {
  'pages': pageCollection,
  'profiles': profileCollection,
}