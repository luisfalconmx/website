import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import humanDate from '@/utils/humanDate'
import { notFound } from 'next/navigation'
import { GlobeAmericasIcon } from '@heroicons/react/24/outline'
import { HASHNODE_HOST } from '@/config/env'
import GithubIcon from '@/assets/icons/GithubIcon.svg'
import TwitterIcon from '@/assets/icons/TwitterIcon.svg'
import { SITE_NAME, SITE_URL } from '@/config/env'
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
          url: post?.ogMetaData?.image || ''
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
          url: post?.ogMetaData?.image || ''
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
      <main className="mx-auto my-12 mb-16 max-w-screen-lg gap-x-6 lg:my-24 lg:px-4">
        <section className="mb-2 box-content px-4 md:mb-5 lg:pl-0 lg:pr-4">
          <h1 className="mx-auto mb-6 text-3xl font-bold leading-tight md:text-5xl lg:text-center">
            {post?.title}
          </h1>

          {/* subtitle */}
          <p className="mx-auto mb-8 text-xl text-night dark:text-white lg:max-w-screen-sm lg:text-center">
            {post?.subtitle}
          </p>

          <time
            dateTime={post.publishedAt}
            className="mb-8 block text-lg font-bold italic lg:text-center"
          >
            {humanDate(post.publishedAt)} - {post.readTimeInMinutes} min read
          </time>

          <Image
            src={post?.coverImage?.url || ''}
            alt={post?.title || ''}
            width="912"
            height="550"
            className="mb-12 aspect-video w-full rounded-lg border-2 border-divider-soft shadow-xl dark:border-divider-hard"
          />
        </section>

        <section className={styles['post']}>
          <Markdown rehypePlugins={[rehypeHighlight]}>{content}</Markdown>
        </section>

        {post.tags && (
          <ul className="mb-12 flex flex-wrap justify-center gap-2 px-4 lg:px-12">
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

        <section className="mx-4 flex flex-col rounded-lg border border-divider-soft bg-white px-4 pb-12 pt-6 shadow-lg dark:border-divider-hard dark:bg-night lg:grid-cols-2 lg:flex-row lg:place-content-center">
          <figure className="mx-auto mb-2 block lg:mx-0 lg:mr-4">
            <Image
              src={post?.author.profilePicture || ''}
              alt={`${post?.author.name} (${post?.author.username}) profile picture`}
              width={60}
              height={60}
              className="block rounded-full"
              priority={false}
            />
          </figure>
          <div className="ml-0 block">
            <div className="mb-0 ml-0 flex justify-center lg:justify-start">
              <h2 className="mr-2 text-xl font-bold">{post?.author.name}</h2>
              <Link
                href={post?.author.socialMediaLinks?.website || ''}
                rel="author"
                className="block text-xl text-black underline dark:text-white"
                target="_blank"
              >
                ({post?.author.username})
              </Link>
            </div>

            <p className="mb-3 text-center text-sm text-night dark:text-white lg:text-start">
              {post?.author.tagline}
            </p>

            <ul className="mx-auto flex w-fit items-center space-x-1 lg:mx-0 lg:space-x-4">
              <li>
                <Link
                  href={post?.author.socialMediaLinks?.website || ''}
                  aria-label={`go to ${post?.author.name} (${post?.author.username}) official website`}
                >
                  <GlobeAmericasIcon className="h-8 w-8 text-black dark:text-white" />
                </Link>
              </li>
              <li>
                <Link
                  href={post?.author.socialMediaLinks?.github || ''}
                  aria-label={`go to ${post?.author.name} (${post?.author.username}) github profile`}
                >
                  <Image
                    src={GithubIcon}
                    alt="github icon"
                    width={28}
                    height={28}
                    className="dark:invert"
                    priority={false}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={post?.author.socialMediaLinks?.twitter || ''}
                  aria-label={`go to ${post?.author.name} (${post?.author.username}) twitter name`}
                >
                  <Image
                    src={TwitterIcon}
                    alt="twitter icon"
                    width={26}
                    height={26}
                    className="dark:invert"
                    priority={false}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </section>
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
            "image": "${post?.ogMetaData?.image}",  
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
