import hashnodeClient from '@/clients/hashnodeClient'
import CardPost from '@/components/CardPost'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import {
  LatestBlogPostsDocument,
  LatestBlogPostsQuery,
  LatestBlogPostsQueryVariables
} from '@/generated/hashnode.schema'

export const getServerSideProps = (async () => {
  const client = hashnodeClient()
  const response = await client.query<
    LatestBlogPostsQuery,
    LatestBlogPostsQueryVariables
  >({
    query: LatestBlogPostsDocument,
    variables: {
      host: 'lo-victoria.com',
      posts: 12
    }
  })

  return {
    props: {
      posts: response.data.publication?.posts.edges || []
    }
  }
}) satisfies GetServerSideProps

export default function Blog({
  posts
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className="mx-auto my-24 max-w-[1100px]">
      <CardPost
        variant="jumbo"
        className="mb-24"
        key={posts[0].node.id}
        title={posts[0].node.title}
        description={posts[0].node.content.text || ''}
        image={posts[0].node.coverImage?.url || ''}
        tag={
          posts[0].node.tags?.map((tag, index) =>
            index === 0 ? tag.name : ''
          )[0]
        }
        author={{
          name: posts[0].node.author.name,
          label: posts[0].node.author.username,
          image: posts[0].node.author.profilePicture || ''
        }}
        date={posts[0].node.publishedAt}
        readingTime={posts[0].node.readTimeInMinutes}
      />

      <div className="mb-24 grid grid-cols-3 gap-x-7 gap-y-10">
        {posts.slice(1, 6).map(({ node }, index) => (
          <CardPost
            variant={index === 0 ? 'square' : 'default'}
            className={index === 0 ? 'col-span-2' : ''}
            key={node.id}
            title={node.title}
            description={node.content.text || ''}
            image={node.coverImage?.url || ''}
            tag={
              node.tags?.map((tag, index) => (index === 0 ? tag.name : ''))[0]
            }
            author={{
              name: node.author.name,
              label: node.author.username,
              image: node.author.profilePicture || ''
            }}
            date={node.publishedAt}
            readingTime={node.readTimeInMinutes}
          />
        ))}
      </div>

      <div className="mb-24 grid grid-cols-3 gap-3">
        {posts.slice(6, 12).map(({ node }) => (
          <CardPost
            variant="imageless"
            key={node.id}
            title={node.title}
            description={node.content.text || ''}
            image={node.coverImage?.url || ''}
            tag={
              node.tags?.map((tag, index) => (index === 0 ? tag.name : ''))[0]
            }
            author={{
              name: node.author.name,
              label: node.author.username,
              image: node.author.profilePicture || ''
            }}
            date={node.publishedAt}
            readingTime={node.readTimeInMinutes}
          />
        ))}
      </div>

      <CardPost
        variant="box"
        className="mb-24"
        key={posts[12].node.id}
        title={posts[12].node.title}
        description={posts[12].node.content.text || ''}
        image={posts[12].node.coverImage?.url || ''}
        tag={
          posts[12].node.tags?.map((tag, index) =>
            index === 0 ? tag.name : ''
          )[0]
        }
        author={{
          name: posts[12].node.author.name,
          label: posts[12].node.author.username,
          image: posts[12].node.author.profilePicture || ''
        }}
        date={posts[12].node.publishedAt}
        readingTime={posts[12].node.readTimeInMinutes}
      />

      <div className="grid grid-cols-1 gap-y-7">
        {posts.slice(13, 20).map(({ node }) => (
          <CardPost
            variant="track"
            key={node.id}
            title={node.title}
            description={node.content.text || ''}
            image={node.coverImage?.url || ''}
            tag={
              node.tags?.map((tag, index) => (index === 0 ? tag.name : ''))[0]
            }
            author={{
              name: node.author.name,
              label: node.author.username,
              image: node.author.profilePicture || ''
            }}
            date={node.publishedAt}
            readingTime={node.readTimeInMinutes}
          />
        ))}
      </div>
    </main>
  )
}
