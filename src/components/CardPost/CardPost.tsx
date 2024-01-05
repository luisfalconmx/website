import Image from 'next/image'
import Author from '@/components/Author'
import humanDate from '@/utils/humanDate'

interface Props {
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
}

const CardPost = ({
  title,
  description,
  image,
  tag,
  date,
  author,
  readingTime
}: Props) => {
  const maxDescriptionLength = 110
  const formatedDescription =
    description.length > maxDescriptionLength
      ? description.slice(0, maxDescriptionLength) + '...'
      : description

  const formatedDate = humanDate(date)
  const customLabel = `${formatedDate} • ${readingTime} min read`

  return (
    <div className="max-w-[335px] bg-ghost dark:bg-onyx">
      <Image
        src={image}
        alt={title}
        width={335}
        height={200}
        className="object-center"
      />
      <div className="px-6 py-10 text-nightfall dark:text-ghost">
        <span className="mb-2 block bg-gradient-to-r from-primary to-secondary bg-clip-text text-sm font-black uppercase text-transparent">
          {tag}
        </span>
        <h1 className="mb-5 text-xl font-bold">{title}</h1>
        <p className="mb-10 text-onyx dark:text-smoke">{formatedDescription}</p>
        <Author image={author.image} name={author.name} label={customLabel} />
      </div>
    </div>
  )
}

export default CardPost
