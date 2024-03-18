import type { Metadata } from 'next'
import Image from 'next/image'
import BlockGradient from '@/components/BlockGradient'
import Breadcrumb from '@/components/Breadcrumb'
import { Chip } from '@nextui-org/react'
import {
  GetBlogPostBySlugQuery,
  GetBlogPostBySlugQueryVariables,
  GetBlogPostBySlugDocument
} from '@/generated/hashnode.schema'
import parse from 'html-react-parser'
import styles from './post.module.css'
import cn from '@/utils/cn'
import { BookmarkIcon } from '@heroicons/react/24/solid'
import { User } from '@nextui-org/react'
import profilePicture from '@/assets/images/luisfalconmx.jpg'

export const metadata: Metadata = {
  title: 'post'
}

export default async function Post({ params }: { params: { slug: string } }) {
  // const client = hashnodeClient()
  // const response = await client.query<
  //   GetBlogPostBySlugQuery,
  //   GetBlogPostBySlugQueryVariables
  // >({
  //   query: GetBlogPostBySlugDocument,
  //   variables: {
  //     hostname: HASHNODE_HOST,
  //     slug: params?.slug as string
  //   }
  // })

  // const post = response.data.publication?.post

  return (
    <>
      <BlockGradient variant="right" />
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 lg:grid-cols-[1fr_350px]">
        <main className="px-6 pb-2 lg:pr-8">
          <Breadcrumb />
          <div className="mb-2 mt-12 box-content px-4 md:mb-5 lg:pl-0 lg:pr-4">
            <div className="mb-4 flex flex-col md:flex-row md:items-center">
              <Chip
                size="lg"
                className="mr-3 bg-gradient-to-r from-primary to-secondary"
              >
                {/* {post?.tags ? post?.tags[0].name : ''} */}
              </Chip>

              <span className="block text-xl text-smoke">
                March 28, 2024 ° 18 min read
              </span>
            </div>

            <h1 className="mx-auto mb-8 text-3xl font-bold leading-tight md:text-5xl">
              {/* {post?.title} */}
            </h1>

            {/* <Image
              src={post?.coverImage?.url || ''}
              alt={post?.title || ''}
              width="912"
              height="550"
              className="aspect-video w-full rounded-lg object-cover"
            /> */}
          </div>

          {/* <div className={styles.post}>{parse(post?.content.html || '')}</div> */}

          {/* {post?.tags && (
            <ul className="mb-12 mt-10 flex flex-wrap">
              {post?.tags.map((tag) => (
                <Chip key={tag.name} size="lg" variant="faded" className="mr-1">
                  {tag.name}
                </Chip>
              ))}
            </ul>
          )} */}
        </main>
        <aside className="row-span-2 block w-full border-divider px-5 py-12 lg:border-l">
          <User
            name="luisfalconmx"
            description="Frontend Developer"
            avatarProps={{
              size: 'lg',
              src: profilePicture.src
            }}
            classNames={{
              base: 'mb-12',
              name: 'text-xl font-bold',
              description: 'text-base'
            }}
          />

          {/* {post?.features.tableOfContents.isEnabled && (
            <>
              <strong className="mb-6 block text-2xl">Table of contents</strong>
              <ul>
                {post.features.tableOfContents.items.map((item) => (
                  <li
                    key={item.title.toLowerCase().replace(' ', '-')}
                    className={cn('mb-2 hover:text-white', {
                      'font-bold text-iron': item.level === 2,
                      'ml-6 text-iron': item.level === 3
                    })}
                  >
                    <a
                      href={`#heading-${item.title
                        .toLowerCase()
                        .replace(/ /g, '-')}`}
                      className="flex items-start text-lg"
                    >
                      <BookmarkIcon className="mr-2 mt-1 block h-[18px] min-h-[18px] w-[18px] min-w-[18px]" />
                      <span className="block">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )} */}
        </aside>
      </div>
    </>
  )
}
