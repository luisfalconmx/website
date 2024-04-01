export interface PostCardProps {
  variant?: 'default' | 'imageless' | 'square' | 'track' | 'jumbo'
  link: string
  title: string
  description: string
  image: string
  tag: string | undefined
  date: string
  readingTime: number
  className?: string
}
