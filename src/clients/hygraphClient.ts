import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import { HYGRAPH_SCHEMA_URL, HYGRAPH_ACCESS_TOKEN } from '@/config/env'

export const { getClient: hygraphClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: HYGRAPH_SCHEMA_URL,
      fetchOptions: {
        next: {
          // revalidate in a day
          revalidate: 60 * 60 * 24
        }
      },
      headers: {
        Authorization: `Bearer ${HYGRAPH_ACCESS_TOKEN}`
      }
    })
  })
})
