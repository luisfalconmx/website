import Image from 'next/image'
import cn from '@/utils/cn'

interface Props {
  name: string
  label: string
  image: string
  className?: string
}

const Author = ({ name, label, image, className = '' }: Props) => (
  <div
    className={cn(
      'flex w-fit items-center text-nightfall dark:text-ghost',
      className
    )}
  >
    <Image
      src={image}
      alt={name}
      width={48}
      height={48}
      className="aspect-square h-full max-h-[48px] w-full max-w-[48px] rounded-full object-cover object-center"
    />
    <div className="ml-3">
      <b className="mb-1 block text-sm">{name}</b>
      <span className="block text-xs">{label}</span>
    </div>
  </div>
)

export default Author
