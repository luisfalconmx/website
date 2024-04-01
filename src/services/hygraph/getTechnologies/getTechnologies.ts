import { hygraphClient } from '@/clients/hygraphClient'
import {
  GetTechnologiesQuery,
  GetTechnologiesQueryVariables,
  GetTechnologiesDocument
} from '@/generated/hygraph.schema'

export const getTechnologies = async () => {
  try {
    const client = hygraphClient()

    const { data } = await client.query<
      GetTechnologiesQuery,
      GetTechnologiesQueryVariables
    >({
      query: GetTechnologiesDocument
    })

    return data
  } catch (error) {
    // add sentry here
    console.error(error)
  }
}
