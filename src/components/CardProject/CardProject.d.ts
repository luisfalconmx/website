export interface CardProjectProps {
  variant?: 'compact' | 'full'
  name: string
  description: string
  primaryLanguage: string
  image: string
  licence: string
  tags: string[] | undefined
  latestRelease: string
  createdDate: Date
}
