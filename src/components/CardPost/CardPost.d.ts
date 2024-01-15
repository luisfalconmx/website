export interface CardPostProps {
  variant?: 'default' | 'imageless' | 'square' | 'track' | 'jumbo'
  link: string
  title: string
  description: string
  image: string
  tag: string | undefined
  date: Date
  readingTime: number
  author: {
    name: string
    label: string
    image: string
  }
  className?: string
}
