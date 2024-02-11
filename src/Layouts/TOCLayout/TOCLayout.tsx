import { Children } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { TOCLayoutProps } from './TOCLayout.d'
import BlockGradient from '@/components/BlockGradient'

const TOCLayout = ({ children }: TOCLayoutProps) => {
  const result: any = []

  Children.forEach(children, (child, index) => {
    if (index === 0) {
      result.push(
        <main className="pb-2 pt-12 md:py-12 lg:pr-8" key={index}>
          {child}
        </main>
      )
    }

    if (index === 1) {
      result.push(
        <aside
          className="row-span-2 block w-full border-iron/40 px-5 py-12 lg:border-l"
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
      <BlockGradient variant="right" />
      <div className="mx-auto grid max-w-screen-xl grid-cols-1 lg:grid-cols-[1fr_350px]">
        {result}
      </div>
      <Footer />
    </>
  )
}

export default TOCLayout
