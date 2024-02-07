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
          className="row-span-2 block w-full border-l border-iron/40 p-5"
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
      <div className="mx-auto grid max-w-screen-xl grid-cols-[1fr_350px]">
        {result}
      </div>
      <Footer />
    </>
  )
}

export default TOCLayout
