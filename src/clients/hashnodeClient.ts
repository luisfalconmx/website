import { ApolloClient, InMemoryCache } from '@apollo/client'

const hashnodeClient = () => {
  const client = new ApolloClient({
    uri: 'https://gql.hashnode.com/',
    cache: new InMemoryCache()
  })

  return client
}

export default hashnodeClient
