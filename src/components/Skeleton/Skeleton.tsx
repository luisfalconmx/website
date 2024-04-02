import styles from './Skeleton.module.css'
import type { SkeletonProps } from './Skeleton.d'

export const Skeleton = ({ width, height }: SkeletonProps) => {
  return <div className={styles['Skeleton']} style={{ width, height }} />
}
