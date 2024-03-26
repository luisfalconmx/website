import { DEVTO_USERNAME, DEVTO_API_URL, DEVTO_API_KEY } from '@/config/env'
import Link from 'next/link'
import humanDate from '@/utils/humanDate'

export default async function Blog({
  searchParams
}: {
  searchParams: { page: string }
}) {
  const currentPage = searchParams.page || 1
  const perPage = 9

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

  const data = await response.json()

  console.log(data)

  return (
    <main className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
      <h1 className="mb-8 text-3xl">Blog</h1>
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {data.map((article: any) => (
          <li key={article.id}>
            <Link href={`/blog/${article.slug}`}>
              <article className="h-full rounded-xl border border-divider-soft bg-white p-8 dark:border-divider-hard dark:bg-night dark:text-white">
                <h2 className="mb-4 block text-xl font-bold">
                  {article.title}
                </h2>
                <p className="mb-8 text-sm text-black/60 dark:text-white/60">
                  {article.description}
                </p>
                <time className="font-medium" dateTime={article.published_at}>
                  {humanDate(article.published_at)}
                </time>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
