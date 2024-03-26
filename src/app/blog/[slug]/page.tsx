import Image from 'next/image'
import Link from 'next/link'
import humanDate from '@/utils/humanDate'
import parse from 'html-react-parser'
import { notFound } from 'next/navigation'
import { CodeHighlight } from '@/components/CodeHighlight/CodeHighlight'
import { GlobeAmericasIcon } from '@heroicons/react/24/outline'
import { DEVTO_USERNAME, DEVTO_API_URL, DEVTO_API_KEY } from '@/config/env'
import GithubIcon from '@/assets/icons/GithubIcon.svg'
import TwitterIcon from '@/assets/icons/TwitterIcon.svg'
import styles from './post.module.css'

export default async function Post({ params }: { params: { slug: string } }) {
  const response = await fetch(
    `${DEVTO_API_URL}/articles/${DEVTO_USERNAME}/${params.slug}`,
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

  return (
    <>
      <main className="bg-white dark:bg-night lg:border lg:border-divider-soft lg:dark:border-divider-hard">
        <Image
          src={post.cover_image}
          alt={post.title}
          width={1000}
          height={400}
          className="mb-6"
        />
        <div className="px-4 lg:px-12">
          <time
            dateTime={post.published_at}
            className="mb-6 block w-fit rounded-xl border border-divider-soft px-3 py-2 text-sm font-medium text-black/50 dark:border-divider-hard dark:text-white/50"
          >
            {humanDate(post.published_at)}
          </time>

          <h1 className="mb-6 text-3xl font-bold lg:text-5xl">{post.title}</h1>

          <section className={styles['post']}>{parse(post.body_html)}</section>
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
          />
          <div className="text-center">
            <h2 className="text-lg font-bold">{post.user.name}</h2>
            <Link
              href={post.user.website_url}
              rel="author"
              className="mb-4 block text-black/50 underline dark:text-white/50"
            >
              @{post.user.username}
            </Link>

            <p className="mb-6 text-base text-night/50 dark:text-white/50">
              I am frontend developer with 4 years of experience, B1 English
              level and more than 100 certifications related to software
              development.
            </p>

            <ul className="mx-auto flex w-fit items-center space-x-4">
              <li>
                <Link href={post.user.website_url}>
                  <GlobeAmericasIcon className="h-8 w-8 text-black dark:text-white" />
                </Link>
              </li>
              <li>
                <Link href={`https://github.com/${post.user.github_username}`}>
                  <Image
                    src={GithubIcon}
                    alt={`${post.user.name}'s GitHub profile`}
                    width={28}
                    height={28}
                    className="dark:invert"
                  />
                </Link>
              </li>
              <li>
                <Link href={`https://twitter.com/${post.user.github_username}`}>
                  <Image
                    src={TwitterIcon}
                    alt={`${post.user.name}'s Twitter profile`}
                    width={26}
                    height={26}
                    className="dark:invert"
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
                  className="rounded-full border border-divider-soft px-3 py-1 text-sm text-black/50 dark:border-divider-hard dark:text-white/50"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      <CodeHighlight />
    </>
  )
}
