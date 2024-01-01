import Author from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Author> = {
  component: Author
}

export default meta
type Story = StoryObj<typeof Author>

export const Primary: Story = {
  args: {
    name: 'luisfalconmx',
    label: 'Frontend Developer',
    image:
      'https://avatars.githubusercontent.com/u/57654255?s=400&u=714b5dd86bf79c258033e31f449044f104169c59&v=4'
  }
}
