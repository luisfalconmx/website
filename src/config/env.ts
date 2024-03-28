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
export const HYGRAPH_API_URL = registerEnv('HYGRAPH_API_URL')
export const HYGRAPH_CONTENT_API_URL = registerEnv('HYGRAPH_CONTENT_API_URL')
export const HYGRAPH_API_KEY = registerEnv('HYGRAPH_API_KEY')

// DEVTO
export const DEVTO_USERNAME = registerEnv('DEVTO_USERNAME')
export const DEVTO_API_URL = registerEnv('DEVTO_API_URL')
export const DEVTO_API_KEY = registerEnv('DEVTO_API_KEY')
