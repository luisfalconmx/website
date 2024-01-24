import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import MainLayout from '@/Layouts/MainLayout'
import githubClient from '@/clients/githubClient'
import CardProject from '@/components/CardProject'
import {
  GetProjectsDocument,
  GetProjectsQuery,
  GetProjectsQueryVariables
} from '@/generated/github.schema'

export const getStaticProps = (async () => {
  const client = githubClient()
  const response = await client.query<
    GetProjectsQuery,
    GetProjectsQueryVariables
  >({
    query: GetProjectsDocument,
    variables: {
      username: 'luisfalconmx'
    }
  })

  return {
    props: {
      projects: response.data.user?.repositories?.edges?.map(
        (edge) => edge?.node
      )
    },
    revalidate: 60 * 5 // 5 minutes
  }
}) satisfies GetStaticProps

export default function Projects({
  projects
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainLayout>
      <h1 className="mb-10 text-4xl font-bold">Projects</h1>

      <div className="grid grid-cols-1 gap-y-5">
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
      </div>
      <div className="h-full rounded-lg bg-onyx"></div>
    </MainLayout>
  )
}
