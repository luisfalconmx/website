import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import cn from '@/utils/cn'
import styles from './ProjectCard.module.css'
import type { ProjectCardProps } from './ProjectCard.d'

const ProjectCard = ({
  variant,
  name,
  description,
  slug,
  tags,
  image,
  className = ''
}: ProjectCardProps) => {
  const maxTags = 5

  return (
    <div
      className={cn(
        styles.CardProject,
        {
          [styles['CardProject--featured']]: variant === 'featured'
        },
        className
      )}
    >
      <div className={styles.CardProject__content}>
        <div
          className={cn({
            ['flex h-full flex-col']: variant === 'card'
          })}
        >
          <div>
            <div className={styles.CardProject__head}>
              <strong className={styles.CardProject__name}>{name}</strong>
            </div>
            <p className={styles.CardProject__description}>{description}</p>
            <div className={styles.CardProject__tags}>
              {tags &&
                // max 5 tags
                tags.map(
                  (tag, index) =>
                    index < maxTags && (
                      <Image
                        src={tag.icon}
                        width={variant === 'featured' ? 44 : 32}
                        height={variant === 'featured' ? 44 : 32}
                        className={styles.CardProject__tag}
                        alt={tag.name}
                        key={tag.name}
                      />
                    )
                )}

              {tags && tags.length > maxTags && (
                <div className="flex items-center justify-center rounded-full  px-3 text-center text-lg text-iron">
                  +{tags.length - maxTags}
                </div>
              )}
            </div>
          </div>
          <Link href={`/projects/${slug}`} className="mt-auto block w-fit">
            <Button
              size="lg"
              radius="full"
              color="primary"
              className="flex bg-gradient-to-r from-primary to-secondary p-7 text-lg"
              endContent={<ArrowTopRightOnSquareIcon className="h-5 w-5" />}
            >
              View Project
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

export default ProjectCard
