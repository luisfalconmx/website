import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import {
  HYGRAPH_API_URL,
  HYGRAPH_CONTENT_API_URL,
  HYGRAPH_API_KEY
} from '@/config/env'

export const { getClient: hygraphClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: HYGRAPH_CONTENT_API_URL,
      headers: {
        Authorization: `Bearer ${HYGRAPH_API_KEY}`
      }
    })
  })
})
