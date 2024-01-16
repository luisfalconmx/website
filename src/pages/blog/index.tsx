import { useState, useEffect } from 'react'
import hashnodeClient from '@/clients/hashnodeClient'
import { SplideSlide } from '@splidejs/react-splide'
import Button from '@/components/Button'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import CardPost from '@/components/CardPost'
import Carousel from '@/components/Carousel'
import { HASHNODE_HOST } from '@/config'
import {
  GetBlogPostsDocument,
  GetBlogPostsQuery,
  GetBlogPostsQueryVariables
} from '@/generated/hashnode.schema'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import '@splidejs/react-splide/css'

export const getStaticProps = (async () => {
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

  return {
    props: {
      page: response.data.publication?.posts.pageInfo,
      posts: response.data.publication?.posts.edges || []
    },
    revalidate: 60 * 5 // 5 minutes
  }
}) satisfies GetStaticProps

export default function Blog({
  page,
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [lastCursor, setLastCursor] = useState<string>('')
  const [extraPostsList, setExtraPostsList] = useState<typeof posts>([])

  const getMorePosts = async () => {
    const client = hashnodeClient()
    const response = await client.query<
      GetBlogPostsQuery,
      GetBlogPostsQueryVariables
    >({
      query: GetBlogPostsDocument,
      variables: {
        hostname: HASHNODE_HOST,
        postCount: 3,
        after: lastCursor
      }
    })

    setLastCursor(response.data.publication?.posts.pageInfo.endCursor || '')
    setExtraPostsList((prev) => [
      ...prev,
      ...(response.data.publication?.posts.edges || [])
    ])
  }

  useEffect(() => {
    const lastCursor = page?.endCursor
    setLastCursor(lastCursor || '')
  }, [page])

  return (
    <main className="mx-auto my-24 max-w-[1200px]">
      <Carousel className="mb-16">
        {posts.slice(0, 3).map((i) => (
          <SplideSlide key={i.node.id}>
            <CardPost
              variant="jumbo"
              className=""
              title={i.node.title}
              description={i.node.brief || ''}
              image={i.node.coverImage?.url || ''}
              link={`blog/${i.node.slug}`}
              tag={
                i.node.tags?.map((tag, index) =>
                  index === 0 ? tag.name : ''
                )[0]
              }
              author={{
                name: i.node.author.name,
                label: i.node.author.username,
                image: i.node.author.profilePicture || ''
              }}
              date={i.node.publishedAt}
              readingTime={i.node.readTimeInMinutes}
            />
          </SplideSlide>
        ))}
      </Carousel>

      <div className="mb-16 grid grid-cols-3 gap-4">
        {posts.slice(3, 9).map((i) => (
          <CardPost
            variant="default"
            className=""
            key={i.node.id}
            title={i.node.title}
            description={i.node.brief || ''}
            image={i.node.coverImage?.url || ''}
            link={`blog/${i.node.slug}`}
            tag={
              i.node.tags?.map((tag, index) => (index === 0 ? tag.name : ''))[0]
            }
            author={{
              name: i.node.author.name,
              label: i.node.author.username,
              image: i.node.author.profilePicture || ''
            }}
            date={i.node.publishedAt}
            readingTime={i.node.readTimeInMinutes}
          />
        ))}
      </div>

      <div className="mb-16 grid grid-cols-2 gap-x-4">
        {posts.slice(9, 11).map((i) => (
          <CardPost
            variant="square"
            className=""
            key={i.node.id}
            title={i.node.title}
            description={i.node.brief || ''}
            image={i.node.coverImage?.url || ''}
            link={`blog/${i.node.slug}`}
            tag={
              i.node.tags?.map((tag, index) => (index === 0 ? tag.name : ''))[0]
            }
            author={{
              name: i.node.author.name,
              label: i.node.author.username,
              image: i.node.author.profilePicture || ''
            }}
            date={i.node.publishedAt}
            readingTime={i.node.readTimeInMinutes}
          />
        ))}
      </div>

      <div className="mb-16 grid grid-cols-1 gap-y-8">
        {posts.slice(11).map((i) => (
          <CardPost
            variant="track"
            className=""
            key={i.node.id}
            title={i.node.title}
            description={i.node.brief || ''}
            image={i.node.coverImage?.url || ''}
            link={`blog/${i.node.slug}`}
            tag={
              i.node.tags?.map((tag, index) => (index === 0 ? tag.name : ''))[0]
            }
            author={{
              name: i.node.author.name,
              label: i.node.author.username,
              image: i.node.author.profilePicture || ''
            }}
            date={i.node.publishedAt}
            readingTime={i.node.readTimeInMinutes}
          />
        ))}

        {extraPostsList.map((i) => (
          <CardPost
            variant="track"
            className=""
            key={i.node.id}
            title={i.node.title}
            description={i.node.brief || ''}
            image={i.node.coverImage?.url || ''}
            link={`blog/${i.node.slug}`}
            tag={
              i.node.tags?.map((tag, index) => (index === 0 ? tag.name : ''))[0]
            }
            author={{
              name: i.node.author.name,
              label: i.node.author.username,
              image: i.node.author.profilePicture || ''
            }}
            date={i.node.publishedAt}
            readingTime={i.node.readTimeInMinutes}
          />
        ))}
      </div>

      {page?.hasNextPage && (
        <div className="flex justify-center">
          <Button
            variant="filled"
            onClick={getMorePosts}
            className="flex items-center"
          >
            <ArrowPathIcon className="mr-2 h-6 w-6" />
            Load More
          </Button>
        </div>
      )}
    </main>
  )
}
