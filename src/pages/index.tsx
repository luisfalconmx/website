import Image from 'next/image'
import githubClient from '@/clients/githubClient'
import contentfulClient from '@/clients/contentfulClient'
import MainLayout from '@/Layouts/MainLayout'
import Button from '@/components/Button'
import SocialIcons from '@/components/SocialIcons'
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
import { GITHUB_USERNAME } from '@/config'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

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

  // add githubAccount first to socialAccounts array
  socialAccounts?.unshift(githubAccount)

  return {
    props: {
      login: gh_response.data.user?.login ?? '',
      avatar_url: gh_response.data.user?.avatarUrl ?? '',
      bio: gh_response.data.user?.bio ?? '',
      socialAccounts: socialAccounts,
      experiences: contentful_response.data.experienceCollection?.items ?? []
    }
  }
}) satisfies GetStaticProps

export default function Home({
  login,
  avatar_url,
  bio,
  socialAccounts,
  experiences
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MainLayout>
      <section className="mx-auto mb-24 max-w-[683px]">
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
          <Button className="mr-4">View Projects</Button>
          <Button variant="outlined">Download CV</Button>
        </div>

        <SocialIcons data={socialAccounts} className="mx-auto flex w-fit" />
      </section>

      <section className="">
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
    </MainLayout>
  )
}
