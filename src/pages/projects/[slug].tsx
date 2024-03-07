import { useState, useEffect } from 'react'
import Image from 'next/image'
import MainLayout from '@/Layouts/MainLayout'
import Button from '@/components/Button'
import contentfulClient from '@/clients/contentfulClient'
import { Options, Splide, SplideSlide } from '@splidejs/react-splide'
import humanDate from '@/utils/humanDate'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { CheckBadgeIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import {
  FindProjectIdBySlugQuery,
  FindProjectIdBySlugQueryVariables,
  FindProjectIdBySlugDocument,
  GetProjectByIdDocument,
  GetProjectByIdQuery,
  GetProjectByIdQueryVariables
} from '@/generated/contentful.schema'
import styles from '@/styles/modules/project.module.css'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import '@splidejs/react-splide/css'

export const getStaticProps = (async ({ params }) => {
  const client = contentfulClient()

  const criticalResponse = await client.query<
    FindProjectIdBySlugQuery,
    FindProjectIdBySlugQueryVariables
  >({
    query: FindProjectIdBySlugDocument,
    variables: {
      slug: params?.slug as string
    }
  })

  // redirect to 404 page
  if (!criticalResponse.data?.projectCollection?.items[0]?.sys.id) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }

  const response = await client.query<
    GetProjectByIdQuery,
    GetProjectByIdQueryVariables
  >({
    query: GetProjectByIdDocument,
    variables: {
      id: criticalResponse.data?.projectCollection?.items[0]?.sys.id as string
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
        <section className="mx-auto grid max-w-screen-xl grid-cols-1 gap-x-12 px-4 lg:grid-cols-[1fr_650px] lg:px-0">
          <div className="mb-12 pt-4 lg:mb-0">
            <h1 className="mb-4 text-5xl font-bold">{project?.name}</h1>
            <div className="mb-4 flex">
              <div className="mr-6 flex items-center text-smoke">
                <CheckBadgeIcon className="mr-1 h-5 w-5 text-green-500" />
                <span className="block">{project?.licenseName}</span>
              </div>
              <div className="mr-6 flex items-center text-smoke">
                <CalendarDaysIcon className="mr-1 h-5 w-5 " />
                <span className="block">{humanDate(project?.createdDate)}</span>
              </div>
            </div>

            <p className="mb-8 text-xl text-smoke">{project?.description}</p>

            <div className="mb-8 flex flex-wrap">
              {project?.technologiesCollection?.items.map((i: any) => (
                <Image
                  src={i.icon.url || ''}
                  width={20}
                  height={20}
                  className="mb-1 mr-1 block h-12 w-12 border-smoke p-2 text-sm text-smoke last:mr-0"
                  alt={i.name || ''}
                  key={i.name || ''}
                />
              ))}
            </div>

            <div className="flex">
              <a href={project?.liveUrl || ''}>
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
          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-x-4 gap-y-8 px-4 lg:grid-cols-3 lg:justify-items-center lg:gap-y-0 lg:px-0">
            <div className="text-center lg:text-left">
              <p className="mb-5 block text-3xl font-bold uppercase">Client</p>
              <strong className="mb-4 block text-4xl font-light lg:text-5xl">
                {project?.clientName}
              </strong>
            </div>

            <div className="text-center lg:text-left">
              <p className="mb-5 block text-3xl font-bold uppercase">Budget</p>
              <strong className="mb-4 block text-4xl font-light lg:text-5xl">
                {formatCurrency(project?.budget || 0)}
              </strong>
            </div>

            <div className="text-center lg:text-left">
              <p className="mb-5 block text-3xl font-bold uppercase">
                Time Spent
              </p>
              <strong className="mb-4 block text-4xl font-light lg:text-5xl">
                {project?.timeSpend} Hrs
              </strong>
            </div>
          </div>
        </section>

        {isClient && (
          <>
            <section className="mx-auto mb-24 max-w-screen-xl px-4 lg:px-0">
              <h2 className="mb-8 text-4xl font-bold lg:text-5xl">Overview</h2>
              <div className={styles.project}>
                {documentToReactComponents(project?.overview?.json)}
              </div>
            </section>

            <section className="mx-auto mb-24 max-w-screen-xl px-4 lg:px-0">
              <h2 className="mb-8 text-4xl font-bold lg:text-5xl">
                Screenshots
              </h2>

              <Splide options={carouselOptions} className="w-full">
                {project?.screenshotsCollection?.items.map((i) => (
                  <SplideSlide key={i?.title} className="w-full">
                    <Image
                      src={i?.url || ''}
                      alt={i?.title || ''}
                      width={800}
                      height={800}
                      className="w-full rounded-xl"
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </section>

            {project?.designDescription && (
              <section className="mx-auto mb-10 max-w-screen-xl px-4 lg:px-0">
                <h2 className="mb-8 text-4xl font-bold lg:text-5xl">Design</h2>
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
                className="mx-auto mb-10 max-w-screen-xl px-4 lg:px-0"
              />
            )}
          </>
        )}
      </main>
    </MainLayout>
  )
}
