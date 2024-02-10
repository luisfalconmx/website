import { useState, useEffect } from 'react'
import Image from 'next/image'
import MainLayout from '@/Layouts/MainLayout'
import Button from '@/components/Button'
import contentfulClient from '@/clients/contentfulClient'
import { Options, Splide, SplideSlide } from '@splidejs/react-splide'
import humanDate from '@/utils/humanDate'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
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
import styles from '@/styles/modules/project.module.css'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import type { ITechnologyItem } from '@/types/ITechnologyItem.d'
import '@splidejs/react-splide/css'

export const getStaticProps = (async ({ params }) => {
  const client = contentfulClient()

  const response = await client.query<
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
      project: response.data.project
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
  project
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
      <main className="mt-10">
        <section className="mx-auto grid max-w-screen-xl grid-cols-[1fr_650px] gap-x-12">
          <div className="pt-4">
            <h1 className="mb-4 text-5xl font-bold">{project?.name}</h1>
            <div className="mb-4 flex">
              <div className="mr-6 flex items-center text-iron dark:text-smoke">
                <CheckBadgeIcon className="mr-1 h-5 w-5 text-green-500" />
                <span className="block">{project?.licenseName}</span>
              </div>
              <div className="mr-6 flex items-center text-iron dark:text-smoke">
                <CalendarDaysIcon className="mr-1 h-5 w-5 " />
                <span className="block">{humanDate(project?.createdDate)}</span>
              </div>
            </div>

            <p className="mb-8 text-xl text-iron dark:text-smoke">
              {project?.description}
            </p>

            <div className="mb-8 flex flex-wrap">
              {project?.technologiesCollection?.items.map((i: any) => (
                <Image
                  src={i.icon.url || ''}
                  width={20}
                  height={20}
                  className="mb-1 mr-1 block h-12 w-12 border-iron p-2 text-sm text-iron last:mr-0 dark:border-smoke dark:text-smoke"
                  alt={i.name || ''}
                  key={i.name || ''}
                />
              ))}
            </div>

            <div className="flex">
              <a href={''}>
                <Button
                  variant="brand"
                  className="mr-3 flex items-center rounded-xl"
                >
                  <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" />
                  Live preview
                </Button>
              </a>
            </div>
          </div>
          <Image
            src={project?.featuredImage?.url || ''}
            alt={project?.name || ''}
            width={650}
            height={650}
            className="w-full rounded-t-xl"
          />
        </section>

        <section className="mb-16 bg-onyx py-8">
          <div className="mx-auto grid max-w-screen-xl grid-cols-3 justify-items-center gap-x-4">
            <div>
              <p className="mb-5 block text-3xl font-bold uppercase">Client</p>
              <strong className="mb-4 block text-5xl font-light">
                {project?.clientName}
              </strong>
            </div>
            <div>
              <p className="mb-5 block text-3xl font-bold uppercase">Budget</p>
              <strong className="mb-4 block text-5xl font-light">
                {formatCurrency(project?.budget || 0)}
              </strong>
            </div>

            <div>
              <p className="mb-5 block text-3xl font-bold uppercase">
                Time Spent
              </p>
              <strong className="mb-4 block text-5xl font-light">
                {project?.timeSpend} Hrs
              </strong>
            </div>
          </div>
        </section>

        {isClient && (
          <>
            <section className="mx-auto mb-24 max-w-screen-xl">
              <h2 className="mb-8 text-5xl font-bold">Overview</h2>
              <div className={styles.project}>
                {documentToReactComponents(project?.overview?.json)}
              </div>
            </section>

            <section className="mx-auto mb-24 max-w-screen-xl">
              <h2 className="mb-8 text-5xl font-bold">Screenshots</h2>

              <Splide options={carouselOptions}>
                {project?.screenshotsCollection?.items.map((i) => (
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

            {project?.designDescription && (
              <section className="mx-auto mb-10 max-w-screen-xl">
                <h2 className="mb-8 text-5xl font-bold">Design</h2>
                <div className={styles.project}>
                  {documentToReactComponents(project?.designDescription?.json)}
                </div>
              </section>
            )}

            {project?.prototypeUrl && (
              <iframe
                width="100%"
                height="500"
                src={project.prototypeUrl}
                allowFullScreen
                className="mx-auto mb-10 max-w-screen-xl"
              />
            )}
          </>
        )}
      </main>
    </MainLayout>
  )
}
