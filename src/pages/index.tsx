import Image from 'next/image'
import githubClient from '@/clients/githubClient'
import contentfulClient from '@/clients/contentfulClient'
import MainLayout from '@/Layouts/MainLayout'
import Button from '@/components/Button'
import SocialIcons from '@/components/SocialIcons'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import skills from '@/json/skills.json'
import {
  GithubProfileDocument,
  GithubProfileQuery,
  GithubProfileQueryVariables
} from '@/generated/github.schema'
import {
  GetExperiencesDocument,
  GetExperiencesQuery,
  GetExperiencesQueryVariables
} from '@/generated/contentful.schema'
import CardExperience from '@/components/CardExperience'
import CardProject from '@/components/CardProject'
import { GITHUB_USERNAME } from '@/config'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import type { Repository } from '@/generated/github.schema'
import '@splidejs/react-splide/css'
import Link from 'next/link'

export const getStaticProps = (async () => {
  const gh_client = githubClient()
  const contentful_client = contentfulClient()

  const gh_response = await gh_client.query<
    GithubProfileQuery,
    GithubProfileQueryVariables
  >({
    query: GithubProfileDocument,
    variables: {
      username: GITHUB_USERNAME
    }
  })

  const contentful_response = await contentful_client.query<
    GetExperiencesQuery,
    GetExperiencesQueryVariables
  >({
    query: GetExperiencesDocument
  })

  const socialAccounts = gh_response.data.user?.socialAccounts?.edges?.map(
    (i) => ({
      provider: i?.node?.provider as string,
      url: i?.node?.url as string,
      displayName: i?.node?.displayName as string
    })
  )

  const githubAccount = {
    provider: 'github',
    url: `https://github.com/${GITHUB_USERNAME}`,
    displayName: GITHUB_USERNAME
  }

  const platziAccount = {
    provider: 'platzi',
    url: 'https://platzi.com/p/luisfalconmx',
    displayName: 'luisfalconmx'
  }

  socialAccounts?.unshift(githubAccount)
  socialAccounts?.push(platziAccount)

  return {
    props: {
      login: gh_response.data.user?.login ?? '',
      avatar_url: gh_response.data.user?.avatarUrl ?? '',
      bio: gh_response.data.user?.bio ?? '',
      socialAccounts: socialAccounts,
      projects: gh_response.data.user?.pinnedItems.edges?.map(
        (i) => i?.node as Repository
      ),
      experiences: contentful_response.data.experienceCollection?.items ?? [],
      certifications: contentful_response.data.certificationCollection?.items,
      certificationCount:
        contentful_response.data.certificationCollection?.total
    }
  }
}) satisfies GetStaticProps

export default function Home({
  login,
  avatar_url,
  bio,
  socialAccounts,
  projects,
  experiences,
  certifications,
  certificationCount
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
      <section className="mx-auto mb-32 max-w-[683px]">
        <Image
          width={220}
          height={200}
          src={avatar_url}
          alt={login}
          className="mx-auto mb-10 rounded-full shadow-2xl shadow-black dark:shadow-none"
        />

        <h1 className="mb-10 text-center text-[3.438rem] font-bold leading-[115.195%]">
          Hello, I am {login}{' '}
          <span className="m-0 w-fit bg-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Frontend Developer
          </span>
        </h1>

        <p className="mb-12 text-center text-lg text-smoke">{bio}</p>

        <div className="mb-16 text-center">
          <Link href="/projects">
            <Button className="mr-4">View all projects</Button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1q5afbC2XZrcErTQ8QExCpLFIFpuN4DLm/view?usp=sharing"
            target="_blank"
          >
            <Button variant="outlined">Download CV</Button>
          </a>
        </div>

        <SocialIcons data={socialAccounts} className="mx-auto flex w-fit" />
      </section>

      <section className="mb-32 grid grid-cols-4 place-items-center gap-x-4">
        <div>
          <strong className="mb-4 block text-5xl font-bold">06</strong>
          <p className="block text-xl uppercase">projects</p>
        </div>
        <div>
          <strong className="mb-4 block text-5xl font-bold">03</strong>
          <p className="block text-xl uppercase">years of experience</p>
        </div>

        <div>
          <strong className="mb-4 block text-5xl font-bold">
            {certificationCount}
          </strong>
          <p className="block text-xl uppercase">certifications</p>
        </div>

        <div>
          <strong className="mb-4 block text-5xl font-bold">A2</strong>
          <p className="block text-xl uppercase">English level</p>
        </div>
      </section>

      <section className="mb-32">
        <h2 className="mb-8 text-4xl font-bold">Featured Projects</h2>

        <div className="mx-auto grid max-w-fit grid-cols-2 gap-6">
          {projects?.map((project) => (
            <CardProject
              variant="compact"
              key={project.name}
              name={project.name}
              description={project.description || ''}
              primaryLanguage={project.primaryLanguage?.name || ''}
              image={project?.openGraphImageUrl}
              tags={project?.repositoryTopics.nodes?.map((i) =>
                i ? i.topic.name : ''
              )}
              licence={project.licenseInfo?.name || ''}
              createdDate={project.createdAt}
              latestRelease={project.latestRelease?.name || ''}
            />
          ))}
        </div>
      </section>

      <section className="mb-32">
        <h2 className="mb-8 text-4xl font-bold">Experience</h2>

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

      <section className="mb-24">
        <h2 className="mb-8 text-4xl font-bold">Recent Certifications</h2>

        <Splide options={certificationsCarouselOptions} className="splide">
          {certifications?.map((certification) => (
            <SplideSlide key={certification?.name}>
              <Image
                src={certification?.picture?.url || ''}
                alt={certification?.name || ''}
                width={640}
                height={480}
              />
            </SplideSlide>
          ))}
        </Splide>
      </section>

      <section className="mb-24">
        <h2 className="mb-8 text-4xl font-bold">Skills</h2>
        <ul className="grid grid-cols-3 gap-3">
          {skills.map(({ title, description }) => (
            <li key={title}>
              <div className="cursor-default rounded-lg bg-onyx p-1 hover:bg-gradient-to-r hover:from-primary hover:to-secondary">
                <div className="bg-onyx px-3 py-5">
                  <div className="mb-2 flex">
                    <ChevronDoubleRightIcon className="mr-1 h-6 w-6 text-primary" />
                    <b className="block text-lg uppercase">{title}</b>
                  </div>
                  <p className="text-smoke">{description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </MainLayout>
  )
}
