import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { PostCard } from 'nextra-theme-blog'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'
import { getPosts } from '../get-posts'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

const isIndex = (mdxPath) => !mdxPath || mdxPath.length === 0

export async function generateMetadata(props) {
  const params = await props.params
  if (isIndex(params.mdxPath)) {
    return { title: "Jasper Hartong's Blog" }
  }
  const { metadata } = await importPage(params.mdxPath)
  const { title, description } = metadata
  return {
    ...metadata,
    openGraph: {
      title,
      description,
      type: 'article'
    },
    twitter: {
      card: 'summary',
      title,
      description
    }
  }
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
  const params = await props.params
  if (isIndex(params.mdxPath)) {
    const posts = await getPosts()
    return (
      <div>
        <h1>👋 Welcome to my blog</h1>
        <p>Still early days, but I'll be posting more stuff and make it look a bit nicer soon! Perhaps. Probably.</p>
        <p>– Jasper Hartong • <a target="_blank" rel="noopener noreferrer" href="https://github.com/jasperhartong">GitHub</a> • <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/jasperhartong">LinkedIn</a>
        </p>
        <hr />
        <h2>Posts</h2>
        {posts.map(post => (
          <PostCard key={post.route} post={post} readMore="Read more" />
        ))}
      </div>
    )
  }
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode
  } = await importPage(params.mdxPath)
  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}