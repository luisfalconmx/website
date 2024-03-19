import axios from 'axios'
import { DEVTO_API_KEY, DEVTO_API_ENDPOINT } from '@/config'

const devtoClient = () => {
  return axios.create({
    baseURL: DEVTO_API_ENDPOINT,
    headers: {
      'api-key': DEVTO_API_KEY,
      Accept: 'application/vnd.forem.api-v1+json'
    }
  })
}

export default devtoClient
