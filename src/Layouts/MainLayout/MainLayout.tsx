import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { MainLayoutProps } from './MainLayout.d'

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
