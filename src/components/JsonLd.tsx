import { socialLinks } from '../config/links'
import { site, siteUrl } from '../config/site'
import { content } from '../content'

export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.fullName,
    alternateName: content.meta.name,
    jobTitle: 'Software Developer',
    description: site.description,
    url: siteUrl,
    email: 'salahsharafdin@gmail.com',
    worksFor: {
      '@type': 'Organization',
      name: 'Somast',
      url: socialLinks.somast,
    },
    sameAs: [
      socialLinks.github,
      socialLinks.instagram,
      socialLinks.whatsapp,
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
