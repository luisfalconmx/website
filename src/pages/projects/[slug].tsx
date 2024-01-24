import Image from 'next/image'
import MainLayout from '@/Layouts/MainLayout'
import Button from '@/components/Button'
import githubClient from '@/clients/githubClient'
import { GITHUB_USERNAME } from '@/config'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import humanDate from '@/utils/humanDate'
import '@splidejs/react-splide/css'
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'
import {
  CheckBadgeIcon,
  RocketLaunchIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/solid'
import {
  GetProjectBySlugDocument,
  GetProjectBySlugQuery,
  GetProjectBySlugQueryVariables
} from '@/generated/github.schema'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps = (async ({ params }) => {
  const client = githubClient()
  const response = await client.query<
    GetProjectBySlugQuery,
    GetProjectBySlugQueryVariables
  >({
    query: GetProjectBySlugDocument,
    variables: {
      login: GITHUB_USERNAME,
      slug: params?.slug as string
    }
  })

  return {
    props: {
      project: response.data.user?.repository
    },
    revalidate: 60 * 5 // 5 minutes
  }
}) satisfies GetStaticProps

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default function Blog({
  project
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const cleanPrimaryLanguage = project?.primaryLanguage?.name
    ?.toLowerCase()
    .replace(' ', '-')

  return (
    <MainLayout>
      <section className="mb-24 grid grid-cols-[500px,1fr] gap-x-12">
        <Image
          src="https://images.ui8.net/uploads/preview-3_1636636114453.png"
          alt={project?.name || ''}
          width={500}
          height={500}
          className="rounded-xl"
        />

        <div className="pt-6">
          <div className="mb-4 flex items-end">
            <Image
              src={`https://svgl.vercel.app/library/${cleanPrimaryLanguage}.svg`}
              alt={project?.primaryLanguage?.name || ''}
              width={56}
              height={56}
              className="mr-3 block max-h-[42px] max-w-[42px]"
            />
            <h1 className=" text-5xl font-bold">{project?.name}</h1>
          </div>

          <div className="mb-4 flex">
            <div className="text-iron mr-6 flex items-center dark:text-smoke">
              <CheckBadgeIcon className="mr-1 h-5 w-5 text-green-500" />
              <span className="block">{project?.licenseInfo?.name}</span>
            </div>
            <div className="text-iron mr-6 flex items-center dark:text-smoke">
              <RocketLaunchIcon className="mr-1 h-5 w-5" />
              <span className="block">{project?.latestRelease?.name}</span>
            </div>
            <div className="text-iron mr-6 flex items-center dark:text-smoke">
              <CalendarDaysIcon className="mr-1 h-5 w-5 " />
              <span className="block">{humanDate(project?.createdAt)}</span>
            </div>
          </div>

          <p className="text-iron mb-8 text-xl dark:text-smoke">
            {project?.description}
          </p>

          <div className="mb-8 flex flex-wrap">
            {project?.repositoryTopics.nodes?.map((node) => (
              <div
                className="mb-2 mr-2 block cursor-default rounded border p-1 px-2 font-bold last:mr-0"
                key={node?.topic.name}
              >
                {node?.topic.name}
              </div>
            ))}
          </div>

          <div className="flex">
            <a href={project?.homepageUrl}>
              <Button className="mr-3 flex items-center rounded-xl">
                <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" />
                Live preview
              </Button>
            </a>
            <a href={project?.url}>
              <Button
                variant="outlined"
                className="mr-3 flex items-center rounded-xl"
              >
                <CodeBracketIcon className="mr-2 h-6 w-6" />
                Source code
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="mb-8 text-5xl font-bold">Overview</h2>
        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          fuga, alias autem voluptate aspernatur rem minus ad numquam.
          Repellendus placeat nisi ipsam repellat omnis nemo saepe, neque
          aliquam ex natus!
        </p>
      </section>

      <section className="mb-24">
        <h2 className="mb-8 text-5xl font-bold">Screenshots</h2>

        <Splide
          options={{
            type: 'loop',
            perPage: 2,
            perMove: 1,
            pagination: true,
            arrows: true,
            autoplay: true,
            interval: 3000,
            autoWidth: true,
            gap: '40px',
            focus: 'center'
          }}
        >
          <SplideSlide>
            <Image
              src="https://images.ui8.net/uploads/preview-4_1636636111505.png"
              alt="asd"
              width={800}
              height={400}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="https://images.ui8.net/uploads/preview-6_1636636106995.png"
              alt="asd"
              width={800}
              height={400}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="https://images.ui8.net/uploads/preview-7_1636636101990.png"
              alt="asd"
              width={800}
              height={400}
            />
          </SplideSlide>
        </Splide>
      </section>

      <section className="mb-24">
        <h2 className="mb-8 text-5xl font-bold">Figma design</h2>
        <p className="mb-4 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ab
          veniam sed similique, odit minima minus commodi recusandae sit
          molestias incidunt tenetur, consequuntur placeat excepturi atque
          consectetur tempore veritatis! Corrupti?
        </p>
        <b>figma...</b>
      </section>
      <section className=""></section>
    </MainLayout>
  )
}
