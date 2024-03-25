import Switch from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Switch> = {
  component: Switch
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    name: 'example',
    isChecked: false,
    onChange: () => {}
  }
}
