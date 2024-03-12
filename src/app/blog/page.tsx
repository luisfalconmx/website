import Link from 'next/link'
import { Button } from '@nextui-org/button'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'blog'
}

export default function Blog() {
  return (
    <>
      <h1>blog</h1>
      <Link href="/">
        <Button>go to home</Button>
      </Link>
    </>
  )
}
