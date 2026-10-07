import type { MetadataRoute } from 'next'
import { siteUrl } from '../config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date('2026-10-07'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
