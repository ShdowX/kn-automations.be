import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', (p) => p.data.lang === 'en');
  
  const pages = [
    { url: '/', lastmod: new Date().toISOString(), priority: '1.0' },
    { url: '/about', lastmod: new Date().toISOString(), priority: '0.8' },
    { url: '/speaking', lastmod: new Date().toISOString(), priority: '0.7' },
  ];

  const postUrls = posts
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
    .map((post) => ({
      url: `/posts/${post.id.replace(/^en\//, '')}`,
      lastmod: post.data.date.toISOString(),
      priority: '0.6',
    }));

  const allUrls = [...pages, ...postUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (item) =>
      `  <url>
    <loc>${context.site}${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
