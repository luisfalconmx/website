import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import { socialLinks } from '@/config/socialLinks'
import {
  getProjects,
  getCertifications,
  getWorks,
  getTechnologies
} from '@/services/hygraph'
import { ProjectCard } from '@/components/ProjectCard'
import { WorkCard } from '@/components/WorkCard'
import { CertificationCard } from '@/components/CertificationCard'
import type { Metadata } from 'next'
import dayjs from 'dayjs'

export const metadata: Metadata = {
  title: 'Luis Falcon (luisfalconmx) - Frontend Developer',
  description:
    'I am Frontend Developer with 4 years of experience, B1 English level and more than 100 certifications related to software development.',
  robots: 'index, follow',
  openGraph: {
    description:
      'I am Frontend Developer with 4 years of experience, B1 English level and more than 100 certifications related to software development.',
    type: 'website',
    url: 'https://www.luisfalconmx.dev',
    images: [
      {
        url: 'https://www.luisfalconmx.dev/images/open-graph-image.jpg'
      }
    ]
  }
}

export default async function Home() {
  const projectsResponse = await getProjects({ limit: 3, skip: 0 })
  const certificationsResponse = await getCertifications({ limit: 6, skip: 0 })
  const worksResponse = await getWorks()
  const technologiesResponse = await getTechnologies()

  const totalProjects = projectsResponse?.projectsConnection.aggregate.count
  const totalCertifications =
    certificationsResponse?.certificationsConnection.aggregate.count
  let totalExperience = 0

  const monthsOfExperience = worksResponse?.works.map((i) => {
    const now = dayjs()
    const startDate = dayjs(i?.startDate?.substring(0, 10))
    const endDate = dayjs(i?.endDate?.substring(0, 10) || now)

    return endDate.diff(startDate, 'month')
  })

  if (monthsOfExperience) {
    const sumExperience =
      monthsOfExperience.reduce((acc, curr) => acc + curr, 0) / 12

    totalExperience = Math.round(sumExperience * 2) / 2
  }

  return (
    <main>
      <section className="mx-auto mb-16 mt-7 max-w-[683px] px-6 lg:mb-32 lg:px-0">
        <Image
          width={190}
          height={190}
          src="/images/luisfalconmx.jpg"
          alt="Luis Falcon (luisfalconmx) profile picture"
          className="mx-auto mb-10 h-auto w-auto rounded-full shadow-none shadow-black"
          priority={false}
        />

        <h1 className="mb-6 text-center text-3xl font-bold leading-[115.195%] lg:text-[3.438rem]">
          Hello, I am luisfalconmx{' '}
          <span className="m-0 w-fit">Frontend Developer</span>
        </h1>

        <p className="text-smoke mb-12 text-center text-xl">
          I have 4 years of experience, B1 English level and more than 100
          certifications related to software development.
        </p>

        <div className="mx-auto mb-16 flex flex-col text-center lg:w-fit lg:flex-row lg:space-x-4">
          <Link href="/projects" className="mb-3 block lg:mb-0">
            <Button className="flex w-full justify-center lg:w-auto">
              View Projects
            </Button>
          </Link>
          <Link href="/projects" className="mb-3 block lg:mb-0">
            <Button
              variant="outline"
              className="flex w-full justify-center lg:w-auto"
            >
              Download CV
            </Button>
          </Link>
        </div>

        <ul className="hidden justify-center space-x-8 lg:flex">
          {socialLinks.map((socialLink, index) => (
            <li key={index}>
              <Link href={socialLink.url} target="_blank" rel="noreferrer">
                <Image
                  src={socialLink.icon.src}
                  alt={socialLink.name}
                  width={28}
                  height={28}
                  className="dark:invert"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16 border-y border-divider-soft bg-white py-16 shadow-none dark:border-divider-hard dark:bg-night lg:mb-32">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 place-items-center gap-x-6 gap-y-14 text-center md:grid-cols-2 md:place-items-start md:gap-y-10 md:px-16 md:text-left lg:grid-cols-4 lg:place-items-center lg:gap-y-0 lg:px-0">
          <div>
            <strong className="mb-4 block text-5xl font-bold">
              {totalProjects}
            </strong>
            <p className="block text-xl uppercase">projects</p>
          </div>
          <div>
            <strong className="mb-4 block text-5xl font-bold">
              {totalExperience.toString().padStart(2, '0')}
            </strong>
            <p className="block text-xl uppercase">years of experience</p>
          </div>

          <div>
            <strong className="mb-4 block text-5xl font-bold">
              {totalCertifications}
            </strong>
            <p className="block text-xl uppercase">certifications</p>
          </div>

          <div>
            <strong className="mb-4 block text-5xl font-bold">B1</strong>
            <p className="block text-xl uppercase">English level</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-24 box-border max-w-screen-xl px-4 lg:mb-32 lg:px-6">
        <h2 className="mb-12 text-center text-4xl font-bold lg:mb-16 lg:text-5xl">
          Latest Projects
        </h2>

        <div className="grid grid-cols-1 gap-y-6">
          {projectsResponse?.projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              image={project.image.url}
              technologies={project.technologies.map(({ id, name, icon }) => ({
                id,
                name,
                icon: icon.url
              }))}
              date={project.date}
              url={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto mb-24 box-border max-w-screen-xl px-4 lg:mb-32 lg:px-6">
        <h2 className="mb-12 text-center text-4xl font-bold lg:mb-24 lg:text-5xl">
          Work Experience
        </h2>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
          {worksResponse?.works.map((work) => (
            <li key={work.id}>
              <WorkCard
                name={work.name}
                companyName={work.companyName}
                companyImage={work.companyImage}
                location={work.location}
                startDate={work.startDate}
                endDate={work.endDate}
                industry={work.industry}
                description={work.description}
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mb-24 box-border max-w-screen-xl px-4 lg:mb-32 lg:px-6">
        <h2 className="mb-12 text-center text-4xl font-bold lg:mb-24 lg:text-5xl">
          Recent Certifications
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificationsResponse?.certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              name={certification.name}
              date={certification.date}
              image={certification.image.url}
              organizationImage={certification.organizationImage.url}
              organizationName={certification.organizationName}
              url={certification.url}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto mb-32 box-border max-w-screen-xl px-4 lg:px-6">
        <h2 className="mb-12 text-center text-4xl font-bold lg:mb-24 lg:text-5xl">
          Hard Skills
        </h2>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {technologiesResponse?.technologies.map((technology) => (
            <li key={technology.name}>
              <div className="flex h-full items-center space-x-3 rounded-xl border border-divider-soft bg-white px-4 py-4 dark:border-divider-hard dark:bg-night">
                <Image
                  src={technology.icon.url}
                  alt={technology.name}
                  width={32}
                  height={32}
                  unoptimized
                />
                <p className="lg:text-xl">{technology.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Script id="schema" type="application/ld+json">
        {`{
          "@context": "https://schema.org/",
          "@type": "Person",
          "name": "Luis Falcon (luisfalconmx)",
          "jobTitle": "Frontend Developer",
          "url": "https://www.luisfalconmx.dev/",
          "image": "https://www.luisfalconmx.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ff6zp47ogowku%2F38N5Da3rtuMRI2HuM4o8D1%2Fe73cc100ff68d07d3ba4bb51fd552de2%2Fluisfalconmx-2023.jpg&w=384&q=75",
          "sameAs": [
            "https://www.facebook.com/luisfalconmx.dev",
            "https://twitter.com/luisfalconmx",
            "https://www.instagram.com/luisfalconmx",
            "https://www.linkedin.com/in/luisfalconmx",
            "https://github.com/luisfalconmx",
            "https://www.luisfalconmx.dev"
          ]
        }`}
      </Script>
    </main>
  )
}
