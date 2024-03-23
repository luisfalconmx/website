import { MetadataRoute } from 'next'
import { SITE_URL } from '@/config/env'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1
    }
  ]
}
