import { PostCard } from 'nextra-theme-blog'
import { getPosts } from './get-posts'

export default async function IndexPage() {
  const posts = await getPosts()
  return (
    <div>
      <h1>👋 Welcome to my blog</h1>
      <p>Still early days, but I'll be posting more stuff and make it look a bit nicer soon! Perhaps. Probably.</p>
      <p>– Jasper Hartong • <a target="_blank" rel="noopener noreferrer" href="https://github.com/jasperhartong">GitHub</a> • <a target="_blank" rel="noopener noreferrer " href="https://linkedin.com/in/jasperhartong">LinkedIn</a>
      </p>
      <hr />
      <h2>Posts</h2>
      {posts.map(post => (
        <PostCard key={post.route} post={post} readMore="Read more" />
      ))}
    </div>
  )
}
