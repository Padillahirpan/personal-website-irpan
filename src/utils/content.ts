import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export function formatDate(date: Date, lang: Lang = 'id'): string {
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString();
}

/** Estimasi waktu baca (menit) — rata-rata 200 kata/menit. */
export function readingTime(body: string | undefined): number {
  const words = (body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

type Post = CollectionEntry<'writing'>;
type Project = CollectionEntry<'projects'>;

/** Post terbaru di atas; draft disaring saat build produksi. */
export function sortPosts(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function publishedPosts(posts: Post[]): Post[] {
  return posts.filter((post) => (import.meta.env.PROD ? !post.data.draft : true));
}

/** Dipakai getStaticPaths di /writing/[slug] dan /en/writing/[slug]. */
export async function writingPaths() {
  const posts = sortPosts(publishedPosts(await getCollection('writing')));
  return posts.map((post, i) => ({
    params: { slug: post.id },
    props: { post, prev: posts[i - 1] ?? null, next: posts[i + 1] ?? null },
  }));
}

/** Dipakai getStaticPaths di /projects/[slug] dan /en/projects/[slug]. */
export async function projectPaths() {
  const projects = (await getCollection('projects')).sort(
    (a, b) => a.data.order - b.data.order,
  );
  return projects.map((project, i) => ({
    params: { slug: project.id },
    props: { project, prev: projects[i - 1] ?? null, next: projects[i + 1] ?? null },
  }));
}
