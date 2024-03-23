import axios from 'axios'
import { DEVTO_API_URL, DEVTO_API_KEY } from '@/config/env'

const devtoClient = () => {
  return axios.create({
    baseURL: DEVTO_API_URL,
    headers: {
      'api-key': DEVTO_API_KEY,
      Accept: 'application/vnd.forem.api-v1+json'
    }
  })
}

export default devtoClient
