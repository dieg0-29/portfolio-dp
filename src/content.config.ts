import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Proyectos: un archivo Markdown por proyecto y por idioma.
 *   src/content/projects/es/mi-proyecto.md
 *   src/content/projects/en/mi-proyecto.md
 * El nombre de archivo debe coincidir en ambos idiomas.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      status: z.enum(['done', 'in-progress']),
      year: z.number().int(),
      tech: z.array(z.string()).min(1),
      image: image(),
      imageAlt: z.string(),
      demo: z.url().optional(),
      repo: z.url().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(99),
    }),
});

/** Experiencia laboral y formación (también por idioma). */
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    org: z.string(),
    type: z.enum(['work', 'education']),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    location: z.string().optional(),
    summary: z.string(),
    tech: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, experience };
