import { hygraphClient } from '@/clients/hygraphClient'
import {
  GetCertificationsQuery,
  GetCertificationsQueryVariables,
  GetCertificationsDocument
} from '@/generated/hygraph.schema'
import type { getCertificationsProps } from './getCertifications.d'

export const getCertifications = async (props: getCertificationsProps) => {
  try {
    const client = hygraphClient()
    const { data } = await client.query<
      GetCertificationsQuery,
      GetCertificationsQueryVariables
    >({
      query: GetCertificationsDocument,
      variables: {
        first: props.limit,
        skip: props.skip
      }
    })

    return data
  } catch (error) {
    console.error(error)
  }
}
