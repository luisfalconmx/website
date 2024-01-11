import Image from 'next/image'
import Button from '@/components/Button'
import SocialIcons from '@/components/SocialIcons'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps = (async () => {
  return {
    props: {
      login: 'luisfalconmx',
      avatar_url: 'https://avatars.githubusercontent.com/u/2471291?v=4',
      bio: 'bio',
      socialAccounts: []
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

        {/* <SocialIcons
          data={}
          className="mx-auto flex w-fit"
        /> */}
      </section>
    </main>
  )
}
