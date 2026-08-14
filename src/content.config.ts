import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects & Research — category splits Current Research / Side Projects / Archive
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: () =>
    z.object({
      title: z.string(),
      category: z.enum(['current', 'side', 'archive']),
      status: z.enum(['active', 'paused', 'shipped', 'archived']),
      summary: z.string(),
      problem: z.string(),
      approach: z.string(),
      learned: z.string(),
      tags: z.array(z.string()).default([]),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      cover: z.string().optional(),
      links: z
        .array(z.object({ label: z.string(), url: z.string() }))
        .default([]),
      draft: z.boolean().default(false),
    }),
});

// Notes — the digital garden. evergreen vs dated, freeform tags.
const notes = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/notes' }),
  schema: () =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      evergreen: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      summary: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

// Reading — books and papers share a shape, `kind` distinguishes them.
const reading = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/reading' }),
  schema: () =>
    z.object({
      title: z.string(),
      kind: z.enum(['book', 'paper']),
      author: z.string(),
      link: z.string().optional(),
      rating: z.number().min(1).max(5).optional(),
      takeaway: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

// Essays — long-form, polished, rare.
const essays = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/essays' }),
  schema: () =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      summary: z.string(),
      tags: z.array(z.string()).default([]),
      category: z.enum(['technical', 'general']).default('general'),
      draft: z.boolean().default(false),
    }),
});

// People — short profiles of people who left an impression.
const people = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/people' }),
  schema: () =>
    z.object({
      name: z.string(),
      context: z.string(),
      date: z.coerce.date(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, notes, reading, essays, people };
