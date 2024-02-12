import Link from 'next/link'
import BlockGradient from '@/components/BlockGradient'
import Button from '@/components/Button'

const NotFoundPage = () => (
  <>
    <BlockGradient variant="default" />
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-4 text-8xl font-bold">404</h1>
      <p className="mb-12 max-w-screen-md text-center text-2xl text-smoke">
        The page you are looking for does not exist. Please check the URL or
        click the button below to go back to the homepage.
      </p>
      <Link href="/">
        <Button variant="filled" className="mt-4">
          Go back to homepage
        </Button>
      </Link>
    </div>
  </>
)

export default NotFoundPage
