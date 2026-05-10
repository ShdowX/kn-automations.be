import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    readTime: z.string(),
    visual: z.enum(['v1', 'v2', 'v3', 'v4', 'v5', 'v6']).default('v1'),
    featured: z.boolean().default(false),
    lang: z.enum(['en', 'nl']).default('en'),
  }),
});

export const collections = { posts };
