import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import contentfulClient from '@/clients/contentfulClient'
import MainLayout from '@/Layouts/MainLayout'
import Button from '@/components/Button'
import SocialIcons from '@/components/SocialIcons'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import addZero from '@/utils/addZero'
import dayjs from 'dayjs'
import {
  GetHomePageInfoQuery,
  GetHomePageInfoQueryVariables,
  GetHomePageInfoDocument
} from '@/generated/contentful.schema'
import CardExperience from '@/components/CardExperience'
import CardProject from '@/components/CardProject'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import '@splidejs/react-splide/css'

export const getStaticProps = (async () => {
  const client = contentfulClient()

  const response = await client.query<
    GetHomePageInfoQuery,
    GetHomePageInfoQueryVariables
  >({
    query: GetHomePageInfoDocument,
    variables: {}
  })

  let totalExperience = 0

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

    totalExperience = Math.round(sumExperience * 2) / 2
  }

  return {
    props: {
      username: response.data.profile?.username || '',
      profilePicture: response.data.profile?.picture?.url || '',
      position: response.data.profile?.position || '',
      description: response.data.profile?.description || '',
      cv: response.data.profile?.cv?.url || '',
      socialLinks: response.data.profile?.socialLinksCollection?.items || [],
      englishLevel: response.data.profile?.englishLevel || '',
      totalProjects: response.data.projectCollection?.total || 0,
      latestProjects: response.data.projectCollection?.items || [],
      totalExperience,
      experiences: response.data.experienceCollection?.items || [],
      totalCertifications: response.data.certificationCollection?.total || 0,
      certifications: response.data.certificationCollection?.items || [],
      skills: response.data.skillsCollection?.items || []
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}) satisfies GetStaticProps

export default function Home({
  username,
  profilePicture,
  position,
  description,
  cv,
  socialLinks,
  englishLevel,
  totalProjects,
  latestProjects,
  totalExperience,
  experiences,
  totalCertifications,
  certifications,
  skills
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const certificationsCarouselOptions = {
    type: 'loop',
    perPage: 2,
    perMove: 1,
    gap: '1rem',
    autoplay: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    breakpoints: {
      640: {
        perPage: 1
      }
    }
  }

  return (
    <>
      <Head>
        <title>Luis Falcon (luisfalconmx) - Frontend Developer</title>
        <meta
          name="description"
          content="I am frontend developer with experience in modern web technologies. I have more than 100 certifications related on software development."
        />
        <link rel="canonical" href="https://www.luisfalconmx.dev" />
      </Head>

      <MainLayout>
        <section className="mx-auto mb-32 mt-7 max-w-[683px] px-6 lg:px-0">
          <Image
            width={220}
            height={200}
            src={profilePicture}
            alt={username}
            className="mx-auto mb-10 rounded-full shadow-none shadow-black"
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
            <Link href="/projects" className="mb-3 block lg:mb-0">
              <Button className="mr-4 w-full lg:w-auto">
                View all projects
              </Button>
            </Link>
            <a className="block" href={cv} target="_blank">
              <Button variant="outlined" className="w-full lg:w-auto">
                Download CV
              </Button>
            </a>
          </div>

          <SocialIcons
            data={socialLinks.map((i: any) => ({
              title: i.title,
              link: i.link,
              iconUrl: i.icon.url
            }))}
            className="mx-auto flex w-fit"
          />
        </section>

        <section className="mb-32 border-y border-none bg-onyx py-16 shadow-none">
          <div className="mx-auto grid max-w-screen-xl grid-cols-1 place-items-center gap-x-6 gap-y-14 text-center md:grid-cols-2 md:place-items-start md:gap-y-10 md:px-16 md:text-left lg:grid-cols-4 lg:place-items-center lg:gap-y-0 lg:px-0">
            <div>
              <strong className="mb-4 block text-5xl font-bold">
                {addZero(totalProjects)}
              </strong>
              <p className="block text-xl uppercase">projects</p>
            </div>
            <div>
              <strong className="mb-4 block text-5xl font-bold">
                {addZero(totalExperience)}
              </strong>
              <p className="block text-xl uppercase">years of experience</p>
            </div>

            <div>
              <strong className="mb-4 block text-5xl font-bold">
                {addZero(totalCertifications)}
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

        <section className="mx-auto mb-32 max-w-screen-xl px-2 md:px-4 lg:px-6">
          <h2 className="mb-8 text-center text-4xl font-bold lg:text-left">
            Latest Projects
          </h2>

          <div className="grid grid-cols-1 gap-y-6 lg:mx-0">
            {latestProjects?.map((project) => (
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
            ))}
          </div>
        </section>

        <section className="mx-auto mb-32 max-w-screen-xl px-2 md:px-4 lg:px-6">
          <h2 className="mb-8 text-center text-4xl font-bold lg:text-left">
            Work Experience
          </h2>

          <div className="grid gap-y-5">
            {experiences.map((experience) => (
              <CardExperience
                key={experience?.title}
                title={experience?.title || ''}
                companyName={experience?.companyName || ''}
                companyImage={experience?.companyImage?.url || ''}
                employmentType={'Full-time' || ''}
                location={experience?.location || ''}
                locationType={'Remote'}
                startDate={experience?.startDate || ''}
                endDate={experience?.endDate || ''}
                industry={experience?.industry || ''}
                description={experience?.description || ''}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mb-24 max-w-screen-xl px-2 md:px-4 lg:px-6">
          <h2 className="mb-8 text-center text-4xl font-bold lg:text-left">
            Recent Certifications
          </h2>

          <Splide options={certificationsCarouselOptions} className="splide">
            {certifications?.map((certification) => (
              <SplideSlide key={certification?.name}>
                <Image
                  src={certification?.picture?.url || ''}
                  alt={certification?.name || ''}
                  width={640}
                  height={500}
                  className="rounded-lg shadow-none"
                />
              </SplideSlide>
            ))}
          </Splide>
        </section>

        <section className="mx-auto mb-24 max-w-screen-xl px-2 md:px-4 lg:px-6">
          <h2 className="mb-8 text-center text-4xl font-bold lg:text-left">
            Skills
          </h2>

          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <li key={skill?.title}>
                <div className="h-full cursor-default rounded-lg border border-iron/40 bg-onyx p-1 lg:bg-onyx lg:bg-none lg:hover:bg-gradient-to-r lg:hover:from-primary lg:hover:to-secondary">
                  <div className="h-full rounded bg-onyx px-3 py-5">
                    <div className="mb-2 flex">
                      <ChevronDoubleRightIcon className="mr-1 h-6 w-6 text-primary" />
                      <b className="block text-xl uppercase lg:text-lg">
                        {skill?.title || ''}
                      </b>
                    </div>
                    <p className="text-iron lg:text-smoke">
                      {skill?.description || ''}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </MainLayout>

      <Script id="schema" type="application/ld+json">
        {`{
          "@context": "https://schema.org/",
          "@type": "Person",
          "name": "Luis Falcon (luisfalconmx)",
          "url": "https://www.luisfalconmx.dev/",
          "image": "https://www.luisfalconmx.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ff6zp47ogowku%2F38N5Da3rtuMRI2HuM4o8D1%2Fe73cc100ff68d07d3ba4bb51fd552de2%2Fluisfalconmx-2023.jpg&w=640&q=75",
          "sameAs": [
            "https://www.facebook.com/luisfalconmx.dev",
            "https://twitter.com/luisfalconmx",
            "https://www.instagram.com/luisfalconmx",
            "https://www.linkedin.com/in/luisfalconmx",
            "https://github.com/luisfalconmx",
            "https://www.luisfalconmx.dev"
          ],
          "jobTitle": "Frontend Developer"  
        }`}
      </Script>
    </>
  )
}
