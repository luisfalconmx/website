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
      'rounded-full border-2 bg-ghost px-8 py-4 text-xl text-nightfall',
      {
        'border-ghost bg-transparent text-ghost': variant === 'outlined',
        'border-none bg-gradient-to-br from-primary to-secondary !text-white':
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
