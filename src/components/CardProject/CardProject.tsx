import Image from 'next/image'
import Link from 'next/link'
import cn from '@/utils/cn'
import humanDate from '@/utils/humanDate'
import { CheckBadgeIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import styles from './CardProject.module.css'
import type { CardProjectProps } from './CardProject.d'

const CardProject = ({
  variant = 'compact',
  name,
  description,
  image,
  primaryLanguage,
  licence,
  tags,
  createdDate,
  latestRelease
}: CardProjectProps) => {
  const cleanPrimaryLanguage = primaryLanguage?.toLowerCase().replace(' ', '-')

  return (
    <Link href={`/projects/${name}`}>
      <div
        className={cn(styles.CardProject, {
          [styles['CardProject--full']]: variant === 'full'
        })}
      >
        <div className={styles.CardProject__content}>
          <div>
            <div className={styles.CardProject__head}>
              <Image
                src={`https://svgl.vercel.app/library/${cleanPrimaryLanguage}.svg`}
                alt={primaryLanguage}
                width={42}
                height={42}
                className="mr-3 block max-h-[42px] max-w-[42px]"
              />
              <strong className={styles.CardProject__name}>{name}</strong>
            </div>
            <p className={styles.CardProject__description}>{description}</p>
            <div className={styles.CardProject__tags}>
              {tags &&
                tags.map((tag) => (
                  <span className={styles.CardProject__tag} key={tag}>
                    {tag}
                  </span>
                ))}
            </div>
          </div>
          {variant === 'full' && (
            <Image
              alt={name}
              src={image}
              width={200}
              height={100}
              className={styles.CardProject__image}
            />
          )}
        </div>
        <div className={styles.CardProject__track}>
          <div className={styles.CardProject__item}>
            <CheckBadgeIcon className="mr-1 h-5 w-5 text-green-500" />
            {licence}
          </div>
          <div className={styles.CardProject__item}>
            <RocketLaunchIcon className="mr-1 h-5 w-5" />
            {latestRelease}
          </div>
          <div className={styles.CardProject__item}>
            <CalendarDaysIcon className="mr-1 h-5 w-5" />
            {humanDate(createdDate)}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardProject
