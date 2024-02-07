import Image from 'next/image'
import Link from 'next/link'
import contentfulClient from '@/clients/contentfulClient'
import MainLayout from '@/Layouts/MainLayout'
import Button from '@/components/Button'
import SocialIcons from '@/components/SocialIcons'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
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
    <MainLayout>
      <section className="mx-auto mb-32 mt-7 max-w-[683px]">
        <Image
          width={220}
          height={200}
          src={profilePicture}
          alt={username}
          className="mx-auto mb-10 rounded-full shadow-2xl shadow-black dark:shadow-none"
        />

        <h1 className="mb-10 text-center text-[3.438rem] font-bold leading-[115.195%]">
          Hello, I am {username}{' '}
          <span className="m-0 w-fit bg-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {position}
          </span>
        </h1>

        <p className="mb-12 text-center text-lg text-iron dark:text-smoke">
          {description}
        </p>

        <div className="mb-16 text-center">
          <Link href="/projects">
            <Button className="mr-4">View all projects</Button>
          </Link>
          <a href={cv} target="_blank">
            <Button variant="outlined">Download CV</Button>
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

      <section className="mb-32 border-y py-16 shadow-2xl dark:border-none dark:bg-onyx dark:shadow-none">
        <div className="mx-auto grid max-w-screen-xl grid-cols-4 place-items-center gap-x-4">
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

      <section className="mx-auto mb-32 max-w-screen-xl">
        <h2 className="mb-8 text-4xl font-bold">Latest Projects</h2>

        <div className="grid grid-cols-1 gap-y-6">
          {latestProjects?.map((project) => (
            <CardProject
              variant="card"
              key={project?.name}
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

      <section className="mx-auto mb-32 max-w-screen-xl">
        <h2 className="mb-8 text-4xl font-bold">Work Experience</h2>

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

      <section className="mx-auto mb-24 max-w-screen-xl">
        <h2 className="mb-8 text-4xl font-bold">Recent Certifications</h2>

        <Splide options={certificationsCarouselOptions} className="splide">
          {certifications?.map((certification) => (
            <SplideSlide key={certification?.name}>
              <a href={certification?.credentialUrl || ''} target="_blank">
                <Image
                  src={certification?.picture?.url || ''}
                  alt={certification?.name || ''}
                  width={640}
                  height={500}
                />
              </a>
            </SplideSlide>
          ))}
        </Splide>
      </section>

      <section className="mx-auto mb-24 max-w-screen-xl">
        <h2 className="mb-8 text-4xl font-bold">Skills</h2>
        <ul className="grid grid-cols-3 gap-3">
          {skills.map((skill) => (
            <li key={skill?.title}>
              <div className="h-full cursor-default rounded-lg bg-ghost p-1 hover:bg-gradient-to-r hover:from-primary hover:to-secondary dark:bg-onyx">
                <div className="h-full rounded bg-ghost px-3 py-5 dark:bg-onyx">
                  <div className="mb-2 flex">
                    <ChevronDoubleRightIcon className="mr-1 h-6 w-6 text-primary" />
                    <b className="block text-lg uppercase">
                      {skill?.title || ''}
                    </b>
                  </div>
                  <p className="text-iron dark:text-smoke">
                    {skill?.description || ''}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </MainLayout>
  )
}
