// RENDER STRATEGY: SSR (Server Side Rendering)
import Breadcrumb from '@/components/Breadcrumb'
import ProjectCard from '@/components/ProjectCard'
import BlockGradient from '@/components/BlockGradient'
import contentfulClient from '@/clients/contentfulClient'
import PaginationTrack from '@/components/PaginationTrack'
import {
  GetProjectsDocument,
  GetProjectsQuery,
  GetProjectsQueryVariables
} from '@/generated/contentful.schema'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'projects'
}

export default async function Projects({
  searchParams
}: {
  searchParams: { page: string }
}) {
  const page = parseInt(searchParams.page) || 0
  const itemsPerPage = 10

  const client = contentfulClient()
  const response = await client.query<
    GetProjectsQuery,
    GetProjectsQueryVariables
  >({
    query: GetProjectsDocument,
    variables: {
      limit: itemsPerPage,
      skip: (page - 1) * itemsPerPage
    }
  })

  const projects = response.data.projectCollection?.items || []
  const total = response.data.projectCollection?.total || 0

  return (
    <>
      <BlockGradient variant="left" />
      <Breadcrumb />
      <div className="mx-auto mb-24 mt-16 max-w-screen-xl px-6 text-center">
        <h1 className="mb-6 block text-4xl font-bold">Projects</h1>
        <p className="mx-auto block max-w-[70%] text-lg">
          Explore our growing collection of courses on key web design and
          development subjects. An industry expert has written each course,
          helped by members of the Chrome team.
        </p>
      </div>
      <div className="mx-auto mb-6 grid max-w-screen-xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
        {projects.map((i) => (
          <ProjectCard
            key={i?.name}
            variant="card"
            slug={i?.slug || ''}
            name={i?.name || ''}
            description={i?.description || ''}
            image={i?.featuredImage?.url || ''}
            tags={
              i?.technologiesCollection?.items?.map((i: any) => ({
                icon: i.icon.url,
                name: i.name
              })) || []
            }
          />
        ))}
      </div>
      <div className="mx-auto w-fit">
        <PaginationTrack
          currentPage={page || 1}
          itemsPerPage={itemsPerPage}
          total={total}
        />
      </div>
    </>
  )
}
