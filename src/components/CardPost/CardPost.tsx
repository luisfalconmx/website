import Image from 'next/image'
import Author from '@/components/Author'
import humanDate from '@/utils/humanDate'
import cn from '@/utils/cn'
import styles from './CardPost.module.css'

interface Props {
  variant?: 'default' | 'imageless' | 'square' | 'track' | 'box' | 'jumbo'
  title: string
  description: string
  image: string
  tag: string
  date: Date
  readingTime: number
  author: {
    name: string
    label: string
    image: string
  }
  className?: string
}

const CardPost = ({
  variant = 'default',
  title,
  description,
  image,
  tag,
  date,
  author,
  readingTime,
  className = ''
}: Props) => {
  const maxDescriptionLength = 110
  const formatedDescription =
    description.length > maxDescriptionLength
      ? description.slice(0, maxDescriptionLength) + '...'
      : description

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

  if (variant === 'box') {
    imageWidth = 550
    imageHeight = 250
  }

  if (variant === 'jumbo') {
    imageWidth = 1100
    imageHeight = 500
  }

  return (
    <div
      className={cn(
        styles.CardPost,
        {
          [styles['CardPost--imageless']]: variant === 'imageless',
          [styles['CardPost--square']]: variant === 'square',
          [styles['CardPost--track']]: variant === 'track',
          [styles['CardPost--box']]: variant === 'box',
          [styles['CardPost--jumbo']]: variant === 'jumbo'
        },
        className
      )}
    >
      <div className={styles.CardPost__overlay} />
      <Image
        src={image}
        alt={title}
        width={imageWidth}
        height={imageHeight}
        className={styles.CardPost__image}
      />
      <div className={styles.CardPost__content}>
        <div>
          {tag && <span className={styles.CardPost__tag}>{tag}</span>}
          <h1 className={styles.CardPost__title}>{title}</h1>
          <p className={styles.CardPost__description}>{formatedDescription}</p>
        </div>
        <Author
          image={author.image}
          name={author.name}
          label={customLabel}
          className={styles.CardPost__author}
        />
      </div>
    </div>
  )
}

export default CardPost
