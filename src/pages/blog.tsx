import { hashnodeConfig } from '@/config'
import createClient from '@/apollo/createClient'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

const getStaticProps = (async () => {
  const { endpoint, host } = hashnodeConfig
  const client = createClient(endpoint)
  const data: unknown = {}

  return {
    props: {
      data
    }
  }
}) satisfies GetStaticProps<{ data: unknown }>

export default function Blog({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  return <div>Blog</div>
}
