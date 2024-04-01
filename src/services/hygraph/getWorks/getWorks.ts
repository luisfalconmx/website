import { hygraphClient } from '@/clients/hygraphClient'
import { GetWorksQuery, GetWorksDocument } from '@/generated/hygraph.schema'

export const getWorks = async () => {
  try {
    const client = hygraphClient()

    const { data } = await client.query<GetWorksQuery>({
      query: GetWorksDocument
    })

    return data
  } catch (error) {
    console.error(error)
  }
}
