import 'dotenv/config'

export const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || ''
export const GITHUB_ENDPOINT = process.env.NEXT_PUBLIC_GITHUB_ENDPOINT || ''
export const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN || ''

export const HASHNODE_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_ENDPOINT || ''
export const HASHNODE_HOST = process.env.NEXT_PUBLIC_HASHNODE_HOST || ''

export const CONTENTFUL_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTENTFUL_ENDPOINT || ''

export const CONTENTFUL_SPACE_ID =
  process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || ''

export const CONTENTFUL_DELIVERY_TOKEN =
  process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN

export const CONTENTFUL_PREVIEW_TOKEN =
  process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN || ''
