import type { ReactNode } from 'react'

export interface MainLayoutProps {
  gradientType?: 'default' | 'right' | 'left'
  children: ReactNode
}
