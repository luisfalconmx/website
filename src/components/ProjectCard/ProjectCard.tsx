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
  technologies,
  date
}: ProjectCardProps) => {
  return (
    <article className="flex h-full flex-col-reverse gap-x-14 overflow-hidden rounded-xl border border-divider-soft bg-white shadow-lg dark:border-divider-hard dark:bg-night lg:grid lg:grid-cols-[1fr_500px] lg:grid-rows-none lg:px-12 lg:py-8">
      <div className="flex h-full flex-col justify-start px-6 py-8 text-center lg:p-0 lg:pb-8 lg:pt-6 lg:text-left">
        <time dateTime={date} className="mb-2 text-sm text-neutral-400">
          {humanDate(date)}
        </time>

        <h2 className="mb-4 text-2xl font-bold lg:text-3xl">{name}</h2>

        <p className="mb-6 block lg:text-lg">{description}</p>

        <ul className="mb-12 flex flex-wrap justify-center lg:justify-start">
          {technologies.map(({ id, name, icon }) => (
            <li
              key={id}
              className="mb-2 mr-2 flex items-center space-x-1 rounded border border-divider-soft px-2 py-2 dark:border-divider-hard"
            >
              <Image
                src={icon}
                alt={name}
                width={24}
                height={24}
                unoptimized
                className="block"
              />
              <p className="text-xs lg:text-base">{name}</p>
            </li>
          ))}
        </ul>

        <Link href={url} className="mx-auto mt-auto w-full lg:mx-0 lg:w-fit">
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
        className="lg:self-center lg:rounded-xl"
      />
    </article>
  )
}
