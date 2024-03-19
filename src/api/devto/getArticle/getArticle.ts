import devtoClient from '@/clients/devtoClient'
import type { getArticleProps, getArticleResponse } from './getArticle.d'

const getArticle = async ({ slug }: getArticleProps) => {
  const client = devtoClient()
  const endpoint = `articles/luisfalconmx/${slug}`
  const response = await client.get(endpoint)
  return response as getArticleResponse
}

export default getArticle
