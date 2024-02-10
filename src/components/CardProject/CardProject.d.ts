export interface CardProjectProps {
  variant?: 'card' | 'featured'
  name: string
  description: string
  image: string
  tags: {
    icon: string
    name: string
  }[]
}
