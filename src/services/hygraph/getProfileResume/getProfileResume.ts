import { hygraphClient } from '@/clients/hygraphClient'
import {
  GetProfileResumeQuery,
  GetProfileResumeDocument
} from '@/generated/hygraph.schema'

export const getProfileResume = async () => {
  try {
    const client = hygraphClient()
    const response = await client.query<GetProfileResumeQuery>({
      query: GetProfileResumeDocument
    })

    return response
  } catch (error) {
    // add sentry here
    console.error(error)
  }
}
