'use client'

import Link from 'next/link'
import { Button } from '@nextui-org/button'
import { ThemeSwitcher } from '../components/ThemeSwitcher'
import Counter from '@/components/Counter'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <ThemeSwitcher />
      <Link href="/blog">
        <Button>go to blog</Button>
      </Link>
      <Counter />
    </>
  )
}
