export interface CardProjectProps {
  variant?: 'compact' | 'full'
  name: string
  description: string
  image: string
  licence: string
  tags: string[] | undefined
  contributors: number
  issues: number
  stars: number
  forks: number
}
