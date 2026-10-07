import { socialLinks } from '../config/links'
import { site, siteUrl } from '../config/site'

export function JsonLd() {
  const personId = `${siteUrl}/#person`
  const websiteId = `${siteUrl}/#website`

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteUrl,
        name: site.title,
        description: site.description,
        inLanguage: site.language,
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#profile`,
        url: siteUrl,
        name: site.headline,
        description: site.description,
        inLanguage: site.language,
        dateModified: site.updated,
        isPartOf: { '@id': websiteId },
        mainEntity: { '@id': personId },
        about: { '@id': personId },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: site.fullName,
        givenName: site.givenName,
        familyName: site.familyName,
        alternateName: site.title,
        jobTitle: site.jobTitle,
        description: site.description,
        url: siteUrl,
        email: site.email,
        telephone: site.telephone,
        knowsAbout: [
          'Web development',
          'Software development',
          'Machine learning',
        ],
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
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
