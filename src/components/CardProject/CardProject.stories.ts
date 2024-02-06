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
    tags: [
      {
        name: 'react',
        icon: 'https://images.ctfassets.net/f6zp47ogowku/4Q7vctVdZ4cLEz3lXpHFzv/85923943250225aed45913c918e54351/react.svg'
      }
    ],
    image: 'https://picsum.photos/200/300',
    variant: 'card'
  }
}
