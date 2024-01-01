import Image from 'next/image'
import Author from '@/components/Author'

interface Props {
  title: string
  description: string
  image: string
  tag: string
  date: string
  author: {
    name: string
    label: string
    image: string
  }
}

const CardPost = ({ title, description, image, tag, date, author }: Props) => {
  return (
    <div className="max-w-[335px] bg-ghost">
      <Image
        src={image}
        alt={title}
        width={335}
        height={200}
        className="object-center"
      />
      <div className="px-6 py-10">
        <span className="mb-2 block bg-gradient-to-r from-primary to-secondary bg-clip-text text-sm font-black uppercase text-transparent">
          {tag}
        </span>
        <h1 className="mb-5 text-xl font-bold">{title}</h1>
        <p className="mb-10">{description}</p>
        <Author {...author} label={date} />
      </div>
    </div>
  )
}

export default CardPost
