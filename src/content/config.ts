import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['Guías de cuidado', 'Problemas y enfermedades', 'Tipos de plantas']),
    slug: z.string().optional(),
    author: z.string().default('Equipo VerdeEnCasa'),
  }),
});

export const collections = { blog };
