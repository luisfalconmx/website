import SocialIcons from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SocialIcons> = {
  component: SocialIcons,
  args: {
    data: [
      {
        provider: 'github',
        url: ''
      },
      {
        provider: 'twitter',
        url: ''
      },
      {
        provider: 'linkedin',
        url: ''
      }
    ]
  }
}

export default meta
type Story = StoryObj<typeof SocialIcons>

export const Default: Story = {
  args: {
    className: 'flex'
  }
}
