import Image from 'next/image'
import { hashnodeConfig } from '@/config'
import { getMeshSDK } from '../../.mesh'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

export const getStaticProps = (async () => {
  const { LatestBlogPosts } = await getMeshSDK()
  const data = await LatestBlogPosts({
    host: hashnodeConfig.host,
    posts: 15
  })

  const posts =
    data.Hashnode.hn_publication?.posts.edges.map((node) => node) ?? []

  return {
    props: {
      posts
    }
  }
}) satisfies GetStaticProps

export default function Blog({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main>
      <div className="mb-2">Blog</div>

      {posts.map(({ node }) => (
        <div key={node.id}>
          <Image
            src={node.coverImage?.url as string}
            alt={node.title}
            width={1080}
            height={720}
          />
          <div>- {node.title}</div>
          <p>{node.subtitle}</p>
        </div>
      ))}
    </main>
  )
}
