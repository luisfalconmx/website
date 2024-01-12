import { ApolloClient, InMemoryCache } from '@apollo/client'
import { HASHNODE_ENDPOINT } from '@/config'

const hashnodeClient = () => {
  const client = new ApolloClient({
    uri: HASHNODE_ENDPOINT,
    cache: new InMemoryCache()
  })

  return client
}

export default hashnodeClient
