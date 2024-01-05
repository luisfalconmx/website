import Image from 'next/image'
import Button from '@/components/Button'
import SocialIcons from '@/components/SocialIcons'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getMeshSDK } from '../../.mesh'

export const getStaticProps = (async () => {
  const { GithubProfile } = await getMeshSDK()
  const {
    Github: { gh_user }
  } = await GithubProfile({ username: 'luisfalconmx' })

  return {
    props: {
      login: gh_user?.login,
      avatar_url: gh_user?.avatarUrl,
      bio: gh_user?.bio,
      socialAccounts: gh_user?.socialAccounts.edges
    }
  }
}) satisfies GetStaticProps

export default function Home({
  login,
  avatar_url,
  bio,
  socialAccounts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="my-24">
      <section className="mx-auto max-w-[683px]">
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

        <SocialIcons
          data={socialAccounts?.map((i) => ({
            displayName: i?.node?.displayName as string,
            provider: i?.node?.provider as string,
            url: i?.node?.url as string
          }))}
          className="mx-auto flex w-fit"
        />
      </section>
    </main>
  )
}
