import type { MetadataRoute } from 'next'
import { site, siteUrl } from '../config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: site.updated,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
