import Script from 'next/script'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luis Falcon (luisfalconmx) - Frontend Developer',
  description:
    'I am Frontend Developer with 4 years of experience, B1 English level and more than 100 certifications related to software development.',
  robots: 'index, follow',
  openGraph: {
    description:
      'I am Frontend Developer with 4 years of experience, B1 English level and more than 100 certifications related to software development.',
    type: 'website',
    url: 'https://www.luisfalconmx.dev',
    images: [
      {
        url: 'https://www.luisfalconmx.dev/images/open-graph-image.jpg'
      }
    ]
  }
}

export default function Home() {
  return (
    <main>
      <h1>luisfalconmx.dev</h1>

      <Script id="schema" type="application/ld+json">
        {`{
          "@context": "https://schema.org/",
          "@type": "Person",
          "name": "Luis Falcon (luisfalconmx)",
          "jobTitle": "Frontend Developer",
          "url": "https://www.luisfalconmx.dev/",
          "image": "https://www.luisfalconmx.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ff6zp47ogowku%2F38N5Da3rtuMRI2HuM4o8D1%2Fe73cc100ff68d07d3ba4bb51fd552de2%2Fluisfalconmx-2023.jpg&w=384&q=75",
          "sameAs": [
            "https://www.facebook.com/luisfalconmx.dev",
            "https://twitter.com/luisfalconmx",
            "https://www.instagram.com/luisfalconmx",
            "https://www.linkedin.com/in/luisfalconmx",
            "https://github.com/luisfalconmx",
            "https://www.luisfalconmx.dev"
          ]
        }`}
      </Script>
    </main>
  )
}
