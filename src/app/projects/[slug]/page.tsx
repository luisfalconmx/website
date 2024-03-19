import BlockGradient from '@/components/BlockGradient'
import { Button, Chip } from '@nextui-org/react'
import contentfulClient from '@/clients/contentfulClient'
import humanDate from '@/utils/humanDate'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import Breadcrumb from '@/components/Breadcrumb'
import {
  FindProjectIdBySlugQuery,
  FindProjectIdBySlugQueryVariables,
  FindProjectIdBySlugDocument,
  GetProjectByIdDocument,
  GetProjectByIdQuery,
  GetProjectByIdQueryVariables
} from '@/generated/contentful.schema'
import styles from './project.module.css'
import {
  CheckBadgeIcon,
  CalendarDaysIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'project'
}

export default async function Project({
  params
}: {
  params: { slug: string }
}) {
  const client = contentfulClient()

  const projectExists = await client.query<
    FindProjectIdBySlugQuery,
    FindProjectIdBySlugQueryVariables
  >({
    query: FindProjectIdBySlugDocument,
    variables: {
      slug: params?.slug as string
    }
  })

  // redirect to 404 page
  if (!projectExists.data?.projectCollection?.items[0]?.sys.id) {
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
      id: projectExists.data?.projectCollection?.items[0]?.sys.id as string
    }
  })

  const project = response.data.project

  return (
    <>
      <Breadcrumb />
      <BlockGradient variant="right" />
      <main className="mb-24 mt-12">
        <section className="mx-auto mb-24 grid max-w-screen-xl grid-cols-1 gap-x-12 px-6 lg:grid-cols-[1fr_650px]">
          <div className="mb-12 pt-8 lg:mb-0">
            <h1 className="mb-4 text-5xl font-bold">{project?.name}</h1>
            <div className="mb-4 flex">
              <div className="mr-6 flex items-center text-smoke">
                <CheckBadgeIcon className="mr-1 h-5 w-5 text-green-500" />
                <span className="block">{project?.licenseName} License</span>
              </div>
              <div className="mr-6 flex items-center text-smoke">
                <CalendarDaysIcon className="mr-1 h-5 w-5 " />
                <span className="block">{humanDate(project?.createdDate)}</span>
              </div>
            </div>

            <p className="mb-8 text-xl text-smoke">{project?.description}</p>

            <div className="mb-8 flex flex-wrap">
              {project?.technologiesCollection?.items.map((i: any) => (
                <Chip
                  key={i.name}
                  color="default"
                  size="lg"
                  className="mb-2 mr-2 p-5"
                  avatar={
                    <Image
                      src={i.icon.url}
                      width={32}
                      height={32}
                      alt={i.name}
                    />
                  }
                >
                  {i.name}
                </Chip>
              ))}
            </div>

            <div className="flex">
              <a href={project?.liveUrl || ''}>
                <Button
                  size="lg"
                  radius="full"
                  variant="shadow"
                  className="bg-gradient-to-r from-primary to-secondary p-8 text-xl lg:w-auto"
                  endContent={
                    <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
                  }
                >
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
            className="w-full rounded-xl"
          />
        </section>

        {/* <section className="mb-16 bg-onyx py-8">
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
        </section> */}

        <section className="mx-auto mb-24 max-w-screen-xl px-6">
          <h2 className="mb-8 text-4xl font-bold lg:text-5xl">Overview</h2>
          <div className={`${styles.project} max-w-screen-lg`}>
            {documentToReactComponents(project?.overview?.json)}
          </div>
        </section>

        <section className="mx-auto mb-24 max-w-screen-xl px-6">
          <h2 className="mb-8 text-4xl font-bold lg:text-5xl">Project Goals</h2>
          <div className={`${styles.project} max-w-screen-lg`}>
            {documentToReactComponents(project?.overview?.json)}
          </div>
        </section>

        <section className="mx-auto mb-24 grid max-w-screen-xl grid-cols-2 gap-x-12 px-6">
          <div>
            <h2 className="mb-8 text-4xl font-bold lg:text-5xl">Problems</h2>
            <div className={`${styles.project} max-w-screen-lg`}>
              {documentToReactComponents(project?.overview?.json)}
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-4xl font-bold lg:text-5xl">Solutions</h2>
            <div className={`${styles.project} max-w-screen-lg`}>
              {documentToReactComponents(project?.overview?.json)}
            </div>
          </div>
        </section>

        {project?.designDescription && (
          <section className="mx-auto mb-10 max-w-screen-xl px-6">
            <h2 className="mb-8 text-4xl font-bold lg:text-5xl">Prototype</h2>
            <div className={`${styles.project} max-w-screen-lg`}>
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
            className="mx-auto mb-24 max-w-screen-xl px-6"
          />
        )}

        <section className="mx-auto mb-24 max-w-screen-xl px-6">
          <h2 className="mb-8 text-4xl font-bold lg:text-5xl">Screenshots</h2>

          <div className="grid grid-cols-2 gap-6">
            {project?.screenshotsCollection?.items.map((i) => (
              <Image
                key={i?.title}
                src={i?.url || ''}
                alt={i?.title || ''}
                width={1200}
                height={600}
                className="mb-8"
              />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
