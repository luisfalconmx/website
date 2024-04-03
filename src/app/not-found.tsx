import Link from 'next/link'
import Button from '@/components/Button'
import { EyeSlashIcon, CubeTransparentIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-125px)] w-screen max-w-lg flex-col justify-center px-4">
      <CubeTransparentIcon className="mx-auto mb-6 h-16 w-16" />
      <div>
        <h1 className="mb-4 block text-center text-3xl font-bold">Not Found</h1>
        <p className="mb-12 text-center text-xl">
          The page you are looking for does not exist or was moved.
        </p>
        <Link href="/" className="mx-auto block w-fit">
          <Button>Back to home</Button>
        </Link>
      </div>
    </main>
  )
}
