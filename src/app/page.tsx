import ThemeSwitch from '@/components/ThemeSwitch'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'luisfalconmx.dev',
  description: 'Personal website of Luis Falcon'
}

export default function Home() {
  return (
    <main>
      <h1>luisfalconmx.dev</h1>
      <ThemeSwitch />
    </main>
  )
}
