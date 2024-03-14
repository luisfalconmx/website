import cn from '@/utils/cn'
import styles from './BlockGradient.module.css'
import type { BlockGradientProps } from './BlockGradient.d'

const BlockGradient = ({ variant = 'default' }: BlockGradientProps) => (
  <div
    className={cn(styles.BlockGradient, {
      [styles['BlockGradient--default']]: variant === 'default',
      [styles['BlockGradient--right']]: variant === 'right',
      [styles['BlockGradient--left']]: variant === 'left'
    })}
  />
)

export default BlockGradient
