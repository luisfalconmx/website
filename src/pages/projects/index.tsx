import type { GetStaticProps } from 'next'
import MainLayout from '@/Layouts/MainLayout'
import CardProject from '@/components/CardProject'

export const getStaticProps = (async () => {
  return {
    props: {},
    revalidate: 60 * 5 // 5 minutes
  }
}) satisfies GetStaticProps

export default function Projects() {
  return (
    <MainLayout>
      <h1 className="mb-24 text-4xl font-bold">Projects</h1>

      <div className="grid grid-cols-[350px,1fr] gap-x-5">
        <div className="h-full rounded-lg bg-onyx"></div>
        <div className="grid grid-cols-1 gap-y-5">
          <CardProject
            name="Project 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate."
            variant="full"
            tags={['tag1', 'tag2', 'tag3']}
            licence="MIT"
            issues={10}
            forks={10}
            stars={10}
            contributors={10}
          />
          <CardProject
            name="Project 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate."
            variant="full"
            tags={['tag1', 'tag2', 'tag3']}
            licence="MIT"
            issues={10}
            forks={10}
            stars={10}
            contributors={10}
          />
          <CardProject
            name="Project 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate."
            variant="full"
            tags={['tag1', 'tag2', 'tag3']}
            licence="MIT"
            issues={10}
            forks={10}
            stars={10}
            contributors={10}
          />
          <CardProject
            name="Project 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate."
            variant="full"
            tags={['tag1', 'tag2', 'tag3']}
            licence="MIT"
            issues={10}
            forks={10}
            stars={10}
            contributors={10}
          />
          <CardProject
            name="Project 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate."
            variant="full"
            tags={['tag1', 'tag2', 'tag3']}
            licence="MIT"
            issues={10}
            forks={10}
            stars={10}
            contributors={10}
          />
          <CardProject
            name="Project 1"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate."
            variant="full"
            tags={['tag1', 'tag2', 'tag3']}
            licence="MIT"
            issues={10}
            forks={10}
            stars={10}
            contributors={10}
          />
        </div>
      </div>
    </MainLayout>
  )
}
