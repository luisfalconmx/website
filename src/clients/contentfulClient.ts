import { ApolloClient, InMemoryCache } from '@apollo/client'
import {
  CONTENTFUL_ENDPOINT,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_TOKEN
} from '@/config'

const contentfulClient = () => {
  const client = new ApolloClient({
    uri: `${CONTENTFUL_ENDPOINT}/${CONTENTFUL_SPACE_ID}?access_token=${CONTENTFUL_DELIVERY_TOKEN}`,
    cache: new InMemoryCache()
  })

  return client
}

export default contentfulClient
