import { hashnodeClient } from '@/clients/hashnodeClient'
import {
  GetArticlesQuery,
  GetArticlesQueryVariables,
  GetArticlesDocument
} from '@/generated/hashnode.schema'
import type { getArticlesProps } from './getArticles.d'

export const getArticles = async ({
  username,
  page,
  pageSize
}: getArticlesProps) => {
  try {
    const client = hashnodeClient()

    const response = await client.query<
      GetArticlesQuery,
      GetArticlesQueryVariables
    >({
      query: GetArticlesDocument,
      variables: {
        username,
        page,
        pageSize
      }
    })

    return response
  } catch (error) {
    // add sentry here
    console.error(error)
  }
}
