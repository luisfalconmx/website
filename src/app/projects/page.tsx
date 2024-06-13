import { EyeSlashIcon } from '@heroicons/react/24/outline'
import { getProjects, searchProjectsByTerm } from '@/services/hygraph'
import Link from 'next/link'
import { Search } from '@/components/Search'
import { Pagination } from '@/components/Pagination'
import Button from '@/components/Button'
import { ProjectCard } from '@/components/ProjectCard'
import { SITE_URL } from '@/config/env'
import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
  const projects = await getProjects({ limit: 0, skip: 0 })
  const total = projects?.allProjects.aggregate.count || 0

  return {
    title: 'Projects List',
    description: `I have developed a total of ${total} projects in which I use modern frontend technologies such as React, Next, Tailwindcss, among others.`,
    openGraph: {
      title: 'Projects List',
      description: `I have developed a total of ${total} projects in which I use modern frontend technologies such as React, Next, Tailwindcss, among others.`,
      type: 'website',
      url: `${SITE_URL}/projects`,
      images: [
        {
          url: `${SITE_URL}/images/open-graph-image.jpg`
        }
      ]
    },
    alternates: {
      canonical: `${SITE_URL}/projects/`
    }
  }
}

export default async function Projects({
  searchParams
}: {
  searchParams: {
    search: string
    page: string
  }
}) {
  const currentPage = parseInt(searchParams.page) || 1
  const limit = 6
  const skip = (currentPage - 1) * limit
  let res = null

  if (searchParams.search) {
    res = await searchProjectsByTerm({
      first: limit,
      skip,
      term: searchParams.search
    })
  }

  if (!searchParams.search) {
    res = await getProjects({
      limit,
      skip
    })
  }

  const totalProjects = res?.allProjects.aggregate.count || 0
  const totalProjectsDisplayed = res?.projectsConnection.aggregate.count || 0

  return (
    <main className="mx-auto max-w-screen-xl px-4 py-12 lg:py-24">
      <div className="custom-bg-right absolute left-0 top-0 -z-10 h-screen w-full" />
      <h1 className="mx-auto mb-4 w-fit text-3xl font-bold">Projects</h1>
      <p className="mx-auto mb-12 max-w-2xl text-center text-black/80 dark:text-white/80 lg:text-lg">
        I have developed a total of <b>{totalProjects} projects</b> in which I
        use <b>modern frontend</b> technologies such as{' '}
        <b>React, Next, Tailwindcss</b>, among others.
      </p>

      <Search className="mx-auto" />

      {res?.projects && res.projects.length === 0 && (
        <div className="mx-auto flex max-w-lg flex-col border-4 border-dashed border-divider-soft px-4 py-12 text-center dark:border-divider-hard">
          <EyeSlashIcon className="mx-auto mb-6 h-16 w-16" />
          <div className="">
            <b className="mb-2 block text-xl font-bold">No results found</b>
            <p className="mb-8 text-sm">
              We couldn&apos;t find any Projects matching with the search term
              provided or the url was typed incorrectly.
            </p>
            <Link href="/projects" className="font-bold underline">
              <Button>View all results</Button>
            </Link>
          </div>
        </div>
      )}

      {res?.projects && res.projects.length > 0 && (
        <>
          <div className="mx-auto mb-6">
            <b className="block text-center text-xl font-bold lg:text-left">
              {totalProjectsDisplayed}{' '}
              {totalProjectsDisplayed <= 1 ? 'Project' : 'Projects'}{' '}
              {searchParams.search
                ? `for "${searchParams.search}"`
                : 'in total'}
            </b>
          </div>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
            {res?.projects?.map((project) => (
              <li key={project.id}>
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  image={project.image.url}
                  technologies={project.technologies.map(
                    ({ id, name, icon }) => ({
                      id,
                      name,
                      icon: icon.url
                    })
                  )}
                  date={project.date}
                  url={`/projects/${project.slug}`}
                />
              </li>
            ))}
          </ul>
        </>
      )}

      <Pagination
        total={totalProjectsDisplayed}
        limit={limit}
        currentPage={currentPage}
      />
    </main>
  )
}
