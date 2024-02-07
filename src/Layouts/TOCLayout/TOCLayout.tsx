import { Children } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { TOCLayoutProps } from './TOCLayout.d'

const TOCLayout = ({ children }: TOCLayoutProps) => {
  const result: any = []

  Children.forEach(children, (child, index) => {
    if (index === 0) {
      result.push(
        <main className="py-12 pr-8" key={index}>
          {child}
        </main>
      )
    }

    if (index === 1) {
      result.push(
        <aside
          className="row-span-2 block w-full border-l border-iron/40 px-5 py-12"
          key={index}
        >
          {child}
        </aside>
      )
    }

    if (index === 2) {
      result.push(<section key={index}>{child}</section>)
    }
  })

  return (
    <>
      <Navbar />
      <div className="crazy-gradient-3 absolute top-0 -z-10 h-[600px] w-full"></div>
      <div className="mx-auto grid max-w-screen-xl grid-cols-[1fr_350px]">
        {result}
      </div>
      <Footer />
    </>
  )
}

export default TOCLayout
