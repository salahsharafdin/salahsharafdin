export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'http://localhost:3000'

export const site = {
  title: 'Salah Sharafdin',
  headline: 'Salah Sharafdin, Software Developer',
  fullName: 'Salah Yusuf Sharafdin',
  givenName: 'Salah',
  familyName: 'Sharafdin',
  jobTitle: 'Software Developer',
  description:
    'Salah Yusuf Sharafdin is a Software Developer at Somast. He builds modern websites and applications and is learning machine learning.',
  locale: 'en_US',
  language: 'en',
  updated: '2026-10-07',
  email: 'salahsharafdin@gmail.com',
  telephone: '+252617621631',
  keywords: [
    'Salah Sharafdin',
    'Salah Yusuf Sharafdin',
    'Software Developer',
    'Somast',
    'web developer',
    'machine learning',
  ],
} as const
