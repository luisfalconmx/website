import { MetadataRoute } from 'next'
import { SITE_URL } from '@/config/env'

export default function robots(): MetadataRoute.Robots {
  const sitemap = `${SITE_URL}/sitemap.xml`

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ''
    },
    sitemap
  }
}
