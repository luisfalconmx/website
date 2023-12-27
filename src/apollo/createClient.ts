import { ApolloClient, InMemoryCache } from '@apollo/client'

const createClient = (uri: string) => {
  const client = new ApolloClient({
    uri,
    cache: new InMemoryCache()
  })

  return client
}

export default createClient
