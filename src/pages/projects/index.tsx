import { useState } from 'react'
import Image from 'next/image'
import MainLayout from '@/Layouts/MainLayout'
import CardProject from '@/components/CardProject'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import contentfulClient from '@/clients/contentfulClient'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import {
  GetProjectsDocument,
  GetProjectsQuery,
  GetProjectsQueryVariables,
  GetTagsQuery,
  GetTagsQueryVariables,
  GetTagsDocument
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
      limit: 6
    }
  })

  const responseTags = await client.query<GetTagsQuery, GetTagsQueryVariables>({
    query: GetTagsDocument
  })

  return {
    props: {
      projects: response.data.projectCollection?.items,
      tags: responseTags.data.technologyCollection?.items
    },
    revalidate: 60 * 5 // 5 minutes
  }
}) satisfies GetStaticProps

export default function Projects({
  projects,
  tags
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [lastCursor, setLastCursor] = useState<string>('')
  const [hasNextPage, setHasNextPage] = useState<boolean>(false)
  const [extraProjectsList, setExtraProjectsList] = useState<typeof projects>(
    []
  )

  // const getMoreProjects = async () => {
  //   const client = githubClient()
  //   const response = await client.query<
  //     GetProjectsQuery,
  //     GetProjectsQueryVariables
  //   >({
  //     query: GetProjectsDocument,
  //     variables: {
  //       username: 'luisfalconmx',
  //       repositoriesCount: 6,
  //       after: lastCursor
  //     }
  //   })

  //   setLastCursor(response.data.user?.repositories.pageInfo.endCursor || '')

  //   setHasNextPage(
  //     response.data.user?.repositories.pageInfo.hasNextPage || false
  //   )

  //   setExtraProjectsList((prev) => [
  //     ...prev,
  //     ...(response.data.user?.repositories?.edges?.map((edge) => edge?.node) ||
  //       [])
  //   ])
  // }

  return (
    <MainLayout gradientType="left">
      <main className="mx-auto mb-8 mt-8 max-w-screen-xl px-2 md:px-4 lg:box-content lg:px-6">
        <div className="mb-8 hidden lg:block">
          <Splide
            options={
              {
                type: 'loop',
                pagination: false
              } as Options
            }
          >
            {projects?.slice(0, 3).map((project) => (
              <SplideSlide key={project?.name}>
                <CardProject
                  name={project?.name || ''}
                  description={project?.description || ''}
                  image={project?.featuredImage?.url || ''}
                  variant="featured"
                  tags={
                    project?.technologiesCollection?.items?.map((i: any) => ({
                      icon: i.icon.url,
                      name: i.name
                    })) || []
                  }
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects?.slice(0, 3).map((project) => (
            <CardProject
              key={project?.name}
              name={project?.name || ''}
              description={project?.description || ''}
              image={project?.featuredImage?.url || ''}
              variant="card"
              className="lg:!hidden"
              tags={
                project?.technologiesCollection?.items?.map((i: any) => ({
                  icon: i.icon.url,
                  name: i.name
                })) || []
              }
            />
          ))}

          {projects?.slice(3).map((project) => (
            <CardProject
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

          {/* {extraProjectsList?.map((project) => (
            <CardProject
              key={project?.name}
              name={project?.name || ''}
              description={project?.description || ''}
              image={project?.openGraphImageUrl}
              variant="block"
              tags={project?.repositoryTopics.nodes?.map((i) =>
                i ? i.topic.name : ''
              )}
              licence={project?.licenseInfo?.name || ''}
              createdDate={project?.createdAt || ''}
              latestRelease={project?.latestRelease?.name || ''}
              primaryLanguage={project?.primaryLanguage?.name || ''}
            />
          ))} */}
        </div>

        {/* {hasNextPage && (
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
        )} */}
      </main>
    </MainLayout>
  )
}
