import { hashnodeClient } from '@/clients/hashnodeClient'
import {
  GetArticleBySlugQuery,
  GetArticleBySlugQueryVariables,
  GetArticleBySlugDocument
} from '@/generated/hashnode.schema'
import type { GetArticleBySlugProps } from './getArticleBySlug.d'

export const getArticleBySlug = async ({
  host,
  slug
}: GetArticleBySlugProps) => {
  try {
    const client = hashnodeClient()

    const response = await client.query<
      GetArticleBySlugQuery,
      GetArticleBySlugQueryVariables
    >({
      query: GetArticleBySlugDocument,
      variables: {
        host,
        slug
      }
    })

    return response
  } catch (error) {
    // add sentry here
    console.error(error)
  }
}
