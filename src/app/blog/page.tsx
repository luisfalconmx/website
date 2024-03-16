import hashnodeClient from '@/clients/hashnodeClient'
import BlockGradient from '@/components/BlockGradient'
import Breadcrumb from '@/components/Breadcrumb'
import PostCard from '@/components/PostCard'
import {
  GetBlogPostsQuery,
  GetBlogPostsQueryVariables,
  GetBlogPostsDocument
} from '@/generated/hashnode.schema'
import { HASHNODE_HOST } from '@/config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'blog'
}

export const revalidate = 60

export default async function Blog() {
  const client = hashnodeClient()

  const response = await client.query<
    GetBlogPostsQuery,
    GetBlogPostsQueryVariables
  >({
    query: GetBlogPostsDocument,
    variables: {
      hostname: HASHNODE_HOST,
      postCount: 12,
      after: ''
    }
  })

  const posts = response.data.publication?.posts.edges
  const pageInfo = response.data.publication?.posts.pageInfo

  return (
    <>
      <BlockGradient variant="right" />
      <Breadcrumb />

      <div className="absolute h-[1px] max-w-screen-xl overflow-hidden">
        <h1 className="mb-6 block text-4xl font-bold">Blog</h1>
        <p className="mx-auto block max-w-[70%] text-lg">
          Explore our growing collection of courses on key web design and
          development subjects. An industry expert has written each course,
          helped by members of the Chrome team.
        </p>
      </div>

      <section className="mx-auto mb-16 mt-8 max-w-screen-xl px-8">
        {posts
          ?.slice(0, 1)
          .map((post) => (
            <PostCard
              key={post.node.title}
              title={post.node.title}
              description={post.node.brief}
              link={`/blog/${post.node.slug}`}
              image={post.node.coverImage?.url || ''}
              date={post.node.publishedAt}
              readingTime={post.node.readTimeInMinutes}
              tag={
                post.node.tags?.map((tag, index) =>
                  index === 0 ? tag.name : ''
                )[0]
              }
              variant="jumbo"
            />
          ))}
      </section>

      <section className="mx-auto mb-16 grid max-w-screen-xl grid-cols-1 gap-4 px-2 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:px-6">
        {posts
          ?.slice(1, 7)
          .map((post) => (
            <PostCard
              key={post.node.title}
              title={post.node.title}
              description={post.node.brief}
              link={`/blog/${post.node.slug}`}
              image={post.node.coverImage?.url || ''}
              date={post.node.publishedAt}
              readingTime={post.node.readTimeInMinutes}
              tag={
                post.node.tags?.map((tag, index) =>
                  index === 0 ? tag.name : ''
                )[0]
              }
              variant="default"
            />
          ))}
      </section>

      <section className="mx-auto mb-16 grid max-w-screen-xl grid-cols-1 gap-x-4 px-2 md:grid-cols-2 md:px-4 lg:px-6">
        {posts
          ?.slice(7, 9)
          .map((post) => (
            <PostCard
              key={post.node.title}
              title={post.node.title}
              description={post.node.brief}
              link={`/blog/${post.node.slug}`}
              image={post.node.coverImage?.url || ''}
              date={post.node.publishedAt}
              readingTime={post.node.readTimeInMinutes}
              tag={
                post.node.tags?.map((tag, index) =>
                  index === 0 ? tag.name : ''
                )[0]
              }
              variant="square"
            />
          ))}
      </section>

      <section className="mx-auto mb-16 grid max-w-screen-xl grid-cols-1 gap-y-8 px-6 md:grid-cols-2 md:gap-x-3 md:px-4 lg:grid-cols-1 lg:gap-x-0 lg:px-6">
        {posts
          ?.slice(9, 13)
          .map((post) => (
            <PostCard
              key={post.node.title}
              title={post.node.title}
              description={post.node.brief}
              link={`/blog/${post.node.slug}`}
              image={post.node.coverImage?.url || ''}
              date={post.node.publishedAt}
              readingTime={post.node.readTimeInMinutes}
              tag={
                post.node.tags?.map((tag, index) =>
                  index === 0 ? tag.name : ''
                )[0]
              }
              variant="track"
            />
          ))}
      </section>
    </>
  )
}
