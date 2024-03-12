import Link from 'next/link'
import { ThemeSwitcher } from '../components/ThemeSwitcher'
import { Button } from '@nextui-org/button'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <ThemeSwitcher />
      <Link href="/blog">
        <Button>Click me</Button>
      </Link>
    </>
  )
}
