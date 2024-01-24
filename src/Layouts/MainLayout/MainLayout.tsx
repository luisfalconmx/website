import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './MainLayout.module.css'
import type { MainLayoutProps } from './MainLayout.d'

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className={styles.MainLayout}>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
