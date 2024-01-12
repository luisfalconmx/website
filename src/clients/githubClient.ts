import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GITHUB_ENDPOINT, GITHUB_TOKEN } from '@/config'

const githubClient = () => {
  const client = new ApolloClient({
    uri: GITHUB_ENDPOINT,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'User-Agent': 'GraphQL Apollo'
    }
  })

  return client
}

export default githubClient
