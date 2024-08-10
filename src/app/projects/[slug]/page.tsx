import Image from 'next/image'
import Link from 'next/link'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import Button from '@/components/Button'
import { getProjectBySlug } from '@/services/hygraph'
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  ClockIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'
import styles from './project.module.css'
import humanDate from '@/utils/humanDate'
import { SITE_NAME, SITE_URL } from '@/config/env'
import type { Metadata } from 'next'

export const generateMetadata = async ({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> => {
  const response = await getProjectBySlug({ slug: params.slug })
  const project = response?.project

  return {
    title: project?.name,
    description: project?.description,
    creator: 'Luis Falcon (luisfalconmx)',
    alternates: {
      canonical: `${SITE_URL}/blog/${project?.slug}/`
    },
    applicationName: SITE_NAME,
    generator: 'Next.js',
    authors: [
      {
        name: 'Luis Falcon (luisfalconmx)',
        url: project?.url || ''
      }
    ],
    robots: 'index, follow',
    openGraph: {
      title: project?.name,
      description: project?.description,
      type: 'article',
      url: `${SITE_URL}/blog/${project?.slug}`,
      publishedTime: project?.date,
      modifiedTime: project?.updatedAt,
      siteName: SITE_NAME,
      tags: project?.technologies
        ? project?.technologies.map((i) => i.name)
        : [],
      authors: `Luis Falcon (luisfalconmx)`,
      images: [
        {
          url: project?.openGraphImage.url || project?.image.url || ''
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE_URL,
      title: `${project?.name} - luisfalconmx.dev`,
      description: project?.description,
      creator: 'luisfalconmx',
      images: [
        {
          url: project?.openGraphImage.url || project?.image.url || ''
        }
      ]
    }
  }
}

export default async function Project({
  params
}: {
  params: { slug: string }
}) {
  const response = await getProjectBySlug({
    slug: params.slug
  })

  const project = response?.project
  const content = project?.overview.markdown.replaceAll(
    /align="(left|center|right)"/g,
    ''
  )

  return (
    <main className="mx-auto max-w-screen-xl px-4 pb-24 pt-6 lg:py-16">
      <section className="flex flex-col-reverse lg:mb-16 lg:grid lg:grid-cols-2 lg:gap-x-12">
        <div className="mb-20 pt-8 lg:mb-16">
          <h1 className="mb-4 text-4xl font-bold">{project?.name}</h1>
          <p className="mb-6 text-xl text-neutral-500 first-letter:uppercase dark:text-neutral-400">
            {project?.description}
          </p>

          <div className="mb-8 flex flex-wrap gap-x-2">
            <time
              dateTime={project?.date}
              className="flex items-center gap-x-1 rounded border-0 border-divider-soft px-2 py-1 text-neutral-500 dark:border-divider-hard dark:text-neutral-400"
            >
              <ClockIcon width={18} height={18} />
              {humanDate(project?.date)}
            </time>
            <span className="flex items-center gap-x-1 rounded border-0 border-divider-soft px-2 py-1 text-neutral-500 dark:border-divider-hard dark:text-neutral-400">
              <CheckBadgeIcon width={18} height={18} />
              {project?.license} License{' '}
            </span>
          </div>

          <div className="flex flex-col items-center gap-x-4 gap-y-2 lg:flex-row">
            <Link href={project?.url || ''} className="w-full" target="_blank">
              <Button className="flex w-full justify-center gap-x-2">
                <ArrowTopRightOnSquareIcon
                  width={24}
                  height={24}
                  strokeWidth={2}
                />
                Live Preview
              </Button>
            </Link>
            <Link
              href={project?.repository || ''}
              className="w-full"
              target="_blank"
            >
              <Button
                variant="outline"
                className="flex w-full justify-center gap-x-2"
              >
                <CodeBracketIcon width={24} height={24} strokeWidth={2} />
                Source Code
              </Button>
            </Link>
          </div>
        </div>

        <Image
          src={project?.image.url || ''}
          alt={project?.name || ''}
          width={500}
          height={500}
          className="w-full"
        />
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-3xl md:text-4xl">Technologies used</h2>

        <ul className="mb-12 grid grid-cols-1 justify-start md:grid-cols-3 lg:grid-cols-4">
          {project?.technologies.map(({ id, name, icon }) => (
            <li
              key={id}
              className="mb-2 mr-2 flex items-center space-x-3 rounded px-2 py-2"
            >
              <Image
                src={icon.url}
                alt={name}
                width={32}
                height={32}
                unoptimized
                className="block"
              />
              <p className="text-lg lg:text-xl">{name}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-3xl md:text-4xl">Overview</h2>
        <div className={styles['project']}>
          <Markdown rehypePlugins={[rehypeHighlight]}>{content}</Markdown>
        </div>
      </section>
    </main>
  )
}
