import type { Metadata, Viewport } from 'next'
import { JsonLd } from '../components/JsonLd'
import { site, siteUrl } from '../config/site'
import { ThemeProvider } from '../context/ThemeContext'
import './globals.css'

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}})();`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    template: `%s · ${site.title}`,
  },
  description: site.description,
  applicationName: site.title,
  authors: [{ name: site.fullName, url: siteUrl }],
  creator: site.fullName,
  keywords: [
    'Salah Sharafdin',
    'Salah Yusuf Sharafdin',
    'Software Developer',
    'Somast',
    'web developer',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'profile',
    url: '/',
    title: site.title,
    description: site.description,
    siteName: site.title,
    locale: site.locale,
    firstName: 'Salah',
    lastName: 'Sharafdin',
  },
  twitter: {
    card: 'summary',
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
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
