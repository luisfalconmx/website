import CardPost from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CardPost> = {
  component: CardPost
}

export default meta
type Story = StoryObj<typeof CardPost>

export const Default: Story = {
  args: {
    variant: 'default',
    title: 'Guide for designing better mobile apps typography',
    description:
      'In this article, I won’t talk about the general concepts of typography, which can be used both in print and digital media. I will focus on the specific aspects of typography in mobile apps and how to design better typography for them.',
    image:
      'https://images.pexels.com/photos/7561989/pexels-photo-7561989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Article',
    date: new Date(),
    readingTime: 5,
    author: {
      name: 'luisfalconmx',
      label: 'Frontend Developer',
      image:
        'https://avatars.githubusercontent.com/u/57654255?s=400&u=714b5dd86bf79c258033e31f449044f104169c59&v=4'
    }
  }
}

export const Imageless: Story = {
  args: {
    variant: 'imageless',
    title: 'Guide for designing better mobile apps typography',
    description:
      'In this article, I won’t talk about the general concepts of typography, which can be used both in print and digital media. I will focus on the specific aspects of typography in mobile apps and how to design better typography for them.',
    image:
      'https://images.pexels.com/photos/7561989/pexels-photo-7561989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Article',
    date: new Date(),
    readingTime: 5,
    author: {
      name: 'luisfalconmx',
      label: 'Frontend Developer',
      image:
        'https://avatars.githubusercontent.com/u/57654255?s=400&u=714b5dd86bf79c258033e31f449044f104169c59&v=4'
    }
  }
}

export const Square: Story = {
  args: {
    variant: 'square',
    title: 'Guide for designing better mobile apps typography',
    description:
      'In this article, I won’t talk about the general concepts of typography, which can be used both in print and digital media. I will focus on the specific aspects of typography in mobile apps and how to design better typography for them.',
    image:
      'https://images.pexels.com/photos/7561989/pexels-photo-7561989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Article',
    date: new Date(),
    readingTime: 5,
    author: {
      name: 'luisfalconmx',
      label: 'Frontend Developer',
      image:
        'https://avatars.githubusercontent.com/u/57654255?s=400&u=714b5dd86bf79c258033e31f449044f104169c59&v=4'
    }
  }
}

export const Track: Story = {
  args: {
    variant: 'track',
    title: 'Guide for designing better mobile apps typography',
    description:
      'In this article, I won’t talk about the general concepts of typography, which can be used both in print and digital media. I will focus on the specific aspects of typography in mobile apps and how to design better typography for them.',
    image:
      'https://images.pexels.com/photos/7561989/pexels-photo-7561989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Article',
    date: new Date(),
    readingTime: 5,
    author: {
      name: 'luisfalconmx',
      label: 'Frontend Developer',
      image:
        'https://avatars.githubusercontent.com/u/57654255?s=400&u=714b5dd86bf79c258033e31f449044f104169c59&v=4'
    }
  }
}

export const Box: Story = {
  args: {
    variant: 'box',
    title: 'Guide for designing better mobile apps typography',
    description:
      'In this article, I won’t talk about the general concepts of typography, which can be used both in print and digital media. I will focus on the specific aspects of typography in mobile apps and how to design better typography for them.',
    image:
      'https://images.pexels.com/photos/7561989/pexels-photo-7561989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Article',
    date: new Date(),
    readingTime: 5,
    author: {
      name: 'luisfalconmx',
      label: 'Frontend Developer',
      image:
        'https://avatars.githubusercontent.com/u/57654255?s=400&u=714b5dd86bf79c258033e31f449044f104169c59&v=4'
    }
  }
}

export const Jumbo: Story = {
  args: {
    variant: 'jumbo',
    title: 'Guide for designing better mobile apps typography',
    description:
      'In this article, I won’t talk about the general concepts of typography, which can be used both in print and digital media. I will focus on the specific aspects of typography in mobile apps and how to design better typography for them.',
    image:
      'https://images.pexels.com/photos/7561989/pexels-photo-7561989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tag: 'Article',
    date: new Date(),
    readingTime: 5,
    author: {
      name: 'luisfalconmx',
      label: 'Frontend Developer',
      image:
        'https://avatars.githubusercontent.com/u/57654255?s=400&u=714b5dd86bf79c258033e31f449044f104169c59&v=4'
    }
  }
}
