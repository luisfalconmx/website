import { hygraphClient } from '@/clients/hygraphClient'
import {
  SearchCertificationsByTermQuery,
  SearchCertificationsByTermDocument,
  SearchCertificationsByTermQueryVariables
} from '@/generated/hygraph.schema'
import type { SearchCertificationsByTermProps } from './searchCertificationsByTerm.d'

export const searchCertificationsByTerm = async ({
  first,
  skip,
  term
}: SearchCertificationsByTermProps) => {
  try {
    const client = hygraphClient()
    const { data } = await client.query<
      SearchCertificationsByTermQuery,
      SearchCertificationsByTermQueryVariables
    >({
      query: SearchCertificationsByTermDocument,
      variables: {
        first,
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
