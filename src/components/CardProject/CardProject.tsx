import Image from 'next/image'
import cn from '@/utils/cn'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import {
  StarIcon,
  UserIcon,
  CheckCircleIcon,
  DocumentDuplicateIcon
} from '@heroicons/react/24/outline'
import styles from './CardProject.module.css'
import type { CardProjectProps } from './CardProject.d'

const CardProject = ({
  variant = 'compact',
  name,
  description,
  licence,
  tags,
  stars,
  issues,
  contributors,
  forks
}: CardProjectProps) => {
  return (
    <div
      className={cn(styles.CardProject, {
        [styles['CardProject--full']]: variant === 'full'
      })}
    >
      <div className={styles.CardProject__content}>
        <div>
          <div className={styles.CardProject__title}>
            {/* <CodeBracketSquareIcon className={styles.CardProject__icon} /> */}
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
            src="https://repository-images.githubusercontent.com/724425985/b241f73a-52ab-43bf-860e-047dd8c468bf"
            width={200}
            height={100}
            className="max-h-[170px] rounded-lg object-cover"
          />
        )}
      </div>
      <div className={styles.CardProject__track}>
        <div className={styles.CardProject__item}>
          <CheckBadgeIcon className="mr-1 h-5 w-5" />
          {licence}
        </div>

        <div className={styles.CardProject__item}>
          <StarIcon className="mr-1 h-5 w-5" />
          {stars} stars
        </div>

        <div className={styles.CardProject__item}>
          <CheckCircleIcon className="mr-1 h-5 w-5" />
          {issues} issues
        </div>

        {variant === 'full' && (
          <>
            <div className={styles.CardProject__item}>
              <UserIcon className="mr-1 h-5 w-5" />
              {contributors} contributors
            </div>

            <div className={styles.CardProject__item}>
              <DocumentDuplicateIcon className="mr-1 h-5 w-5" />
              {forks} forks
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CardProject
