import { DEVTO_API_URL, DEVTO_API_KEY } from '@/config/env'

const devtoClient = () => {
  const baseUrl = DEVTO_API_URL

  const headers = {
    'api-key': DEVTO_API_KEY,
    Accept: 'application/vnd.forem.api-v1+json'
  }

  return {
    baseUrl,
    headers
  }
}

export default devtoClient
