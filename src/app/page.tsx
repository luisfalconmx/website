import Script from 'next/script'
import ThemeSwitch from '@/components/ThemeSwitch'
import schemaMarkup from './schema.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luis Falcon (luisfalconmx) - Frontend Developer',
  description:
    'I am frontend developer with 4 years of experience, B1 English level and more than 100 certifications related to software development.',
  creator: 'Luis Falcon (luisfalconmx)',
  authors: [
    {
      name: 'Luis Falcon (luisfalconmx)',
      url: 'https://luisfalconmx.dev'
    }
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Luis Falcon (luisfalconmx) - Frontend Developer',
    description:
      'I am frontend developer with 4 years of experience, B1 English level and more than 100 certifications related to software development.',
    type: 'website',
    url: 'https://www.luisfalconmx.dev',
    images: [
      {
        url: 'https://www.luisfalconmx.dev/images/open-graph-image.jpg'
      }
    ]
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

export default function Home() {
  return (
    <main>
      <h1>luisfalconmx.dev</h1>
      <ThemeSwitch />

      <Script id="schema" type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </Script>
    </main>
  )
}
