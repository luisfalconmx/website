import { Children } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { SidebarLayoutProps } from './SidebarLayout.d'

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  const result: any = []

  Children.forEach(children, (child, index) => {
    if (index === 0) {
      result.push(
        <aside className="h-full" key={index}>
          {child}
        </aside>
      )
    }

    if (index === 1) {
      result.push(<main key={index}>{child}</main>)
    }
  })

  return (
    <>
      <Navbar />
      <div className="crazy-gradient-2 absolute top-0 -z-10 h-[600px] w-full"></div>
      <div className="mx-auto grid max-w-screen-xl grid-cols-[300px_1fr]">
        {result}
      </div>
      <Footer />
    </>
  )
}

export default SidebarLayout
