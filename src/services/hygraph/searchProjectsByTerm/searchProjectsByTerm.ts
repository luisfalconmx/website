import { hygraphClient } from '@/clients/hygraphClient'
import {
  SearchProjectsByTermQuery,
  SearchProjectsByTermQueryVariables,
  SearchProjectsByTermDocument
} from '@/generated/hygraph.schema'
import type { SearchProjectsByTermProps } from './searchProjectsByTerm.d'

export const searchProjectsByTerm = async ({
  first,
  skip,
  term
}: SearchProjectsByTermProps) => {
  try {
    const client = await hygraphClient()
    const { data } = await client.query<
      SearchProjectsByTermQuery,
      SearchProjectsByTermQueryVariables
    >({
      query: SearchProjectsByTermDocument,
      variables: {
        limit: first,
        skip,
        term
      }
    })

    return data
  } catch (error) {
    // add sentry here
    console.error(error)
  }
}
