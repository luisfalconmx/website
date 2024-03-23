import cn from '@/utils/cn'
import styles from './Button.module.css'
import type { ButtonProps } from './Button.d'

const Button = ({ children, className = '' }: ButtonProps) => (
  <button className={cn(styles.Button, className)}>{children}</button>
)

export default Button
