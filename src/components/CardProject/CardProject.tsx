import Image from 'next/image'
import Link from 'next/link'
import cn from '@/utils/cn'
import humanDate from '@/utils/humanDate'
import {
  CheckBadgeIcon,
  RocketLaunchIcon,
  LinkIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/solid'
import { CalendarDaysIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import styles from './CardProject.module.css'
import type { CardProjectProps } from './CardProject.d'
import Button from '@/components/Button'

const CardProject = ({
  name,
  description,
  image,
  variant,
  tags
}: CardProjectProps) => {
  return (
    <div
      className={cn(styles.CardProject, {
        [styles['CardProject--block']]: variant === 'block'
      })}
    >
      <div className={styles.CardProject__content}>
        <div>
          <div className={styles.CardProject__head}>
            <strong className={styles.CardProject__name}>{name}</strong>
          </div>
          <p className={styles.CardProject__description}>{description}</p>
          <div className={styles.CardProject__tags}>
            {tags &&
              tags.map((tag) => (
                <Image
                  src={tag.icon}
                  width={20}
                  height={20}
                  className={styles.CardProject__tag}
                  alt={tag.name}
                  key={tag.name}
                />
              ))}
          </div>

          <Link href={`/projects/${name}`} className="block w-fit">
            <Button variant="brand" className="flex rounded-lg text-base">
              View Project
              <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
      <Image
        alt={name}
        src={image}
        width={200}
        height={100}
        className={styles.CardProject__image}
      />
    </div>
  )
}

export default CardProject
