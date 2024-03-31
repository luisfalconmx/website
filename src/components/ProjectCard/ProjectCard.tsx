import humanDate from '@/utils/humanDate'
import Link from 'next/link'
import Button from '@/components/Button'
import Image from 'next/image'
import { defaultBlurImage } from '@/config/blurImages'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import type { ProjectCardProps } from './ProjectCard.d'

export const ProjectCard = ({
  url,
  name,
  description,
  image,
  tags,
  date
}: ProjectCardProps) => {
  return (
    <article className="grid h-full grid-cols-1 gap-x-10 overflow-hidden rounded-xl border border-divider-soft bg-white dark:border-divider-hard dark:bg-night lg:grid-cols-[1fr_500px] lg:px-12 lg:pt-12">
      <div className="flex flex-col px-6 py-8 text-center lg:mb-8 lg:p-0 lg:text-left">
        <time dateTime={date} className="mb-2 text-sm text-neutral-400">
          {humanDate(date)}
        </time>

        <h2 className="mb-4 text-2xl font-bold lg:text-3xl">{name}</h2>

        <p className="mb-6 block lg:text-lg">{description}</p>

        <ul className="mb-12 flex flex-wrap justify-center lg:justify-start">
          {tags.map((tag) => (
            <li key={tag} className="mr-2 rounded-lg border px-2 py-1">
              {tag}
            </li>
          ))}
        </ul>

        <Link href={url} className="mx-auto w-full lg:mx-0 lg:w-fit">
          <Button className="flex min-h-[50px] w-full items-center justify-center lg:min-h-0 lg:justify-normal">
            View project
            <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        blurDataURL={defaultBlurImage}
        className="row-start-1 lg:row-start-auto"
      />
    </article>
  )
}
