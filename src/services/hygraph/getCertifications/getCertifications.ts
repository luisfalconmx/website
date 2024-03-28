import type {} from './getCertifications.d'
import { hygraphClient } from '@/clients/hygraphClient'
import {
  GetCertificationsQuery,
  GetCertificationsQueryVariables,
  GetCertificationsDocument
} from '@/generated/hygraph.schema'

export const getCertifications = async () => {
  try {
    const client = hygraphClient()
    const { data } = await client.query<
      GetCertificationsQuery,
      GetCertificationsQueryVariables
    >({
      query: GetCertificationsDocument
    })

    return data.certifications
  } catch (error) {
    console.error(error)
  }
}
