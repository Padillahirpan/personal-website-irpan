import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site';
import { publishedPosts, sortPosts } from '../utils/content';

export async function GET(context: APIContext) {
  const posts = sortPosts(publishedPosts(await getCollection('writing')));

  return rss({
    title: `${SITE.name} — Writing`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/writing/${post.id}/`,
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: '<language>id</language>',
  });
}
