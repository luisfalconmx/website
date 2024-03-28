import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import type { Metadata, Viewport } from 'next'
import { SITE_NAME } from '@/config/env'
import '@/styles/main.css'

export const metadata: Metadata = {
  title: {
    default: `Luis Falcon (luisfalconmx) - Frontend Developer`,
    template: `%s - ${SITE_NAME}`
  },
  creator: 'Luis Falcon (luisfalconmx)',
  authors: [
    {
      name: 'Luis Falcon (luisfalconmx)',
      url: 'https://luisfalconmx.dev'
    }
  ],
  openGraph: {
    title: {
      default: `Luis Falcon (luisfalconmx) - Frontend Developer`,
      template: `%s - ${SITE_NAME}`
    }
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://www.luisfalconmx.dev/images/open-graph-image.jpg'
      }
    ]
  },
  manifest: '/manifest.json'
}

export const viewport: Viewport = {
  themeColor: '#000000'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-ghost text-black dark:bg-black dark:text-white">
        <ThemeProvider attribute="data-theme">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
