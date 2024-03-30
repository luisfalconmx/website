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
  const limit = 9
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
            <Link href="/Projects" className="font-bold underline">
              <Button>View all results</Button>
            </Link>
          </div>
        </div>
      )}

      {res?.projects && res.projects.length > 0 && (
        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {res?.projects?.map((project) => (
            <li key={project.id}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-divider-soft bg-white dark:border-divider-hard dark:bg-night">
                <h2>{project.name}</h2>
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
