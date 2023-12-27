import 'dotenv/config'

const hashnodeConfig = {
  endpoint: process.env.NEXT_PUBLIC_HASHNODE_ENDPOINT || '',
  host: process.env.NEXT_PUBLIC_HASHNODE_HOST || ''
}

export default hashnodeConfig
