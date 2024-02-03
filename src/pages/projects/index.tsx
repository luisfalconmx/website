import { useState } from 'react'
import SidebarLayout from '@/Layouts/SidebarLayout'
import githubClient from '@/clients/githubClient'
import CardProject from '@/components/CardProject'
import Button from '@/components/Button'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import {
  GetProjectsDocument,
  GetProjectsQuery,
  GetProjectsQueryVariables
} from '@/generated/github.schema'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps = (async () => {
  const client = githubClient()
  const response = await client.query<
    GetProjectsQuery,
    GetProjectsQueryVariables
  >({
    query: GetProjectsDocument,
    variables: {
      username: 'luisfalconmx',
      repositoriesCount: 6
    }
  })

  return {
    props: {
      projects:
        response.data.user?.repositories?.edges?.map((edge) => edge?.node) ||
        [],
      pageInfo: response.data.user?.repositories.pageInfo
    },
    revalidate: 60 * 5 // 5 minutes
  }
}) satisfies GetStaticProps

export default function Projects({
  projects,
  pageInfo
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [lastCursor, setLastCursor] = useState<string>(
    pageInfo?.endCursor || ''
  )
  const [hasNextPage, setHasNextPage] = useState<boolean>(
    pageInfo?.hasNextPage || false
  )
  const [extraProjectsList, setExtraProjectsList] = useState<typeof projects>(
    []
  )

  const getMoreProjects = async () => {
    const client = githubClient()
    const response = await client.query<
      GetProjectsQuery,
      GetProjectsQueryVariables
    >({
      query: GetProjectsDocument,
      variables: {
        username: 'luisfalconmx',
        repositoriesCount: 6,
        after: lastCursor
      }
    })

    setLastCursor(response.data.user?.repositories.pageInfo.endCursor || '')

    setHasNextPage(
      response.data.user?.repositories.pageInfo.hasNextPage || false
    )

    setExtraProjectsList((prev) => [
      ...prev,
      ...(response.data.user?.repositories?.edges?.map((edge) => edge?.node) ||
        [])
    ])
  }

  return (
    <SidebarLayout>
      <div className="block px-6 py-8">
        <h1 className="mb-10 text-3xl font-bold !text-white">Projects</h1>
      </div>
      <main className="mx-auto mb-24 mt-8 max-w-screen-xl">
        <div className="mb-8 grid grid-cols-1 gap-y-12">
          {projects?.map((project) => (
            <CardProject
              key={project?.name}
              name={project?.name || ''}
              description={project?.description || ''}
              image={project?.openGraphImageUrl}
              variant="full"
              tags={project?.repositoryTopics.nodes?.map((i) =>
                i ? i.topic.name : ''
              )}
              licence={project?.licenseInfo?.name || ''}
              createdDate={project?.createdAt || ''}
              latestRelease={project?.latestRelease?.name || ''}
              primaryLanguage={project?.primaryLanguage?.name || ''}
            />
          ))}

          {extraProjectsList?.map((project) => (
            <CardProject
              key={project?.name}
              name={project?.name || ''}
              description={project?.description || ''}
              image={project?.openGraphImageUrl}
              variant="full"
              tags={project?.repositoryTopics.nodes?.map((i) =>
                i ? i.topic.name : ''
              )}
              licence={project?.licenseInfo?.name || ''}
              createdDate={project?.createdAt || ''}
              latestRelease={project?.latestRelease?.name || ''}
              primaryLanguage={project?.primaryLanguage?.name || ''}
            />
          ))}
        </div>

        {hasNextPage && (
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
    </SidebarLayout>
  )
}
