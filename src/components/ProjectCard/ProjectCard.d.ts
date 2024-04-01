export interface ProjectCardProps {
  url: string
  name: string
  description: string
  image: string
  technologies: {
    id: string
    name: string
    icon: string
  }[]
  date: string
}
