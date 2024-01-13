import cn from '@/utils/cn'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  variant?: 'filled' | 'outlined'
  onClick?: () => void
  className?: string
}

const Button = ({
  children,
  variant = 'filled',
  className = '',
  onClick
}: Props) => (
  <button
    type="button"
    className={cn(
      'rounded-full border-2 bg-nightfall px-8 py-4 text-xl text-ghost dark:bg-ghost dark:text-nightfall',
      {
        'border-nightfall bg-transparent text-nightfall dark:border-ghost dark:bg-transparent dark:text-ghost':
          variant === 'outlined'
      },
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
