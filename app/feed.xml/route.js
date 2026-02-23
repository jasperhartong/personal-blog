import { getPosts } from '../get-posts'

const siteUrl = 'https://jasperhartong.com'

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const posts = await getPosts()

  const items = posts
    .map(
      post => `
    <item>
      <title>${escapeXml(post.frontMatter?.title ?? post.name)}</title>
      <link>${siteUrl}${post.route}</link>
      <pubDate>${new Date(post.frontMatter?.date).toUTCString()}</pubDate>
      <guid>${siteUrl}${post.route}</guid>
    </item>`
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Jasper Hartong</title>
    <link>${siteUrl}</link>
    <description>Jasper Hartong's blog</description>
    <language>en</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
  })
}
