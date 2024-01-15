import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './MainLayout.module.css'
import type { MainLayoutProps } from './MainLayout.d'

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className={styles.MainLayout}>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout
