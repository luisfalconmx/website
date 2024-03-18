import devtoClient from '@/clients/devtoClient'
import type { getArticlesProps, getArticlesResponse } from './getArticles.d'

const getArticles = async ({ page = 1, per_page = 10 }: getArticlesProps) => {
  const client = devtoClient()
  const endpoint = `articles/me/all?page=${page}&per_page=${per_page}`

  const response = await client.get(endpoint)
  return response as getArticlesResponse
}

export default getArticles
