import Image from 'next/image'
import humanDate from '@/utils/humanDate'
import type { WorkCardProps } from './WorkCard.d'

export const WorkCard = ({
  name,
  companyName,
  companyImage,
  location,
  startDate,
  endDate,
  industry,
  description
}: WorkCardProps) => {
  return (
    <article className="grid h-full grid-cols-1 grid-rows-[60px_1fr] gap-6 rounded-xl border border-divider-soft bg-white px-6 py-8 shadow-lg dark:border-divider-hard dark:bg-night lg:grid-cols-[60px_1fr] lg:grid-rows-none">
      <Image
        src={companyImage.url}
        alt={companyName}
        width={60}
        height={60}
        className="mx-auto mb-4 rounded-xl border border-divider-soft dark:border-divider-hard lg:mx-0"
      />
      <div>
        <h3 className="mb-1 text-center text-2xl font-bold lg:text-left">
          {name}
        </h3>
        <p className="mb-1 text-center lg:text-left lg:text-lg">
          {companyName} - {location}
        </p>
        <p className="mb-8 text-center text-sm text-neutral-500 lg:text-left lg:text-base">
          {humanDate(startDate)} - {endDate ? humanDate(endDate) : 'Present'}
        </p>
        <p className="text-center lg:text-left lg:text-lg">{description}</p>
      </div>
    </article>
  )
}
