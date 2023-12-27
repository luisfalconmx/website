import Image from 'next/image'
import Button from '@/components/Button'
import getGithubProfile from '@/services/getGithubProfile'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const { avatar_url } = await getGithubProfile('luisfalconmx')

  return {
    props: {
      avatar_url
    }
  }
}

const Home = ({
  avatar_url
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main>
      <section className="mx-auto mt-24 max-w-[683px]">
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
        <p className="mb-12 text-center text-lg">
          Frontend developer with experience in React JS, JavaScript and modern
          web technologies. I have multiple certifications related to Web
          Development and Software Engineer
        </p>
        <div className="text-center">
          <Button className="mr-4">View Projects</Button>
          <Button variant="outlined">Download CV</Button>
        </div>
      </section>
    </main>
  )
}

export default Home
