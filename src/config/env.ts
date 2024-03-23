const registerEnv = (value: string) => {
  return process.env[value] || ''
}

export const SITE_URL = registerEnv('SITE_URL')
export const SITE_STORAGE_KEY = registerEnv('SITE_STORAGE_KEY')
export const SITE_BUNDLE_ANALYZER = registerEnv('SITE_BUNDLE_ANALYZER')
