// RENDER STRATEGY: SSR (Server Side Rendering)
import CertificationCard from '@/components/CertificationCard'
import Breadcrumb from '@/components/Breadcrumb'
import BlockGradient from '@/components/BlockGradient'
import { Pagination } from '@nextui-org/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'certifications'
}

export default function Certifications() {
  return (
    <>
      <BlockGradient variant="left" />
      <Breadcrumb />
      <div className="mx-auto mb-24 mt-16 max-w-screen-xl px-6 text-center">
        <h1 className="mb-6 block text-4xl font-bold">Certifications</h1>
        <p className="mx-auto block max-w-[70%] text-lg">
          Explore our growing collection of courses on key web design and
          development subjects. An industry expert has written each course,
          helped by members of the Chrome team.
        </p>
      </div>
      <div className="mx-auto mb-8 grid max-w-screen-xl grid-cols-1 gap-4 px-6 md:grid-cols-2">
        {[...new Array(6)].map((_, i) => (
          <CertificationCard key={i} />
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
