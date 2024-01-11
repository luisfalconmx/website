import { ApolloClient, InMemoryCache } from '@apollo/client'
import dotenv from 'dotenv'
dotenv.config()

const githubClient = () => {
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      'User-Agent': 'GraphQL Apollo'
    }
  })

  return client
}

export default githubClient
