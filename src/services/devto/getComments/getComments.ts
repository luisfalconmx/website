import devtoClient from '@/clients/devtoClient'
import type { getCommentsProps, getCommentsResponse } from './getComments.d'

const getComments = async ({ id }: getCommentsProps) => {
  const client = devtoClient()
  const endpoint = `/comments?a_id=${id}`

  const response = await client.get(endpoint)
  return response as getCommentsResponse
}

export default getComments
