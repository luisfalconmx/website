import Image from 'next/image'
import { defaultBlurImage } from '@/config/blurImages'
import Link from 'next/link'
import {
  CalendarDaysIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'
import humanDate from '@/utils/humanDate'
import type { CertificationCardProps } from './CertificationCard.d'

export const CertificationCard = ({
  name,
  date,
  organizationImage,
  organizationName,
  url,
  image
}: CertificationCardProps) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-divider-soft bg-white dark:border-divider-hard dark:bg-night">
      <Image
        src={image}
        alt={`Certificate for ${name}`}
        width={400}
        height={300}
        placeholder="blur"
        blurDataURL={defaultBlurImage}
      />
      <div className="flex h-full flex-col border-t border-divider-soft p-4 dark:border-divider-hard">
        <h2 className="mb-2 text-lg font-bold">{name}</h2>
        <time
          dateTime={date}
          className="mb-6 flex items-center text-sm text-black/80 dark:text-white/80"
        >
          <CalendarDaysIcon className="mr-1 inline-block h-5 w-5" />
          {humanDate(date)}
        </time>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={organizationImage}
              alt={organizationName}
              width={32}
              height={32}
              className="mr-2 rounded-full"
            />
            <p className="font-bold">{organizationName}</p>
          </div>
          <Link
            className="flex"
            href={url}
            target="_blank"
            rel="nofollow"
            aria-label={`View ${name} certificate`}
          >
            <ArrowTopRightOnSquareIcon className="inline-block h-6 w-6" />
          </Link>
        </div>
      </div>
    </article>
  )
}
