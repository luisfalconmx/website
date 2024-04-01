import 'dotenv/config' // needed for some files to use process.env

const registerEnv = (value: string) => {
  return process.env[value] || ''
}

// SITE
export const SITE_NAME = registerEnv('SITE_NAME')
export const SITE_URL = registerEnv('SITE_URL')
export const SITE_STORAGE_KEY = registerEnv('SITE_STORAGE_KEY')
export const SITE_BUNDLE_ANALYZER = registerEnv('SITE_BUNDLE_ANALYZER')

// HYGRAPH
export const HYGRAPH_GRAPHQL_ENDPOINT = registerEnv('HYGRAPH_GRAPHQL_ENDPOINT')
export const HYGRAPH_SCHEMA_URL = registerEnv('HYGRAPH_SCHEMA_URL')
export const HYGRAPH_ACCESS_TOKEN = registerEnv('HYGRAPH_ACCESS_TOKEN')

// HASHNODE
export const HASHNODE_GRAPHQL_ENDPOINT = registerEnv(
  'HASHNODE_GRAPHQL_ENDPOINT'
)
export const HASHNODE_ACCESS_TOKEN = registerEnv('HASHNODE_ACCESS_TOKEN')
export const HASHNODE_USERNAME = registerEnv('HASHNODE_USERNAME')
export const HASHNODE_HOST = registerEnv('HASHNODE_HOST')
