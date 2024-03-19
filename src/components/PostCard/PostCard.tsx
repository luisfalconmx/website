import Image from 'next/image'
import humanDate from '@/utils/humanDate'
import cn from '@/utils/cn'
import styles from './PostCard.module.css'
import type { PostCardProps } from './PostCard.d'

const PostCard = ({
  variant = 'default',
  link,
  title,
  description,
  image,
  tag,
  date,
  readingTime,
  className = ''
}: PostCardProps) => {
  const formatedDate = humanDate(date)
  const customLabel = `${formatedDate} • ${readingTime} min read`

  let imageWidth = 0
  let imageHeight = 0

  if (variant === 'default') {
    imageWidth = 335
    imageHeight = 201
  }

  if (variant === 'imageless') {
    imageWidth = 0
    imageHeight = 0
  }

  if (variant === 'square') {
    imageWidth = 732
    imageHeight = 300
  }

  if (variant === 'track') {
    imageWidth = 400
    imageHeight = 295
  }

  if (variant === 'jumbo') {
    imageWidth = 1100
    imageHeight = 500
  }

  return (
    <a className={cn('block', className)} href={link}>
      <div
        className={cn(styles.PostCard, {
          [styles['PostCard--imageless']]: variant === 'imageless',
          [styles['PostCard--square']]: variant === 'square',
          [styles['PostCard--track']]: variant === 'track',
          [styles['PostCard--jumbo']]: variant === 'jumbo'
        })}
      >
        <div className={styles.PostCard__overlay} />
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className={styles.PostCard__image}
        />
        <div className={styles.PostCard__content}>
          <div>
            <div className="mb-2 flex flex-col lg:flex-row lg:items-center">
              <span className={styles.PostCard__tag}>{tag}</span>
              <span className={styles.PostCard__date}>{customLabel}</span>
            </div>
            <h1 className={styles.PostCard__title}>{title}</h1>
            <p className={styles.PostCard__description}>{description}</p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default PostCard
