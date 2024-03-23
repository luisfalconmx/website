const registerEnv = (value: string) => {
  return process.env[value] || ''
}

// SITE
export const SITE_URL = registerEnv('SITE_URL')
export const SITE_STORAGE_KEY = registerEnv('SITE_STORAGE_KEY')
export const SITE_BUNDLE_ANALYZER = registerEnv('SITE_BUNDLE_ANALYZER')

// DEVTO
export const DEVTO_API_URL = registerEnv('DEVTO_API_URL')
export const DEVTO_API_KEY = registerEnv('DEVTO_API_KEY')
