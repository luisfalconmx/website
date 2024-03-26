import type { RequestInit } from 'next/dist/server/web/spec-extension/request'
import type { restClientProps } from './restClient.d'

// Rest Client used for fetching data from the server to API
const restClient = async ({
  url,
  headers,
  mode,
  revalidateTime
}: restClientProps) => {
  let fetchOptions: RequestInit = {}

  fetchOptions.headers = {
    'Content-Type': 'application/json',
    ...headers
  }

  if (mode === 'ssg') {
    fetchOptions.cache = 'force-cache'
  }

  if (mode === 'ssr') {
    fetchOptions.cache = 'no-store'
  }

  if (mode === 'isr') {
    if (!revalidateTime) {
      throw new Error('revalidateTime is required for ISR')
    }

    fetchOptions.next = {
      revalidate: revalidateTime
    }
  }

  const response = await fetch(url, fetchOptions)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}

export default restClient
