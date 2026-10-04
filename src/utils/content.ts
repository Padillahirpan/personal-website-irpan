import type { CollectionEntry } from 'astro:content';

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('id-ID', {
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

/** Post terbaru di atas; draft disaring saat build produksi. */
export function sortPosts(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function publishedPosts(posts: Post[]): Post[] {
  return posts.filter((post) => (import.meta.env.PROD ? !post.data.draft : true));
}
