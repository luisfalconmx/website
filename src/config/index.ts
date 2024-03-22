import 'dotenv/config'

// SITE
export const BASE_URL = process.env.BASE_URL || ''

// DEV TO
export const DEVTO_USERNAME = process.env.DEVTO_USERNAME || ''
export const DEVTO_API_KEY = process.env.DEVTO_API_KEY || ''
export const DEVTO_API_ENDPOINT = process.env.DEVTO_API_ENDPOINT || ''

// CONTENTFUL
export const CONTENTFUL_ENDPOINT = process.env.CONTENTFUL_ENDPOINT || ''
export const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID || ''
export const CONTENTFUL_DELIVERY_TOKEN =
  process.env.CONTENTFUL_DELIVERY_TOKEN || ''
export const CONTENTFUL_PREVIEW_TOKEN =
  process.env.CONTENTFUL_PREVIEW_TOKEN || ''
