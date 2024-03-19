export interface ComentaryCardProps {
  profile: {
    image: string
    title: string
    date: string
  }
  content: string
  variant?: 'default' | 'reply'
}
