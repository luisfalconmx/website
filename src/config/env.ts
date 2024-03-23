const registerEnv = (value: string) => {
  return process.env[value] || ''
}

export const SITE_URL = registerEnv('SITE_URL')
