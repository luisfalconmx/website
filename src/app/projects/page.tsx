import Image from 'next/image'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import {
  ArrowTopRightOnSquareIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline'
import { getProjects, searchProjectsByTerm } from '@/services/hygraph'
import humanDate from '@/utils/humanDate'
import Link from 'next/link'
import { defaultBlurImage } from '@/config/blurImages'
import { Search } from '@/components/Search'
import { Pagination } from '@/components/Pagination'
import Button from '@/components/Button'
import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
  const total = 0

  return {
    title: 'Projects',
    description: `I have obtained ${total} Projects to demonstrate my knowledge as a Frontend Developer.`,
    openGraph: {
      title: 'Projects',
      description: `I have obtained ${total} Projects to demonstrate my knowledge as a Frontend Developer.`,
      type: 'website',
      url: 'https://www.luisfalconmx.dev',
      images: [
        {
          url: 'https://www.luisfalconmx.dev/images/open-graph-image.jpg'
        }
      ]
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

  const totalProjects = res?.projectsConnection.aggregate.count || 0

  return (
    <main className="mx-auto max-w-screen-xl px-4 py-12 lg:py-24">
      <h1 className="mx-auto mb-4 w-fit text-3xl font-bold">Projects</h1>
      <p className="mx-auto mb-12 max-w-2xl text-center text-black/80 dark:text-white/80 lg:text-lg">
        I have obtained multiple Projects to demonstrate my knowledge as a{' '}
        <b>Frontend Developer</b>. These Projects are issued by{' '}
        <b>recognized organizations</b> and each certificate has a{' '}
        <b>unique credential ID</b> that can be verified.
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
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
          {res?.projects?.map((project) => (
            <li key={project.id}>
              <article className="grid h-full grid-cols-1 gap-x-10 overflow-hidden rounded-xl border border-divider-soft bg-white dark:border-divider-hard dark:bg-night lg:grid-cols-[1fr_500px] lg:px-12 lg:pt-12">
                <div className="flex flex-col px-6 py-8 text-center lg:mb-8 lg:p-0 lg:text-left">
                  <time
                    dateTime={project.date}
                    className="mb-2 text-sm text-neutral-400"
                  >
                    {humanDate(project.date)}
                  </time>

                  <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
                    {project.name}
                  </h2>

                  <p className="mb-6 block lg:text-lg">{project.description}</p>

                  <ul className="mb-12 flex flex-wrap justify-center lg:justify-start">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="mr-2 rounded-lg border px-2 py-1"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="mx-auto w-full lg:mx-0 lg:w-fit"
                  >
                    <Button className="flex min-h-[50px] w-full items-center justify-center lg:min-h-0 lg:justify-normal">
                      View project
                      <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <Image
                  src={project.image.url}
                  alt={project.name || ''}
                  width={500}
                  height={500}
                  blurDataURL={defaultBlurImage}
                  className="row-start-1 lg:row-start-auto"
                />
              </article>
            </li>
          ))}
        </ul>
      )}

      <Pagination
        total={totalProjects}
        limit={limit}
        currentPage={currentPage}
      />
    </main>
  )
}
