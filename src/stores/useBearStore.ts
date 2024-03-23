import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { SITE_STORAGE_KEY } from '@/config/env'

interface BearState {
  bears: number
  increase: (by: number) => void
}

const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by }))
      }),
      {
        name: SITE_STORAGE_KEY
      }
    )
  )
)

export default useBearStore
