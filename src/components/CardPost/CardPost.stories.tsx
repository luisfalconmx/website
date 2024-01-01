import CardPost from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CardPost> = {
  component: CardPost
}

export default meta
type Story = StoryObj<typeof CardPost>

export const Primary: Story = {
  args: {
    title: 'Guide for designing better mobile apps typography',
    description:
      'In this article, I won’t talk about the general concepts of typography, which can be used both in print...',
    image:
      'https://images.pexels.com/photos/7561989/pexels-photo-7561989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Article',
    date: '2021-04-30',
    author: {
      name: 'luisfalconmx',
      label: 'Frontend Developer',
      image:
        'https://avatars.githubusercontent.com/u/57654255?s=400&u=714b5dd86bf79c258033e31f449044f104169c59&v=4'
    }
  }
}

export const Dark = {
  args: {
    title: 'Guide for designing better mobile apps typography',
    description:
      'In this article, I won’t talk about the general concepts of typography, which can be used both in print...',
    image:
      'https://images.pexels.com/photos/7561989/pexels-photo-7561989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Article',
    date: '2021-04-30',
    author: {
      name: 'luisfalconmx',
      label: 'Frontend Developer',
      image:
        'https://avatars.githubusercontent.com/u/57654255?s=400&u=714b5dd86bf79c258033e31f449044f104169c59&v=4'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}
