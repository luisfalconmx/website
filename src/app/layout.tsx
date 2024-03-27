import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import type { Metadata, Viewport } from 'next'
import '@/styles/main.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
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
