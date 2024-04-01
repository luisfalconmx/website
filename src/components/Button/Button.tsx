import cn from '@/utils/cn'
import styles from './Button.module.css'
import type { ButtonProps } from './Button.d'

const Button = ({
  children,
  variant = 'default',
  className = ''
}: ButtonProps) => (
  <button
    className={cn(
      styles.Button,
      {
        [styles['Button--outline']]: variant === 'outline'
      },
      className
    )}
  >
    {children}
  </button>
)

export default Button
