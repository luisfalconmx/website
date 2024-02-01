import { useState, useEffect } from 'react'
import Image from 'next/image'
import MainLayout from '@/Layouts/MainLayout'
import Button from '@/components/Button'
import githubClient from '@/clients/githubClient'
import contentfulClient from '@/clients/contentfulClient'
import { GITHUB_USERNAME } from '@/config'
import { Options, Splide, SplideSlide } from '@splidejs/react-splide'
import humanDate from '@/utils/humanDate'
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {
  CheckBadgeIcon,
  RocketLaunchIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/solid'
import {
  GetProjectByIdDocument,
  GetProjectByIdQuery,
  GetProjectByIdQueryVariables
} from '@/generated/contentful.schema'
import {
  GetProjectBySlugDocument,
  GetProjectBySlugQuery,
  GetProjectBySlugQueryVariables
} from '@/generated/github.schema'
import styles from '@/styles/modules/project.module.css'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import '@splidejs/react-splide/css'

export const getStaticProps = (async ({ params }) => {
  const gh_client = githubClient()
  const contentful_client = contentfulClient()
  const gh_response = await gh_client.query<
    GetProjectBySlugQuery,
    GetProjectBySlugQueryVariables
  >({
    query: GetProjectBySlugDocument,
    variables: {
      login: GITHUB_USERNAME,
      slug: params?.slug as string
    }
  })

  const contentful_response = await contentful_client.query<
    GetProjectByIdQuery,
    GetProjectByIdQueryVariables
  >({
    query: GetProjectByIdDocument,
    variables: {
      id: '5OMroCN0aN6M7d4Ek7QFfQ'
    }
  })

  return {
    props: {
      project: gh_response.data.user?.repository,
      contentful: contentful_response.data.project
    },
    revalidate: 60 * 5 // 5 minutes
  }
}) satisfies GetStaticProps

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default function Blog({
  project,
  contentful
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isClient, setIsClient] = useState(false)

  const carouselOptions: Options = {
    type: 'loop',
    perPage: 2,
    perMove: 1,
    pagination: true,
    arrows: true,
    autoplay: true,
    interval: 3000,
    autoWidth: true,
    gap: '40px',
    focus: 'center'
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  const cleanPrimaryLanguage = project?.primaryLanguage?.name
    ?.toLowerCase()
    .replace(' ', '-')

  // add usd text after the amount
  const formatCurrency = (amount: number) => {
    return (
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount) + ' USD'
    )
  }

  return (
    <MainLayout>
      <section className="mb-24 grid grid-cols-[500px,1fr] gap-x-12">
        <Image
          src={project?.openGraphImageUrl || ''}
          alt={project?.name || ''}
          width={500}
          height={500}
          className="rounded-xl"
        />

        <div className="pt-6">
          <div className="mb-4 flex items-end">
            <Image
              src={`https://svgl.vercel.app/library/${cleanPrimaryLanguage}.svg`}
              alt={project?.primaryLanguage?.name || ''}
              width={56}
              height={56}
              className="mr-3 block max-h-[42px] max-w-[42px]"
            />
            <h1 className=" text-5xl font-bold">{project?.name}</h1>
          </div>

          <div className="mb-4 flex">
            <div className="mr-6 flex items-center text-iron dark:text-smoke">
              <CheckBadgeIcon className="mr-1 h-5 w-5 text-green-500" />
              <span className="block">{project?.licenseInfo?.name}</span>
            </div>
            <div className="mr-6 flex items-center text-iron dark:text-smoke">
              <RocketLaunchIcon className="mr-1 h-5 w-5" />
              <span className="block">{project?.latestRelease?.name}</span>
            </div>
            <div className="mr-6 flex items-center text-iron dark:text-smoke">
              <CalendarDaysIcon className="mr-1 h-5 w-5 " />
              <span className="block">{humanDate(project?.createdAt)}</span>
            </div>
          </div>

          <p className="mb-8 text-xl text-iron dark:text-smoke">
            {project?.description}
          </p>

          <div className="mb-8 flex flex-wrap">
            {project?.repositoryTopics.nodes?.map((node) => (
              <div
                className="mb-2 mr-2 block cursor-default rounded border p-1 px-2 font-bold last:mr-0"
                key={node?.topic.name}
              >
                {node?.topic.name}
              </div>
            ))}
          </div>

          <div className="flex">
            <a href={project?.homepageUrl}>
              <Button className="mr-3 flex items-center rounded-xl">
                <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" />
                Live preview
              </Button>
            </a>
            <a href={project?.url}>
              <Button
                variant="outlined"
                className="mr-3 flex items-center rounded-xl"
              >
                <CodeBracketIcon className="mr-2 h-6 w-6" />
                Source code
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="mb-32 grid grid-cols-3 justify-items-center gap-x-4">
        <div>
          <p className="mb-5 block text-3xl font-bold uppercase">Client</p>
          <strong className="mb-4 block text-5xl font-light">
            {contentful?.clientName}
          </strong>
        </div>
        <div>
          <p className="mb-5 block text-3xl font-bold uppercase">Budget</p>
          <strong className="mb-4 block text-5xl font-light">
            {formatCurrency(contentful?.budget || 0)}
          </strong>
        </div>

        <div>
          <p className="mb-5 block text-3xl font-bold uppercase">Time Spent</p>
          <strong className="mb-4 block text-5xl font-light">
            {contentful?.timeSpend} Hrs
          </strong>
        </div>
      </section>

      {isClient && (
        <>
          <section className="mb-24">
            <h2 className="mb-8 text-5xl font-bold">Overview</h2>
            <div className={styles.project}>
              {documentToReactComponents(contentful?.overview?.json)}
            </div>
          </section>
          <section className="mb-24">
            <h2 className="mb-8 text-5xl font-bold">Screenshots</h2>

            <Splide options={carouselOptions}>
              {contentful?.screenshotsCollection?.items.map((i) => (
                <SplideSlide key={i?.title}>
                  <Image
                    src={i?.url || ''}
                    alt={i?.title || ''}
                    width={800}
                    height={400}
                    className="rounded-xl"
                  />
                </SplideSlide>
              ))}
            </Splide>
          </section>

          {contentful?.designDescription && (
            <section className="mb-10">
              <h2 className="mb-8 text-5xl font-bold">Design</h2>
              <div className={styles.project}>
                {documentToReactComponents(contentful?.designDescription?.json)}
              </div>
            </section>
          )}

          {contentful?.prototypeUrl && (
            <iframe
              width="100%"
              height="500"
              src={contentful.prototypeUrl}
              allowFullScreen
            />
          )}
        </>
      )}
    </MainLayout>
  )
}
