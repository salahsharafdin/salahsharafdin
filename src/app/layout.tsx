import type { Metadata, Viewport } from 'next'
import { JsonLd } from '../components/JsonLd'
import { site, siteUrl } from '../config/site'
import { ThemeProvider } from '../context/ThemeContext'
import './globals.css'

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}})();`

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.headline,
    template: `%s · ${site.title}`,
  },
  description: site.description,
  applicationName: site.title,
  authors: [{ name: site.fullName, url: siteUrl }],
  creator: site.fullName,
  publisher: site.fullName,
  keywords: [...site.keywords],
  category: 'technology',
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
    },
  },
  openGraph: {
    type: 'profile',
    url: '/',
    title: site.headline,
    description: site.description,
    siteName: site.title,
    locale: site.locale,
    firstName: site.givenName,
    lastName: site.familyName,
    username: 'salahsharafdin',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.headline,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <JsonLd />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
