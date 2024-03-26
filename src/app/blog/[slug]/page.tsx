import { notFound } from 'next/navigation'
import parse from 'html-react-parser'
import { CodeHighlight } from '@/components/CodeHighlight/CodeHighlight'
import { DEVTO_API_URL, DEVTO_API_KEY } from '@/config/env'
import Image from 'next/image'
import styles from './post.module.css'

export default async function Post({ params }: { params: { slug: string } }) {
  const response = await fetch(
    `${DEVTO_API_URL}/articles/luisfalconmx/${params.slug}`,
    {
      headers: {
        'api-key': DEVTO_API_KEY,
        Accept: 'application/vnd.forem.api-v1+json'
      },
      next: {
        revalidate: 10
      }
    }
  )

  if (!response.ok) {
    return notFound()
  }

  const post = await response.json()

  console.log(post)

  return (
    <main className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
      <h1 className="mb-6 text-4xl font-bold">{post.title}</h1>
      <Image
        src={post.cover_image}
        alt={post.title}
        width={1200}
        height={800}
      />
      <section className={styles['post']}>{parse(post.body_html)}</section>
      <CodeHighlight />
    </main>
  )
}
