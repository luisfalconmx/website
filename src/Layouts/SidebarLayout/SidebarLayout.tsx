import { Children } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { SidebarLayoutProps } from './SidebarLayout.d'

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  const result: any = []

  Children.forEach(children, (child, index) => {
    if (index === 0) {
      result.push(
        <aside className="h-full bg-black" key={index}>
          {child}
        </aside>
      )
    }

    if (index === 1) {
      result.push(
        <main key={index}>
          <Navbar />
          <div className="crazy-gradient-2 absolute top-0 -z-10 h-[600px] w-full"></div>
          {child}
        </main>
      )
    }
  })

  return (
    <>
      <div className="grid grid-cols-[350px_1fr]">{result}</div>
      <Footer />
    </>
  )
}

export default SidebarLayout
