import Image from 'next/image'
import hashnodeClient from '@/clients/hashnodeClient'
import { HASHNODE_HOST } from '@/config'
import {
  GetBlogPostDocument,
  GetBlogPostQuery,
  GetBlogPostQueryVariables,
  LatestBlogPostsDocument,
  LatestBlogPostsQuery,
  LatestBlogPostsQueryVariables
} from '@/generated/hashnode.schema'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps = (async ({ params }) => {
  const client = hashnodeClient()
  const response = await client.query<
    GetBlogPostQuery,
    GetBlogPostQueryVariables
  >({
    query: GetBlogPostDocument,
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
    LatestBlogPostsQuery,
    LatestBlogPostsQueryVariables
  >({
    query: LatestBlogPostsDocument,
    variables: {
      hostname: HASHNODE_HOST,
      posts: 14
    }
  })

  const paths = response.data.publication?.posts.edges.map((i) => ({
    params: { slug: i.node.slug }
  }))

  return {
    paths: paths || [],
    fallback: false
  }
}

export default function Blog({
  post
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="mx-auto my-24 max-w-[1100px]">
      <Image
        src={post?.coverImage?.url || ''}
        alt={post?.title || ''}
        width="500"
        height="250"
      />
      <h1>{post?.title}</h1>
      <p>{post?.content.text}</p>
    </main>
  )
}
