export interface CardProjectProps {
  variant?: 'card' | 'block'
  name: string
  description: string
  image: string
  tags: {
    icon: string
    name: string
  }[]
}
