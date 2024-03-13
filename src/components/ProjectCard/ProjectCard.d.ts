export interface ProjectCardProps {
  variant?: 'card' | 'featured'
  name: string
  slug: string
  description: string
  image: string
  tags: {
    icon: string
    name: string
  }[]
  className?: string
}
