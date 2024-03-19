import Image from 'next/image'
import BlockGradient from '@/components/BlockGradient'
import Breadcrumb from '@/components/Breadcrumb'
import { Chip } from '@nextui-org/react'
import parse from 'html-react-parser'
import styles from './post.module.css'
import getArticle from '@/api/devto/getArticle'
import getComments from '@/api/devto/getComments'
import humanDate from '@/utils/humanDate'
import ComentaryCard from '@/components/CommentaryCard'
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
      <div className="mx-auto grid max-w-screen-lg">
        <main className="px-6 pb-2 lg:pr-8">
          <Breadcrumb />
          <div className="mb-2 mt-12 box-content px-4 md:mb-5 lg:pl-0 lg:pr-4">
            <div className="mb-4 flex flex-col md:flex-row md:items-center">
              <Chip
                size="lg"
                className="mr-3 bg-gradient-to-r from-primary to-secondary uppercase"
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

          {post.tags.length > 0 && post.tags && (
            <>
              <div className="mb-4 text-2xl font-bold">Tags</div>
              <ul className="mb-16 mt-4 flex flex-wrap">
                {post.tags.map((tag) => (
                  <Chip
                    key={tag}
                    size="lg"
                    variant="faded"
                    className="mb-1 mr-1 uppercase"
                  >
                    {tag}
                  </Chip>
                ))}
              </ul>
            </>
          )}

          {comments.length > 0 && (
            <div className="mb-12">
              <div className="mb-4 text-2xl font-bold">Comments</div>
              <ul>
                {comments.map((comment) => (
                  <li key={comment.id_code} className="mb-8">
                    <ComentaryCard
                      profile={{
                        image: comment.user.profile_image,
                        title: comment.user.username,
                        date: comment.created_at
                      }}
                      content={comment.body_html}
                    />
                    {comment.children.length > 0 && (
                      <ul>
                        {comment.children.map((child) => (
                          <li key={child.id_code} className="ml-16 mt-2">
                            <ComentaryCard
                              variant="reply"
                              profile={{
                                image: child.user.profile_image,
                                title: child.user.name,
                                date: child.created_at
                              }}
                              content={child.body_html}
                            />
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>
      </div>
    </>
  )
}
