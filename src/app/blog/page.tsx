import BlockGradient from '@/components/BlockGradient'
import Breadcrumb from '@/components/Breadcrumb'
import PostCard from '@/components/PostCard'
import humanDate from '@/utils/humanDate'
import getArticles from '@/api/devto/getArticles'
import PaginationTrack from '@/components/PaginationTrack'
import devtoArticlesCount from '@/generated/devtoArticlesCount.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'blog'
}

export const revalidate = 60

export default async function Blog({
  searchParams
}: {
  searchParams: { page: string }
}) {
  const page = parseInt(searchParams.page) || 0
  const itemsPerPage = 12

  const response = await getArticles({ page: page, per_page: itemsPerPage })
  const total = devtoArticlesCount.total || 0
  const posts = response?.data || []

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
              key={post.id}
              title={post.title}
              description={post.description}
              link={`/blog/${post.slug}`}
              image={post.cover_image || ''}
              date={new Date(post.published_at)}
              readingTime={post.reading_time_minutes}
              tag={
                post.tag_list?.map((tag, index) => (index === 0 ? tag : ''))[0]
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
              key={post.id}
              title={post.title}
              description={post.description}
              link={`/blog/${post.slug}`}
              image={post.cover_image || ''}
              date={new Date(post.published_at)}
              readingTime={post.reading_time_minutes}
              tag={
                post.tag_list?.map((tag, index) => (index === 0 ? tag : ''))[0]
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
              key={post.id}
              title={post.title}
              description={post.description}
              link={`/blog/${post.slug}`}
              image={post.cover_image || ''}
              date={new Date(post.published_at)}
              readingTime={post.reading_time_minutes}
              tag={
                post.tag_list?.map((tag, index) => (index === 0 ? tag : ''))[0]
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
              key={post.id}
              title={post.title}
              description={post.description}
              link={`/blog/${post.slug}`}
              image={post.cover_image || ''}
              date={new Date(post.published_at)}
              readingTime={post.reading_time_minutes}
              tag={
                post.tag_list?.map((tag, index) => (index === 0 ? tag : ''))[0]
              }
              variant="track"
            />
          ))}
      </section>

      <div className="mx-auto w-fit">
        <PaginationTrack
          total={total}
          itemsPerPage={itemsPerPage}
          currentPage={page || 1}
        />
      </div>
    </>
  )
}
