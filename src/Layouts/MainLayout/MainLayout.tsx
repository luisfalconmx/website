import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { MainLayoutProps } from './MainLayout.d'

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="crazy-gradient absolute top-0 -z-10 h-[550px] w-full"></div>
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
