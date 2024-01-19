import CardProject from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CardProject> = {
  component: CardProject
}

export default meta
type Story = StoryObj<typeof CardProject>

export const Default: Story = {
  args: {
    name: 'nextjs-project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nisl nec nisl.',
    tags: ['nextjs', 'typescript', 'tailwindcss'],
    licence: 'MIT License',
    createdDate: new Date(),
    image: 'https://picsum.photos/200/300',
    latestRelease: 'v1.0.0',
    primaryLanguage: 'javascript',
    variant: 'full'
  }
}
