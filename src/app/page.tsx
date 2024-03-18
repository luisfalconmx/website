import Link from 'next/link'
import Image from 'next/image'
import BlockGradient from '@/components/BlockGradient'
import { Button } from '@nextui-org/react'
import { BriefcaseIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import AccordionInfo from '@/components/AccordionInfo'
import ProjectCard from '@/components/ProjectCard'
import CertificationCard from '@/components/CertificationCard'
import SkillCard from '@/components/SkillCard'
import profilePicture from '@/assets/images/luisfalconmx.jpg'

export default function Home() {
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
          Hello, I am luisfalconmx{' '}
          <span className="m-0 w-fit bg-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Frontend Developer
          </span>
        </h1>

        <p className="mb-12 text-center text-2xl text-smoke lg:text-lg">
          Frontend developer with experience in React JS, JavaScript and modern
          web technologies. I have multiple certifications related to Web
          Development
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
          <a href="#" className="block" target="_blank">
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
            <strong className="mb-4 block text-5xl font-bold">12</strong>
            <p className="block text-xl uppercase">projects</p>
          </div>
          <div>
            <strong className="mb-4 block text-5xl font-bold">12</strong>
            <p className="block text-xl uppercase">years of experience</p>
          </div>

          <div>
            <strong className="mb-4 block text-5xl font-bold">10</strong>
            <p className="block text-xl uppercase">certifications</p>
          </div>

          <div>
            <strong className="mb-4 block text-5xl font-bold">A2</strong>
            <p className="block text-xl uppercase">English level</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-32 box-border max-w-screen-xl px-2 md:px-4 lg:px-6">
        <h2 className="mb-24 text-center text-5xl font-bold">
          Latest Projects
        </h2>

        <div className="grid grid-cols-1 gap-y-24 lg:mx-0">
          <ProjectCard
            variant="featured"
            slug="123"
            name="TBK Landing Page"
            description="Company website with multilanguage support, dark mode and fully responsive for thebouncingkoala agency"
            image="https://www.luisfalconmx.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ff6zp47ogowku%2F7hJ7RtxKHtwBTCYzTbBxYU%2F09cfd651845768734b2b2e389b170dd7%2Fthebouncingkoala-cover.jpg&w=640&q=75"
            tags={[]}
          />
          <ProjectCard
            variant="featured"
            slug="123"
            name="TBK Landing Page"
            description="Company website with multilanguage support, dark mode and fully responsive for thebouncingkoala agency"
            image="https://www.luisfalconmx.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ff6zp47ogowku%2F7hJ7RtxKHtwBTCYzTbBxYU%2F09cfd651845768734b2b2e389b170dd7%2Fthebouncingkoala-cover.jpg&w=640&q=75"
            tags={[]}
          />
          <ProjectCard
            variant="featured"
            slug="123"
            name="TBK Landing Page"
            description="Company website with multilanguage support, dark mode and fully responsive for thebouncingkoala agency"
            image="https://www.luisfalconmx.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ff6zp47ogowku%2F7hJ7RtxKHtwBTCYzTbBxYU%2F09cfd651845768734b2b2e389b170dd7%2Fthebouncingkoala-cover.jpg&w=640&q=75"
            tags={[]}
          />
          {/* {latestProjects?.map((project) => (
              <CardProject
                variant="featured"
                key={project?.name}
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
            ))} */}
        </div>
      </section>

      <section className="mx-auto mb-32 box-border max-w-screen-xl px-2 md:px-4 lg:px-6">
        <h2 className="mb-24 text-center text-5xl font-bold">
          Work Experience
        </h2>

        <AccordionInfo />
      </section>

      <section className="mx-auto mb-32 box-border max-w-screen-xl px-2 md:px-4 lg:px-6">
        <h2 className="mb-24 text-center text-5xl font-bold">
          Recent Certifications
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {/* <CertificationCard />
          <CertificationCard />
          <CertificationCard />
          <CertificationCard /> */}
        </div>
      </section>

      <section className="mx-auto mb-32 box-border max-w-screen-xl px-2 md:px-4 lg:px-6">
        <h2 className="mb-24 text-center text-5xl font-bold">Skills</h2>

        <div className="grid grid-cols-4 gap-6">
          {Array.from({ length: 24 }).map((_, i) => (
            <SkillCard key={i} />
          ))}
        </div>
      </section>
    </>
  )
}
