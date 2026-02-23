import { getPosts } from './get-posts'

const siteUrl = 'https://jasperhartong.com'

export default async function sitemap() {
  const posts = await getPosts()

  const postEntries = posts.map(post => ({
    url: `${siteUrl}${post.route}`,
    lastModified: post.frontMatter?.date
      ? new Date(post.frontMatter.date)
      : new Date(),
    changeFrequency: 'monthly',
    priority: 0.8
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    ...postEntries
  ]
}
