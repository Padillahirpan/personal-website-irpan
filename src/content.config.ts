import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      category: z.enum(['Jurnal', 'Teknologi', 'Kebun']),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      cover: image().optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      status: z.enum(['Aktif', 'Live', 'Selesai', 'Arsip']),
      stack: z.array(z.string()),
      link: z.string().url().optional(),
      cover: image().optional(),
      order: z.number().default(99),
    }),
});

const kebunLog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/kebun-log' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      photo: image(),
    }),
});

export const collections = { writing, projects, kebunLog };
