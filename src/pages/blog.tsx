import Image from 'next/image'
import { hashnodeConfig } from '@/config'
import createClient from '@/apollo/createClient'
import {
  GetBlogPostsDocument,
  GetBlogPostsQuery,
  GetBlogPostsQueryVariables
} from '@/generated/graphql'
import type { Post } from '@/generated/schema'
import type { GetStaticProps, NextPage } from 'next'

interface Props {
  posts: Post[]
}

export const getStaticProps: GetStaticProps = async () => {
  const { endpoint } = hashnodeConfig

  const client = createClient(
    process.env.NEXT_PUBLIC_HASHNODE_ENDPOINT as string
  )

  const { data } = await client.query<
    GetBlogPostsQuery,
    GetBlogPostsQueryVariables
  >({
    query: GetBlogPostsDocument
  })

  const posts = data.publication?.posts.edges.map((edge) => edge.node) ?? []

  return {
    props: {
      posts
    }
  }
}

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <main>
      <div className="mb-2">Blog</div>

      {posts.map((post) => (
        <div key={post.id}>
          <Image
            src={post.coverImage?.url as string}
            alt={post.title}
            width={1080}
            height={720}
          />
          <div>
            - {post.title} : {post.slug}
          </div>
        </div>
      ))}
    </main>
  )
}

export default Blog
