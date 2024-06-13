import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import humanDate from '@/utils/humanDate'
import { notFound } from 'next/navigation'
import { SITE_NAME, SITE_URL, HASHNODE_HOST } from '@/config/env'
import { getArticleBySlug } from '@/services/hashnode'
import styles from './post.module.css'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import type { Metadata } from 'next'

export const generateMetadata = async ({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> => {
  const response = await getArticleBySlug({
    host: HASHNODE_HOST,
    slug: params.slug
  })

  const post = response?.data.publication?.post

  return {
    title: post?.title,
    description: post?.brief,
    creator: post?.author.username,
    alternates: {
      canonical: `${SITE_URL}/blog/${post?.slug}/`
    },
    applicationName: SITE_NAME,
    generator: 'Next.js',
    authors: [
      {
        name: `${post?.author.name} (${post?.author.username})`,
        url: post?.author.socialMediaLinks?.website || ''
      }
    ],
    robots: 'index, follow',
    openGraph: {
      title: post?.title,
      description: post?.brief,
      type: 'article',
      url: `${SITE_URL}/blog/${post?.slug}`,
      publishedTime: post?.publishedAt,
      modifiedTime: post?.updatedAt,
      siteName: SITE_NAME,
      tags: post?.tags ? post.tags.map((tag) => tag.name) : [],
      authors: `${post?.author.name} (${post?.author.username})`,
      images: [
        {
          url: post?.ogMetaData?.image || post?.coverImage?.url || ''
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE_URL,
      title: `${post?.title} - luisfalconmx.dev`,
      description: post?.brief,
      creator: post?.author.username,
      images: [
        {
          url: post?.ogMetaData?.image || post?.coverImage?.url || ''
        }
      ]
    }
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const response = await getArticleBySlug({
    host: HASHNODE_HOST,
    slug: params.slug
  })

  if (!response?.data.publication?.post) {
    return notFound()
  }

  const post = response.data.publication?.post
  const content = post.content.markdown.replaceAll(
    /align="(left|center|right)"/g,
    ''
  )

  return (
    <>
      <main className="mx-auto my-12 mb-16 max-w-screen-xl gap-x-6 md:px-8 lg:my-16 lg:px-16">
        <section className="mb-2 box-content px-4 md:mb-5 md:px-12">
          <span className="mb-2 block font-bold uppercase text-primary">
            {post.tags ? post.tags[0].name : ''}
          </span>

          <h1 className="mx-auto mb-8 text-3xl font-bold leading-tight md:text-[40px]">
            {post?.title}
          </h1>

          <div className="mb-12 flex items-center space-x-12">
            <div className="flex w-fit flex-col justify-center lg:grid-cols-2 lg:flex-row">
              <figure className="mx-auto block lg:mx-0 lg:mr-4">
                <Image
                  src={post?.author.profilePicture || ''}
                  alt={`${post?.author.name} (${post?.author.username}) profile picture`}
                  width={48}
                  height={48}
                  className="block rounded-full"
                  priority={false}
                />
              </figure>
              <div className="ml-0 flex flex-col justify-center">
                <div className="mb-0 ml-0">
                  <h2 className="mr-2 font-bold">{post?.author.name}</h2>
                </div>

                <p className="text-center text-sm text-night dark:text-white/50 lg:text-start">
                  {post?.author.tagline}
                </p>
              </div>
            </div>

            <time
              dateTime={post.publishedAt}
              className="flex flex-col font-bold italic"
            >
              <span className="text-sm font-normal dark:text-white/50">
                Published at
              </span>
              {humanDate(post.publishedAt)}
            </time>

            <div className="flex flex-col font-bold italic">
              <span className="text-sm font-normal dark:text-white/50">
                Time ro read
              </span>
              {post.readTimeInMinutes} min
            </div>
          </div>
        </section>

        <Image
          src={post?.coverImage?.url || ''}
          alt={post?.title || ''}
          width="912"
          height="550"
          className="mb-12 aspect-video w-full rounded-lg border-divider-soft shadow-xl dark:border-divider-hard"
        />

        <div className={styles['post']}>
          <Markdown rehypePlugins={[rehypeHighlight]}>{content}</Markdown>
        </div>

        {post.tags && (
          <ul className="mb-12 flex flex-wrap gap-2 px-4 md:justify-center lg:px-12">
            {post.tags.map((tag) => (
              <li
                key={tag.id}
                className="rounded-full border border-divider-soft px-3 py-1 text-sm text-black dark:border-divider-hard dark:bg-night dark:text-white"
              >
                {tag.name}
              </li>
            ))}
          </ul>
        )}
      </main>

      {/* Schema Org */}
      <Script
        id={`${post?.title} - schema metadata`}
        type="application/ld+json"
      >
        {`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.luisfalconmx.dev/blog/${post?.slug}"
            },
            "headline": "${post?.title}",
            "description": "${post?.brief}",
            "image": "${post?.ogMetaData?.image || post?.coverImage?.url}",  
            "author": {
              "@type": "Person",
              "name": "${post?.author.name} (${post?.author.username})",
              "url": "${post?.author.socialMediaLinks?.website}"
            },  
            "datePublished": "${post?.publishedAt}",
            "dateModified": "${post?.updatedAt}"
          }
        `}
      </Script>
    </>
  )
}
