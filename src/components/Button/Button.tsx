import cn from '@/utils/cn'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  variant?: 'filled' | 'outlined'
  className?: string
}

const Button = ({ children, variant = 'filled', className }: Props) => (
  <button
    type="button"
    className={cn(
      'rounded-full border-2 bg-nightfall px-8 py-4 text-xl text-ghost dark:bg-ghost dark:text-nightfall',
      {
        'border-nightfall bg-transparent text-nightfall': variant === 'outlined'
      },
      className
    )}
  >
    {children}
  </button>
)

export default Button
