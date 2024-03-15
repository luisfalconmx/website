// RENDER STRATEGY: SSR (Server Side Rendering)
import { Pagination } from '@nextui-org/react'
import Breadcrumb from '@/components/Breadcrumb'
import ProjectCard from '@/components/ProjectCard'
import BlockGradient from '@/components/BlockGradient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'projects'
}

export default function Projects() {
  return (
    <>
      <BlockGradient variant="left" />
      <Breadcrumb />
      <div className="mx-auto mb-24 mt-16 max-w-screen-xl px-6 text-center">
        <h1 className="mb-6 block text-4xl font-bold">Projects</h1>
        <p className="mx-auto block max-w-[70%] text-lg">
          Explore our growing collection of courses on key web design and
          development subjects. An industry expert has written each course,
          helped by members of the Chrome team.
        </p>
      </div>
      <div className="mx-auto mb-6 grid max-w-screen-xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
        {[...new Array(6)].map((_, i) => (
          <ProjectCard
            key={i}
            variant="card"
            slug="123"
            name="TBK Landing Page"
            description="Company website with multilanguage support, dark mode and fully responsive for thebouncingkoala agency"
            image="https://www.luisfalconmx.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ff6zp47ogowku%2F7hJ7RtxKHtwBTCYzTbBxYU%2F09cfd651845768734b2b2e389b170dd7%2Fthebouncingkoala-cover.jpg&w=640&q=75"
            tags={[]}
          />
        ))}
      </div>
      <div className="mx-auto w-fit">
        <Pagination
          showControls
          total={10}
          initialPage={1}
          color="default"
          className="mb-16"
          classNames={{
            wrapper: ' p-12',
            next: 'text-2xl',
            prev: 'text-2xl',
            cursor: 'text-2xl bg-gradient-to-r from-primary to-secondary',
            item: 'text-xl'
          }}
        />
      </div>
    </>
  )
}
