import Link from 'next/link'
import Script from 'next/script'
import Image from 'next/image'
import BlockGradient from '@/components/BlockGradient'
import { Button } from '@nextui-org/react'
import { BriefcaseIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import AccordionTrack from '@/components/AccordionTrack'
import ProjectCard from '@/components/ProjectCard'
import CertificationCard from '@/components/CertificationCard'
import SkillCard from '@/components/SkillCard'
import contentfulClient from '@/clients/contentfulClient'
import dayjs from 'dayjs'
import addInitialZero from '@/utils/addInitialZero'
import {
  GetHomePageInfoQuery,
  GetHomePageInfoQueryVariables,
  GetHomePageInfoDocument
} from '@/generated/contentful.schema'
import schemaMarkup from './schema.json'
import type { Metadata } from 'next'

// revalidate every 5 minutes
export const revalidate = 300

export const metadata: Metadata = {
  title: 'Luis Falcon (luisfalconmx) - Frontend Developer',
  description:
    'I am frontend developer with 4 years of experience, B1 English level and more than 100 certifications related to software development.',
  creator: 'Luis Falcon (luisfalconmx)',
  robots: 'index, follow',
  openGraph: {
    title: 'Luis Falcon (luisfalconmx) - Frontend Developer',
    description:
      'I am frontend developer with 4 years of experience, B1 English level and more than 100 certifications related to software development.',
    type: 'website',
    url: 'https://www.luisfalconmx.dev',
    images: [
      {
        url: 'https://www.luisfalconmx.dev/images/open-graph-image.jpg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://www.luisfalconmx.dev/images/open-graph-image.jpg'
      }
    ]
  }
}

export default async function Home() {
  const client = contentfulClient()

  const response = await client.query<
    GetHomePageInfoQuery,
    GetHomePageInfoQueryVariables
  >({
    query: GetHomePageInfoDocument,
    variables: {}
  })

  let tempTotalExperience = 0

  const monthsOfExperience = response.data.experienceCollection?.items.map(
    (i) => {
      const now = dayjs()
      const startDate = dayjs(i?.startDate?.substring(0, 10))
      const endDate = dayjs(i?.endDate?.substring(0, 10) || now)

      return endDate.diff(startDate, 'month')
    }
  )

  if (monthsOfExperience) {
    const sumExperience =
      monthsOfExperience.reduce((acc, curr) => acc + curr, 0) / 12

    tempTotalExperience = Math.round(sumExperience * 2) / 2
  }

  const username = response.data.profile?.username || ''
  const profilePicture = response.data.profile?.picture?.url || ''
  const position = response.data.profile?.position || ''
  const description = response.data.profile?.description || ''
  const cvDownloadLink = response.data.profile?.cv?.url || ''
  const englishLevel = response.data.profile?.englishLevel || ''
  const totalProjects = response.data.projectCollection?.total || 0
  const latestProjects = response.data.projectCollection?.items || []
  const totalExperience = tempTotalExperience || 0
  const experiences = response.data.experienceCollection?.items || []
  const totalCertifications = response.data.certificationCollection?.total || 0
  const certifications = response.data.certificationCollection?.items || []
  const technologies = response.data.technologyCollection?.items || []

  return (
    <>
      <BlockGradient variant="default" />

      <section className="mx-auto mb-32 mt-7 max-w-[683px] px-6 lg:px-0">
        <Image
          width={190}
          height={190}
          src={profilePicture}
          alt="Luis Falcon (luisfalconmx) profile picture"
          className="mx-auto mb-10 h-auto w-auto rounded-full shadow-none shadow-black"
        />

        <h1 className="mb-10 text-center text-5xl font-bold leading-[115.195%] lg:text-[3.438rem]">
          Hello, I am {username}{' '}
          <span className="m-0 w-fit bg-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {position}
          </span>
        </h1>

        <p className="mb-12 text-center text-2xl text-smoke lg:text-lg">
          {description}
        </p>

        <div className="mx-auto mb-16 flex w-fit flex-col text-center lg:flex-row">
          <Link href="/projects" className="mb-3 mr-4  block lg:mb-0 ">
            <Button
              size="lg"
              radius="full"
              variant="shadow"
              className="bg-gradient-to-r from-primary to-secondary p-8 text-xl lg:w-auto"
              startContent={<BriefcaseIcon width={24} />}
            >
              View Projects
            </Button>
          </Link>
          <a href={cvDownloadLink} className="block" target="_blank">
            <Button
              size="lg"
              radius="full"
              className="p-8 text-xl"
              startContent={<ArrowDownTrayIcon width={24} />}
            >
              Download CV
            </Button>
          </a>
        </div>
      </section>

      <section className="mb-32 border-y border-divider py-16 shadow-none">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 place-items-center gap-x-6 gap-y-14 text-center md:grid-cols-2 md:place-items-start md:gap-y-10 md:px-16 md:text-left lg:grid-cols-4 lg:place-items-center lg:gap-y-0 lg:px-0">
          <div>
            <strong className="mb-4 block text-5xl font-bold">
              {addInitialZero(totalProjects)}
            </strong>
            <p className="block text-xl uppercase">projects</p>
          </div>
          <div>
            <strong className="mb-4 block text-5xl font-bold">
              {addInitialZero(totalExperience)}
            </strong>
            <p className="block text-xl uppercase">years of experience</p>
          </div>

          <div>
            <strong className="mb-4 block text-5xl font-bold">
              {addInitialZero(totalCertifications)}
            </strong>
            <p className="block text-xl uppercase">certifications</p>
          </div>

          <div>
            <strong className="mb-4 block text-5xl font-bold">
              {englishLevel}
            </strong>
            <p className="block text-xl uppercase">English level</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-32 box-border max-w-screen-xl px-2 md:px-4 lg:px-6">
        <h2 className="mb-24 text-center text-5xl font-bold">
          Latest Projects
        </h2>

        <div className="grid grid-cols-1 gap-y-24 lg:mx-0">
          {latestProjects.map((project) => (
            <ProjectCard
              key={project?.slug}
              variant="featured"
              slug={project?.slug || ''}
              name={project?.name || ''}
              description={project?.description || ''}
              image={project?.featuredImage?.url || ''}
              tags={
                project?.technologiesCollection?.items?.map((i: any) => ({
                  icon: i.icon.url,
                  name: i.name
                })) || []
              }
            />
          ))}
        </div>
      </section>

      <section className="mx-auto mb-32 box-border max-w-screen-xl px-2 md:px-4 lg:px-6">
        <h2 className="mb-24 text-center text-5xl font-bold">
          Work Experience
        </h2>

        <AccordionTrack
          items={experiences.map((i) => ({
            title: i?.title || '',
            description: i?.description || '',
            companyName: i?.companyName || '',
            companyImage: i?.companyImage?.url || '',
            startDate: i?.startDate || '',
            endDate: i?.endDate || ''
          }))}
        />
      </section>

      <section className="mx-auto mb-32 box-border max-w-screen-xl px-2 md:px-4 lg:px-6">
        <h2 className="mb-24 text-center text-5xl font-bold">
          Recent Certifications
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification?.credentialUrl}
              credentialUrl={certification?.credentialUrl || ''}
              image={certification?.picture?.url || ''}
              date={certification?.issueDate || ''}
              name={certification?.name || ''}
              organizationImage={
                certification?.issuingOrganizationImage?.url || ''
              }
              organizationName={certification?.issuingOrganization || ''}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto mb-32 box-border max-w-screen-xl px-2 md:px-4 lg:px-6">
        <h2 className="mb-24 text-center text-5xl font-bold">Skills</h2>

        <div className="grid grid-cols-4 gap-6">
          {technologies.map((i) => (
            <SkillCard
              key={i?.name}
              name={i?.name || ''}
              icon={i?.icon?.url || ''}
            />
          ))}
        </div>
      </section>

      <Script id="schema" type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </Script>
    </>
  )
}
