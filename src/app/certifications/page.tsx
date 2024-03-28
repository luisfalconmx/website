import Image from 'next/image'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import humanDate from '@/utils/humanDate'
import Link from 'next/link'
import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
  const total = 0

  return {
    title: 'Certifications',
    description: `I have obtained ${total} certifications to demonstrate my knowledge as a Frontend Developer.`,
    openGraph: {
      title: 'Certifications',
      description: `I have obtained ${total} certifications to demonstrate my knowledge as a Frontend Developer.`,
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

export default async function Certifications({
  searchParams
}: {
  searchParams: {
    page: string
  }
}) {
  const currentPage = parseInt(searchParams.page) || 1
  const limit = 9
  const skip = (currentPage - 1) * limit

  const totalCertifications = 0

  return (
    <main className="mx-auto max-w-screen-xl px-4 py-6 lg:py-16">
      <h1 className="mb-4 text-3xl font-bold">Certifications</h1>
      <p className="mb-8 max-w-2xl text-lg text-black/80 dark:text-white/80">
        I have obtained <b>{totalCertifications} certifications</b> to
        demonstrate my knowledge as a <b>Frontend Developer</b>. These
        certifications are issued by <b>recognized organizations</b> and each
        certificate has a <b>unique credential ID</b> that can be verified.
      </p>

      <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* {certifications.items.map((certification) => (
          <li key={certification.name}>
            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-divider-soft bg-white dark:border-divider-hard dark:bg-night">
              <Image
                src={certification.picture.url}
                alt={`Certificate for ${certification.name}`}
                width={400}
                height={300}
              />
              <div className="flex h-full flex-col border-t border-divider-soft p-4 dark:border-divider-hard">
                <h2 className="mb-2 text-lg font-bold">{certification.name}</h2>
                <time
                  dateTime={certification.issueDate}
                  className="mb-6 flex items-center text-sm text-black/80 dark:text-white/80"
                >
                  <CalendarDaysIcon className="mr-1 inline-block h-5 w-5" />
                  {humanDate(certification.issueDate)}
                </time>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={certification.issuingOrganizationImage.url}
                      alt={certification.issuingOrganization}
                      width={32}
                      height={32}
                      className="mr-2 rounded-full"
                    />
                    <p className="font-bold">
                      {certification.issuingOrganization}
                    </p>
                  </div>
                  <Link
                    className="flex"
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="nofollow"
                    aria-label={`View ${certification.name} certificate`}
                  >
                    <ArrowTopRightOnSquareIcon className="inline-block h-6 w-6" />
                  </Link>
                </div>
              </div>
            </article>
          </li>
        ))} */}
      </ul>
    </main>
  )
}
