import Image from 'next/image'
import BlockGradient from '@/components/BlockGradient'
import Breadcrumb from '@/components/Breadcrumb'
import { Card, CardHeader, CardBody, Avatar, Chip } from '@nextui-org/react'
import parse from 'html-react-parser'
import styles from './post.module.css'
import { BookmarkIcon } from '@heroicons/react/24/solid'
import { User } from '@nextui-org/react'
import profilePicture from '@/assets/images/luisfalconmx.jpg'
import getArticle from '@/api/devto/getArticle'
import getComments from '@/api/devto/getComments'
import humanDate from '@/utils/humanDate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'post'
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postResponse = await getArticle({ slug: params.slug })
  const commentsResponse = await getComments({ id: postResponse.data.id })

  const post = postResponse.data
  const comments = commentsResponse.data

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
                {post.tags.length > 0 ? post.tags[0] : ''}
              </Chip>

              <span className="block text-xl text-smoke">
                {humanDate(new Date(post.published_at))} °{' '}
                {post.reading_time_minutes} min read
              </span>
            </div>

            <h1 className="mx-auto mb-8 text-3xl font-bold leading-tight md:text-5xl">
              {post.title}
            </h1>

            <Image
              src={post.cover_image || ''}
              alt={post.title || ''}
              width="912"
              height="550"
              className="aspect-video w-full rounded-lg object-cover"
            />
          </div>

          <div className={styles.post}>{parse(post.body_html || '')}</div>

          {post.tags && (
            <ul className="mb-16 mt-4 flex flex-wrap">
              {post.tags.map((tag) => (
                <Chip
                  key={tag}
                  size="lg"
                  variant="faded"
                  className="mr-1 uppercase"
                >
                  {tag}
                </Chip>
              ))}
            </ul>
          )}

          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Comments</h2>
            <ul>
              {comments.map((comment) => (
                <li key={comment.id_code} className="mb-8">
                  <Card className="px-4 py-3">
                    <CardHeader className="justify-between">
                      <div className="flex gap-5">
                        <Avatar
                          isBordered
                          radius="full"
                          size="lg"
                          src={comment.user.profile_image_90}
                        />
                        <div className="flex flex-col items-start justify-center gap-1">
                          <h4 className="text-base font-semibold leading-none text-default-600">
                            {comment.user.name}
                          </h4>
                          <h5 className="text-base tracking-tight text-default-400">
                            @{comment.user.username}
                          </h5>
                        </div>
                      </div>
                    </CardHeader>
                    <CardBody className="px-3 text-lg text-default-400">
                      {parse(comment.body_html)}
                    </CardBody>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </main>

        <aside className="row-span-2 block w-full border-divider px-5 py-12 lg:border-l">
          <User
            name={post.user.name}
            description={`@${post.user.username}`}
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

          <div>
            <div className="flex"></div>
          </div>
        </aside>
      </div>
    </>
  )
}
