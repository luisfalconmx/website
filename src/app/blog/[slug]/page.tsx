import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import humanDate from '@/utils/humanDate'
import { notFound } from 'next/navigation'
import { GlobeAmericasIcon } from '@heroicons/react/24/outline'
import { DEVTO_USERNAME, DEVTO_API_URL, DEVTO_API_KEY } from '@/config/env'
import GithubIcon from '@/assets/icons/GithubIcon.svg'
import TwitterIcon from '@/assets/icons/TwitterIcon.svg'
import { SITE_NAME, SITE_URL } from '@/config/env'
import styles from './post.module.css'
import type { Metadata } from 'next'
import type { Article } from '@/types/Article'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

const fetchPost = async (slug: string) => {
  const response = await fetch(
    `${DEVTO_API_URL}/articles/${DEVTO_USERNAME}/${slug}`,
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

  const post = (await response.json()) as Article

  return post
}

export const generateMetadata = async ({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> => {
  const post = await fetchPost(params.slug)

  return {
    title: `${post.title} - luisfalconmx.dev`,
    description: post.description,
    creator: post.user.username,
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}/`
    },
    applicationName: SITE_NAME,
    generator: 'Next.js',
    keywords: post.tags,
    authors: [
      {
        name: `${post.user.username} (${post.user.name})`,
        url: post.user.website_url
      }
    ],
    robots: 'index, follow',
    openGraph: {
      title: `${post.title} - luisfalconmx.dev`,
      description: post.description,
      type: 'article',
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.published_at,
      modifiedTime: post.edited_at,
      siteName: 'luisfalconmx.dev',
      tags: post.tags,
      authors: `${post.user.name} (${post.user.username})`,
      images: [
        {
          url: post.social_image
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE_URL,
      title: `${post.title} - luisfalconmx.dev`,
      description: post.description,
      creator: post.user.username,
      images: [
        {
          url: post.social_image
        }
      ]
    }
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug)

  return (
    <>
      <main className="bg-white dark:bg-night lg:border lg:border-divider-soft lg:dark:border-divider-hard">
        <Image
          src={post.cover_image}
          alt={post.title}
          width={1000}
          height={400}
          className="mb-6"
          priority={false}
        />
        <div className="px-4 lg:px-12">
          <time
            dateTime={post.published_at}
            className="mb-6 block w-fit rounded-xl border border-divider-soft px-3 py-2 text-sm font-medium text-black dark:border-divider-hard dark:text-white"
          >
            {humanDate(new Date(post.published_at))}
          </time>

          <h1 className="mb-6 text-3xl font-bold lg:text-5xl">{post.title}</h1>

          <section className={styles['post']}>
            <Markdown rehypePlugins={[rehypeHighlight]}>
              {post.body_markdown}
            </Markdown>
          </section>
        </div>
      </main>

      <aside className="px-4 lg:px-0">
        <div className="flex flex-col border border-divider-soft bg-white px-4 pb-12 pt-6 text-center dark:border-divider-hard dark:bg-night">
          <Image
            src={post.user.profile_image_90}
            alt={post.user.name}
            width={90}
            height={90}
            className="mx-auto mb-4 block rounded-full"
            priority={false}
          />
          <div className="text-center">
            <h2 className="text-lg font-bold">{post.user.name}</h2>
            <Link
              href={post.user.website_url}
              rel="author"
              className="mb-4 block text-black underline dark:text-white"
            >
              @{post.user.username}
            </Link>

            <p className="mb-6 text-base text-night dark:text-white">
              I am frontend developer with 4 years of experience, B1 English
              level and more than 100 certifications related to software
              development.
            </p>

            <ul className="mx-auto flex w-fit items-center space-x-4">
              <li>
                <Link
                  href={post.user.website_url}
                  aria-label={`go to ${post.user.username} official website`}
                >
                  <GlobeAmericasIcon className="h-8 w-8 text-black dark:text-white" />
                </Link>
              </li>
              <li>
                <Link
                  href={`https://github.com/${post.user.github_username}`}
                  aria-label={`go to ${post.user.username} github profile`}
                >
                  <Image
                    src={GithubIcon}
                    alt={`${post.user.name}'s GitHub profile`}
                    width={28}
                    height={28}
                    className="dark:invert"
                    priority={false}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href={`https://twitter.com/${post.user.twitter_username}`}
                  aria-label={`go to ${post.user.twitter_username} twitter name`}
                >
                  <Image
                    src={TwitterIcon}
                    alt={`${post.user.name}'s Twitter profile`}
                    width={26}
                    height={26}
                    className="dark:invert"
                    priority={false}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {post.tags.length > 0 && (
          <div className="mt-6 border border-divider-soft bg-white px-4 py-6 dark:border-divider-hard dark:bg-night">
            <strong className="mb-4 block text-lg font-bold">Tags</strong>
            <ul className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <li
                  key={tag}
                  className="rounded-full border border-divider-soft px-3 py-1 text-sm text-black dark:border-divider-hard dark:text-white"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      {/* Schema Org */}
      <Script id={`${post.title} - schema metadata`} type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.luisfalconmx.dev/blog/${post.slug}"
            },
            "headline": "${post.title}",
            "description": "${post.description}",
            "image": "${post.social_image}",  
            "author": {
              "@type": "Person",
              "name": "${post.user.username}",
              "url": "${post.user.website_url}"
            },  
            "datePublished": "${post.published_at}",
            "dateModified": "${post.edited_at}"
          }
        `}
      </Script>
    </>
  )
}
