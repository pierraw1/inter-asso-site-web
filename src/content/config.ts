// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const evenementsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    lieu: z.string(),
    image: z.string().optional(),
    club: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'evenements': evenementsCollection,
};