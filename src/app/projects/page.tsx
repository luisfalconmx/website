// RENDER STRATEGY: SSR (Server Side Rendering)
import Link from 'next/link'
import { Button } from '@nextui-org/button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'projects'
}

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <Link href="/">
        <Button>go to home</Button>
      </Link>
    </>
  )
}
