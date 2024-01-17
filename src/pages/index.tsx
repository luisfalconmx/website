import Image from 'next/image'
import githubClient from '@/clients/githubClient'
import contentfulClient from '@/clients/contentfulClient'
import MainLayout from '@/Layouts/MainLayout'
import Button from '@/components/Button'
import SocialIcons from '@/components/SocialIcons'
import { Splide, SplideSlide } from '@splidejs/react-splide'
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

  socialAccounts?.unshift(githubAccount)

  return {
    props: {
      login: gh_response.data.user?.login ?? '',
      avatar_url: gh_response.data.user?.avatarUrl ?? '',
      bio: gh_response.data.user?.bio ?? '',
      socialAccounts: socialAccounts,
      projects: gh_response.data.user?.pinnedItems.edges?.map(
        (i) => i?.node as Repository
      ),
      experiences: contentful_response.data.experienceCollection?.items ?? []
    }
  }
}) satisfies GetStaticProps

export default function Home({
  login,
  avatar_url,
  bio,
  socialAccounts,
  projects,
  experiences
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const skills = [
    {
      title: 'Modern Frontend',
      description:
        'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
    },
    {
      title: 'JavaScript & Typescript',
      description:
        'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
    },
    {
      title: 'Version control system',
      description:
        'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
    },
    {
      title: 'RESTFUL API & GraphQL',
      description:
        'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
    },
    {
      title: 'Cross Browser Testing',
      description:
        'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
    },
    {
      title: 'Unit Testing & E2E Testing',
      description:
        'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
    },
    {
      title: 'Responsive Design',
      description:
        'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
    },
    {
      title: 'Accessibility / WCAG',
      description:
        'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
    },
    {
      title: 'SEO',
      description:
        'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
    },
    {
      title: 'Web optimization',
      description:
        'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
    },
    {
      title: 'Web security',
      description:
        'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
    },
    {
      title: 'CI & CD',
      description:
        'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet'
    }
  ]

  return (
    <MainLayout>
      <section className="mx-auto mb-32 max-w-[683px]">
        <Image
          width={220}
          height={200}
          src={avatar_url}
          alt="logo"
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
          <Button className="mr-4">View all projects</Button>
          <Button variant="outlined">Download CV</Button>
        </div>

        <SocialIcons data={socialAccounts} className="mx-auto flex w-fit" />
      </section>

      <section className="mb-32 grid grid-cols-4 gap-x-4">
        <div>
          <strong className="mb-4 block text-5xl font-bold">06</strong>
          <p className="block text-xl uppercase">projects</p>
        </div>
        <div>
          <strong className="mb-4 block text-5xl font-bold">03</strong>
          <p className="block text-xl uppercase">years of experience</p>
        </div>

        <div>
          <strong className="mb-4 block text-5xl font-bold">113</strong>
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
              key={project.name}
              name={project.name}
              description={project.description as string}
              tags={project?.repositoryTopics.nodes?.map((i) =>
                i ? i.topic.name : ''
              )}
              licence={project.licenseInfo?.name as string}
              stars={project.stargazerCount as number}
              issues={project.issues.totalCount as number}
              contributors={project.collaborators?.totalCount as number}
              forks={project.forkCount as number}
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

        <Splide
          options={{
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
          }}
          className="splide"
        >
          <SplideSlide>
            <Image
              src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/40321798"
              alt="certificate"
              width={640}
              height={480}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/40321798"
              alt="certificate"
              width={640}
              height={480}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/40321798"
              alt="certificate"
              width={640}
              height={480}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/40321798"
              alt="certificate"
              width={640}
              height={480}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/40321798"
              alt="certificate"
              width={640}
              height={480}
            />
          </SplideSlide>
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
