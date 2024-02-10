import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlockGradient from '@/components/BlockGradient'
import type { MainLayoutProps } from './MainLayout.d'

const MainLayout = ({
  gradientType = 'default',
  children
}: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <BlockGradient variant={gradientType} />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
