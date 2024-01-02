import 'dotenv/config'

const githubConfig = {
  endpoint: process.env.NEXT_PUBLIC_GITHUB_ENDPOINT || '',
  token: process.env.NEXT_PUBLIC_GITHUB_TOKEN || ''
}

export default githubConfig
