import { hygraphClient } from '@/clients/hygraphClient'
import {
  GetProjectBySlugQuery,
  GetProjectBySlugQueryVariables,
  GetProjectBySlugDocument
} from '@/generated/hygraph.schema'
import type { GetProjectBySlugProps } from './getProjectBySlug.d'

export const getProjectBySlug = async ({ slug }: GetProjectBySlugProps) => {
  try {
    const client = await hygraphClient()
    const { data } = await client.query<
      GetProjectBySlugQuery,
      GetProjectBySlugQueryVariables
    >({
      query: GetProjectBySlugDocument,
      variables: {
        slug
      }
    })

    return data
  } catch (error) {
    // add sentry here
    console.log(error)
  }
}
