import Image from 'next/image'
import Button from '@/components/Button'
import SocialIcons from '@/components/SocialIcons'
import getGithubProfile from '@/services/getGithubProfile'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps = (async () => {
  const { avatar_url, bio, social, html_url } =
    await getGithubProfile('luisfalconmx')

  return {
    props: {
      avatar_url,
      bio,
      html_url,
      social
    }
  }
}) satisfies GetStaticProps<Partial<IGithubProfile>>

export default function Home({
  avatar_url,
  bio,
  social
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
          Hello, I am luisfalconmx{' '}
          <span className="m-0 w-fit bg-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Frontend Developer
          </span>
        </h1>

        <p className="mb-12 text-center text-lg text-smoke">{bio}</p>

        <div className="mb-16 text-center">
          <Button className="mr-4">View Projects</Button>
          <Button variant="outlined">Download CV</Button>
        </div>

        <SocialIcons data={social} className="mx-auto flex w-fit" />
      </section>
    </main>
  )
}
