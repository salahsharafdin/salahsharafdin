export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'http://localhost:3000'

export const site = {
  title: 'Salah Sharafdin',
  fullName: 'Salah Yusuf Sharafdin',
  description:
    "Salah Yusuf Sharafdin is a Software Developer building modern, useful digital experiences. Currently a Software Developer at Somast.",
  locale: 'en_US',
} as const
