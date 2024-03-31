import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import { socialLinks } from '@/config/socialLinks'
import { getProjects } from '@/services/hygraph'
import { ProjectCard } from '@/components/ProjectCard'
import type { Metadata } from 'next'

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

  return (
    <main>
      <section className="mx-auto mb-16 mt-7 max-w-[683px] px-6 lg:mb-32 lg:px-0">
        <Image
          width={190}
          height={190}
          src="/images/luisfalconmx.jpg"
          alt="Luis Falcon (luisfalconmx) profile picture"
          className="mx-auto mb-10 h-auto w-auto rounded-full shadow-none shadow-black"
        />

        <h1 className="mb-6 text-center text-3xl font-bold leading-[115.195%] lg:text-[3.438rem]">
          Hello, I am luisfalconmx{' '}
          <span className="m-0 w-fit">Frontend Developer</span>
        </h1>

        <p className="text-smoke mb-12 text-center text-xl lg:text-lg">
          I have 4 years of experience, B1 English level and more than 100
          certifications related to software development.
        </p>

        <div className="mx-auto mb-16 flex flex-col text-center lg:w-fit lg:flex-row">
          <Link href="/projects" className="mb-3 mr-4 block lg:mb-0">
            <Button className="flex w-full justify-center lg:w-auto">
              View Projects
            </Button>
          </Link>
          <Link href="/projects" className="mb-3 mr-4 block lg:mb-0">
            <Button className="flex w-full justify-center bg-transparent lg:w-auto">
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

      <section className="mb-32 border-y border-divider-soft bg-white py-16 shadow-none dark:border-divider-hard dark:bg-night">
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 place-items-center gap-x-6 gap-y-14 text-center md:grid-cols-2 md:place-items-start md:gap-y-10 md:px-16 md:text-left lg:grid-cols-4 lg:place-items-center lg:gap-y-0 lg:px-0">
          <div>
            <strong className="mb-4 block text-5xl font-bold">12</strong>
            <p className="block text-xl uppercase">projects</p>
          </div>
          <div>
            <strong className="mb-4 block text-5xl font-bold">4</strong>
            <p className="block text-xl uppercase">years of experience</p>
          </div>

          <div>
            <strong className="mb-4 block text-5xl font-bold">100+</strong>
            <p className="block text-xl uppercase">certifications</p>
          </div>

          <div>
            <strong className="mb-4 block text-5xl font-bold">B1</strong>
            <p className="block text-xl uppercase">English level</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-32 box-border max-w-screen-xl px-2 md:px-4 lg:px-6">
        <h2 className="mb-12 text-center text-4xl font-bold lg:mb-24 lg:text-5xl">
          Latest Projects
        </h2>

        <div className="grid grid-cols-1 gap-y-12">
          {projectsResponse?.projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              image={project.image.url}
              tags={project.tags}
              date={project.date}
              url={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto mb-32 box-border max-w-screen-xl px-2 md:px-4 lg:px-6">
        <h2 className="mb-24 text-center text-5xl font-bold">
          Work Experience
        </h2>

        {/* <AccordionTrack
          items={experiences.map((i) => ({
            title: i?.title || '',
            description: i?.description || '',
            companyName: i?.companyName || '',
            companyImage: i?.companyImage?.url || '',
            startDate: i?.startDate || '',
            endDate: i?.endDate || ''
          }))}
        /> */}
      </section>

      <section className="mx-auto mb-32 box-border max-w-screen-xl px-2 md:px-4 lg:px-6">
        <h2 className="mb-24 text-center text-5xl font-bold">
          Recent Certifications
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {/* {certifications.map((certification) => (
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
          ))} */}
        </div>
      </section>

      <section className="mx-auto mb-32 box-border max-w-screen-xl px-2 md:px-4 lg:px-6">
        <h2 className="mb-24 text-center text-5xl font-bold">Skills</h2>

        <div className="grid grid-cols-4 gap-6">
          {/* {technologies.map((i) => (
            <SkillCard
              key={i?.name}
              name={i?.name || ''}
              icon={i?.icon?.url || ''}
            />
          ))} */}
        </div>
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
