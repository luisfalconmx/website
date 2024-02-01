import { useEffect, useState } from 'react'
import Image from 'next/image'
import parse from 'html-react-parser'
import { highlightAll } from 'prismjs'
import hashnodeClient from '@/clients/hashnodeClient'
import { HASHNODE_HOST } from '@/config'
import MainLayout from '@/Layouts/MainLayout'
import {
  GetBlogPostBySlugDocument,
  GetBlogPostBySlugQuery,
  GetBlogPostBySlugQueryVariables,
  GetBlogPostsDocument,
  GetBlogPostsQuery,
  GetBlogPostsQueryVariables
} from '@/generated/hashnode.schema'
import humanDate from '@/utils/humanDate'
import styles from '@/styles/modules/post.module.css'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import 'prismjs/components/prism-typescript.min'
import 'prismjs/components/prism-json.min'
import 'prismjs/components/prism-yaml.min'
import 'prismjs/components/prism-bash.min'
import 'prismjs/components/prism-docker.min'
import 'prismjs/components/prism-jsx.min'
import 'prismjs/components/prism-tsx.min'
import 'prismjs/components/prism-markdown.min'
import 'prismjs/components/prism-graphql.min'
import 'prismjs/components/prism-css.min'
import 'prismjs/components/prism-scss.min'
import 'prismjs/components/prism-git.min'

export const getStaticProps = (async ({ params }) => {
  const client = hashnodeClient()
  const response = await client.query<
    GetBlogPostBySlugQuery,
    GetBlogPostBySlugQueryVariables
  >({
    query: GetBlogPostBySlugDocument,
    variables: {
      hostname: HASHNODE_HOST,
      slug: params?.slug as string
    }
  })

  return {
    props: {
      post: response.data.publication?.post
    },
    revalidate: 60 * 5 // 5 minutes
  }
}) satisfies GetStaticProps

export const getStaticPaths = async () => {
  const client = hashnodeClient()
  const response = await client.query<
    GetBlogPostsQuery,
    GetBlogPostsQueryVariables
  >({
    query: GetBlogPostsDocument,
    variables: {
      hostname: HASHNODE_HOST,
      postCount: 14,
      after: ''
    }
  })

  const paths = response.data.publication?.posts.edges.map((i) => ({
    params: { slug: i.node.slug }
  }))

  return {
    paths: paths || [],
    fallback: 'blocking'
  }
}

export default function Blog({
  post
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isClient, setIsClient] = useState(false)

  const tag = post?.tags ? post?.tags[0].name : ''
  const formatedDate = humanDate(post?.publishedAt)
  const customLabel = `${formatedDate} • ${post?.readTimeInMinutes} min read`

  useEffect(() => {
    setIsClient(true)
    setTimeout(() => {
      highlightAll()
    }, 700)
  }, [])

  return (
    <MainLayout>
      <div className="mb-10">
        <span className="mb-2 block bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-2xl font-black uppercase text-transparent">
          {tag}
        </span>

        <h1 className="mx-auto mb-8 max-w-[850px] text-center text-5xl font-bold leading-tight">
          {post?.title}
        </h1>

        <span className="mx-auto block text-center text-xl text-iron dark:text-smoke">
          {customLabel}
        </span>
      </div>

      <Image
        src={post?.coverImage?.url || ''}
        alt={post?.title || ''}
        width="1100"
        height="550"
        className="mx-auto mb-14 aspect-video w-full rounded-lg"
      />

      {isClient && (
        <>
          <div className={styles.post}>{parse(post?.content.html || '')}</div>
        </>
      )}

      {/* tags */}
      {post?.tags && (
        <ul className="mt-10 flex flex-wrap justify-center">
          {post?.tags.map((tag) => (
            <li
              key={tag.name}
              className="m-2 bg-gradient-to-r from-primary to-secondary px-4 py-2 text-lg font-bold text-white"
            >
              {tag.name}
            </li>
          ))}
        </ul>
      )}
    </MainLayout>
  )
}
