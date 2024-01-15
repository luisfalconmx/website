import type { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  variant?: 'filled' | 'outlined'
  onClick?: () => void
  className?: string
}
