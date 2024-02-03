import cn from '@/utils/cn'
import type { ButtonProps } from './Button.d'

const Button = ({
  children,
  variant = 'filled',
  className = '',
  onClick
}: ButtonProps) => (
  <button
    type="button"
    className={cn(
      'rounded-full border-2 bg-nightfall px-8 py-4 text-xl text-ghost dark:bg-ghost dark:text-nightfall',
      {
        'border-nightfall bg-transparent text-nightfall dark:border-ghost dark:bg-transparent dark:text-ghost':
          variant === 'outlined',
        'border-none bg-gradient-to-r from-primary to-secondary !text-white':
          variant === 'brand'
      },
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
