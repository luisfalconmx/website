import type { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  variant?: 'filled' | 'outlined' | 'brand'
  onClick?: () => void
  className?: string
}
