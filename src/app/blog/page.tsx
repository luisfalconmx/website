import BlockGradient from '@/components/BlockGradient'
import Breadcrumb from '@/components/Breadcrumb'
import PostCard from '@/components/PostCard'
import { Pagination } from '@nextui-org/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'blog'
}

export default function Blog() {
  return (
    <>
      <BlockGradient variant="right" />
      <Breadcrumb />

      <div className="absolute h-[1px] max-w-screen-xl overflow-hidden">
        <h1 className="mb-6 block text-4xl font-bold">Blog</h1>
        <p className="mx-auto block max-w-[70%] text-lg">
          Explore our growing collection of courses on key web design and
          development subjects. An industry expert has written each course,
          helped by members of the Chrome team.
        </p>
      </div>

      <section className="mx-auto mb-16 mt-8 max-w-screen-xl px-8">
        <PostCard
          title="How to use Next.js Image Component"
          description="Next.js Image Component is a new feature that allows you to optimize images on your website. Learn how to use it in this article."
          link="/blog/how-to-use-nextjs-image-component"
          image="https://images.pexels.com/photos/7664624/pexels-photo-7664624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          date={new Date()}
          readingTime={5}
          tag="Next.js"
          variant="jumbo"
        />
      </section>

      <section className="mx-auto mb-16 grid max-w-screen-xl grid-cols-1 gap-4 px-2 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:px-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <PostCard
            key={index}
            title="How to use Next.js Image Component"
            description="Next.js Image Component is a new feature that allows you to optimize images on your website. Learn how to use it in this article."
            link="/blog/how-to-use-nextjs-image-component"
            image="https://images.pexels.com/photos/7709019/pexels-photo-7709019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            date={new Date()}
            readingTime={5}
            tag="Next.js"
            variant="default"
          />
        ))}
      </section>

      <section className="mx-auto mb-16 grid max-w-screen-xl grid-cols-1 gap-x-4 px-2 md:grid-cols-2 md:px-4 lg:px-6">
        {Array.from({ length: 2 }).map((_, index) => (
          <PostCard
            key={index}
            title="How to use Next.js Image Component"
            description="Next.js Image Component is a new feature that allows you to optimize images on your website. Learn how to use it in this article."
            link="/blog/how-to-use-nextjs-image-component"
            image="https://images.pexels.com/photos/7672881/pexels-photo-7672881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            date={new Date()}
            readingTime={5}
            tag="Next.js"
            variant="square"
          />
        ))}
      </section>

      <section className="mx-auto mb-16 grid max-w-screen-xl grid-cols-1 gap-y-8 px-6 md:grid-cols-2 md:gap-x-3 md:px-4 lg:grid-cols-1 lg:gap-x-0 lg:px-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <PostCard
            key={index}
            title="How to use Next.js Image Component"
            description="Next.js Image Component is a new feature that allows you to optimize images on your website. Learn how to use it in this article."
            link="/blog/how-to-use-nextjs-image-component"
            image="https://images.pexels.com/photos/7662615/pexels-photo-7662615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            date={new Date()}
            readingTime={5}
            tag="Next.js"
            variant="track"
          />
        ))}
      </section>

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
