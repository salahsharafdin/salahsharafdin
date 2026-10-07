import type { MetadataRoute } from 'next'
import { site } from '../config/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.fullName,
    short_name: site.title,
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    lang: site.language,
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
