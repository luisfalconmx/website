import { DEVTO_API_URL, DEVTO_API_KEY } from '@/config/env'
import Link from 'next/link'

export default async function Blog(searchParams: {
  page: number
  per_page: number
}) {
  const currentPage = searchParams.page || 1
  const perPage = searchParams.per_page || 10

  const response = await fetch(
    `${DEVTO_API_URL}/articles/me/all?page=${currentPage}&per_page=${perPage}`,
    {
      headers: {
        'api-key': DEVTO_API_KEY,
        Accept: 'application/vnd.forem.api-v1+json'
      }
    }
  )

  const data = (await response.json()) || []

  return (
    <div>
      <h1>Blog</h1>
      <ul className="mx-auto grid max-w-screen-xl grid-cols-4">
        {data.map((article: any) => (
          <li
            className="bg-white p-8 dark:bg-night dark:text-white"
            key={article.id}
          >
            <Link href={`/blog/${article.slug}`}>
              <b>{article.title}</b>
              <p>{article.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
