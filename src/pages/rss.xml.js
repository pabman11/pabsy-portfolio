import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: 'Pablo Fornali - Blog',
    description: 'Pensamientos sobre desarrollo web, rol, narrativa y otros temas que me apasionan.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.pubDate),
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>es-es</language>`,
  });
}
