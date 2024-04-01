import { DEVTO_USERNAME, DEVTO_API_URL, DEVTO_API_KEY } from '@/config/env'
import { PostCard } from '@/components/PostCard'
import { Pagination } from '@/components/Pagination'
import stats from '@/generated/devto.stats.json'

export default async function Blog({
  searchParams
}: {
  searchParams: { page: string }
}) {
  const currentPage = parseInt(searchParams.page) || 1
  const perPage = 12

  const response = await fetch(
    `${DEVTO_API_URL}/articles?page=${currentPage}&per_page=${perPage}&username=${DEVTO_USERNAME}`,
    {
      headers: {
        'api-key': DEVTO_API_KEY,
        Accept: 'application/vnd.forem.api-v1+json'
      },
      cache: 'no-store' // enables ssr
    }
  )

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const posts = (await response.json()) || []

  return (
    <main className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
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
          .map((post: any) => (
            <PostCard
              key={post.id}
              title={post.title}
              description={post.description}
              link={`/blog/${post.slug}`}
              image={post.cover_image || ''}
              date={post.published_at}
              readingTime={post.reading_time_minutes}
              tag={
                post.tag_list?.map((tag: any, index: any) =>
                  index === 0 ? tag : ''
                )[0]
              }
              variant="jumbo"
            />
          ))}
      </section>

      <section className="mx-auto mb-16 grid max-w-screen-xl grid-cols-1 gap-4 px-2 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:px-6">
        {posts
          ?.slice(1, 7)
          .map((post: any) => (
            <PostCard
              key={post.id}
              title={post.title}
              description={post.description}
              link={`/blog/${post.slug}`}
              image={post.cover_image || ''}
              date={post.published_at}
              readingTime={post.reading_time_minutes}
              tag={
                post.tag_list?.map((tag: any, index: any) =>
                  index === 0 ? tag : ''
                )[0]
              }
              variant="default"
            />
          ))}
      </section>

      <section className="mx-auto mb-16 grid max-w-screen-xl grid-cols-1 gap-x-4 px-2 md:grid-cols-2 md:px-4 lg:px-6">
        {posts
          ?.slice(7, 9)
          .map((post: any) => (
            <PostCard
              key={post.id}
              title={post.title}
              description={post.description}
              link={`/blog/${post.slug}`}
              image={post.cover_image || ''}
              date={post.published_at}
              readingTime={post.reading_time_minutes}
              tag={
                post.tag_list?.map((tag: any, index: any) =>
                  index === 0 ? tag : ''
                )[0]
              }
              variant="square"
            />
          ))}
      </section>

      <section className="mx-auto mb-16 grid max-w-screen-xl grid-cols-1 gap-y-8 px-6 md:grid-cols-2 md:gap-x-3 md:px-4 lg:grid-cols-1 lg:gap-x-0 lg:px-6">
        {posts
          ?.slice(9, 13)
          .map((post: any) => (
            <PostCard
              key={post.id}
              title={post.title}
              description={post.description}
              link={`/blog/${post.slug}`}
              image={post.cover_image || ''}
              date={post.published_at}
              readingTime={post.reading_time_minutes}
              tag={
                post.tag_list?.map((tag: any, index: any) =>
                  index === 0 ? tag : ''
                )[0]
              }
              variant="track"
            />
          ))}
      </section>

      <Pagination
        total={stats.total}
        limit={perPage}
        currentPage={currentPage}
      />
    </main>
  )
}
