import { PostCard } from '@/components/PostCard'
import { Pagination } from '@/components/Pagination'
import { getArticles } from '@/services/hashnode/getArticles'
import { SITE_URL, HASHNODE_USERNAME } from '@/config/env'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'A collection of articles about frontend development, web performance, best practices, tutorials, and more.',
  openGraph: {
    title: 'Blog',
    description:
      'A collection of articles about frontend development, web performance, best practices, tutorials, and more.',
    type: 'website',
    url: `${SITE_URL}/blog`,
    images: [
      {
        url: `${SITE_URL}/images/open-graph-image.jpg`
      }
    ]
  },
  alternates: {
    canonical: `${SITE_URL}/blog/`
  }
}

export default async function Blog({
  searchParams
}: {
  searchParams: { page: string }
}) {
  const currentPage = parseInt(searchParams.page) || 1
  const perPage = 12

  const response = await getArticles({
    username: HASHNODE_USERNAME,
    page: currentPage,
    pageSize: perPage
  })

  const posts = response?.data.user?.posts.edges.map((edge) => edge.node)

  if (posts && posts?.length <= 0) {
    return notFound()
  }

  return (
    <main className="mx-auto max-w-screen-xl px-4 pb-24 pt-4 lg:py-16">
      <div className="absolute h-[1px] max-w-screen-xl overflow-hidden">
        <h1>Blog</h1>
        <p>
          A collection of articles about frontend development, web performance,
          best practices, tutorials, and more.
        </p>
      </div>

      {posts && posts.length >= 1 && (
        <section className="mx-auto mb-4 mt-8 max-w-screen-xl px-0 lg:mb-16 lg:px-8">
          {posts
            ?.slice(0, 1)
            .map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                description={post.brief}
                link={`/blog/${post.slug}`}
                image={post.coverImage?.url || ''}
                date={post.publishedAt}
                readingTime={post.readTimeInMinutes}
                variant="jumbo"
              />
            ))}
        </section>
      )}

      {posts && posts.length >= 2 && (
        <section className="mx-auto mb-16 grid max-w-screen-xl grid-cols-1 gap-4 px-0 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:px-6">
          {posts
            ?.slice(1, 7)
            .map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                description={post.brief}
                link={`/blog/${post.slug}`}
                image={post.coverImage?.url || ''}
                date={post.publishedAt}
                readingTime={post.readTimeInMinutes}
                variant="default"
              />
            ))}
        </section>
      )}

      {posts && posts.length >= 7 && (
        <section className="mx-auto mb-4 grid max-w-screen-xl grid-cols-1 gap-x-4 px-0 md:grid-cols-2 md:px-4 lg:mb-16 lg:px-6">
          {posts
            ?.slice(7, 9)
            .map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                description={post.brief}
                link={`/blog/${post.slug}`}
                image={post.coverImage?.url || ''}
                date={post.publishedAt}
                readingTime={post.readTimeInMinutes}
                variant="square"
              />
            ))}
        </section>
      )}

      {posts && posts.length >= 9 && (
        <section className="mx-auto mb-4 grid max-w-screen-xl grid-cols-1 gap-y-8 px-0 md:grid-cols-2 md:gap-x-3 md:px-4 lg:mb-16 lg:grid-cols-1 lg:gap-x-0 lg:px-6">
          {posts
            ?.slice(9, 13)
            .map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                description={post.brief}
                link={`/blog/${post.slug}`}
                image={post.coverImage?.url || ''}
                date={post.publishedAt}
                readingTime={post.readTimeInMinutes}
                variant="track"
              />
            ))}
        </section>
      )}

      <Pagination
        total={response?.data.user?.posts.totalDocuments || 0}
        limit={perPage}
        currentPage={currentPage}
      />
    </main>
  )
}
