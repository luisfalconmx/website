import { hygraphClient } from '@/clients/hygraphClient'
import {
  GetProjectsQuery,
  GetProjectsQueryVariables,
  GetProjectsDocument
} from '@/generated/hygraph.schema'
import type { GetProjectsProps } from './getProjects.d'

export const getProjects = async ({ limit, skip }: GetProjectsProps) => {
  try {
    const client = await hygraphClient()
    const { data } = await client.query<
      GetProjectsQuery,
      GetProjectsQueryVariables
    >({
      query: GetProjectsDocument,
      variables: {
        limit,
        skip
      }
    })

    return data
  } catch (error) {
    // add sentry here
    console.log(error)
  }
}
