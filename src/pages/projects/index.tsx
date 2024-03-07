import { useState } from 'react'
import MainLayout from '@/Layouts/MainLayout'
import CardProject from '@/components/CardProject'
import Button from '@/components/Button'
import contentfulClient from '@/clients/contentfulClient'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import {
  GetProjectsDocument,
  GetProjectsQuery,
  GetProjectsQueryVariables
} from '@/generated/contentful.schema'
import '@splidejs/react-splide/css'
import type { Options } from '@splidejs/react-splide'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps = (async () => {
  const client = contentfulClient()

  const response = await client.query<
    GetProjectsQuery,
    GetProjectsQueryVariables
  >({
    query: GetProjectsDocument,
    variables: {
      limit: 12
    }
  })

  return {
    props: {
      projects: response.data.projectCollection?.items || [],
      total: response.data.projectCollection?.total || 0
    },
    revalidate: 60 * 5 // 5 minutes
  }
}) satisfies GetStaticProps

export default function Projects({
  projects,
  total
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const limitItems = 12
  const [iterationCount, setIterationCount] = useState<number>(limitItems)
  const [extraProjectsList, setExtraProjectsList] = useState<typeof projects>(
    []
  )

  const getMoreProjects = async () => {
    const client = contentfulClient()
    const response = await client.query<
      GetProjectsQuery,
      GetProjectsQueryVariables
    >({
      query: GetProjectsDocument,
      variables: {
        limit: limitItems,
        skip: iterationCount
      }
    })

    setExtraProjectsList((prev) => [
      ...prev,
      ...(response.data.projectCollection?.items || [])
    ])

    setIterationCount((prev) => prev + limitItems)
  }

  return (
    <MainLayout gradientType="left">
      <main className="mx-auto mb-8 mt-8 max-w-screen-xl px-2 md:px-4 lg:box-content lg:px-6">
        <div className="mb-8">
          <CardProject
            slug={projects[0]?.slug || ''}
            name={projects[0]?.name || ''}
            description={projects[0]?.description || ''}
            image={projects[0]?.featuredImage?.url || ''}
            variant="featured"
            tags={
              projects[0]?.technologiesCollection?.items?.map((i: any) => ({
                icon: i.icon.url,
                name: i.name
              })) || []
            }
          />
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects?.slice(1).map((project) => (
            <CardProject
              slug={project?.slug || ''}
              key={project?.name}
              name={project?.name || ''}
              description={project?.description || ''}
              image={project?.featuredImage?.url || ''}
              variant="card"
              tags={
                project?.technologiesCollection?.items?.map((i: any) => ({
                  icon: i.icon.url,
                  name: i.name
                })) || []
              }
            />
          ))}

          {extraProjectsList?.map((project) => (
            <CardProject
              slug={project?.slug || ''}
              key={project?.name}
              name={project?.name || ''}
              description={project?.description || ''}
              image={project?.featuredImage?.url || ''}
              variant="card"
              tags={
                project?.technologiesCollection?.items?.map((i: any) => ({
                  icon: i.icon.url,
                  name: i.name
                })) || []
              }
            />
          ))}
        </div>

        {iterationCount < total && (
          <div className="flex justify-center">
            <Button
              variant="filled"
              onClick={getMoreProjects}
              className="flex items-center"
            >
              <ArrowPathIcon className="mr-2 h-6 w-6" />
              Load More
            </Button>
          </div>
        )}
      </main>
    </MainLayout>
  )
}
