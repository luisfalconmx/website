'use client'

import { Button } from '@nextui-org/react'
import useBearStore from '@/stores/useBearStore'

const Counter = () => {
  const { bears, increase } = useBearStore()

  return (
    <div className="mt-10 flex">
      <Button onClick={() => increase(1)}>increase</Button>
      <span className="ml-4">{bears}</span>
    </div>
  )
}

export default Counter
