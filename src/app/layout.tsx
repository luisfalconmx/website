import { Poppins } from 'next/font/google'
import { Providers } from '@/config/providers'
import NavigationMenu from '@/components/NavigationMenu'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import '@/styles/main.css'

const font = Poppins({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Luis Falcon (luisfalconmx) - Frontend Developer',
    template: '%s - luisfalconmx'
  },
  description:
    'I am frontend developer with experience in modern web technologies. I have more than 100 certifications related on software development.',
  twitter: {
    card: 'summary_large_image'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={font.className}>
        <NavigationMenu />
        <Providers>{children}</Providers>
        <Footer />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/base16/onedark.min.css"
          referrerPolicy="no-referrer"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
          referrerPolicy="no-referrer"
          defer
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/javascript.min.js"
          referrerPolicy="no-referrer"
          defer
        />
      </body>
    </html>
  )
}
