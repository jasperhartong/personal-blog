const siteUrl = 'https://jasperhartong.com'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`
  }
}
