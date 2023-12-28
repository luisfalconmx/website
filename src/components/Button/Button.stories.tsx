import Button from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Filled: Story = {
  args: {
    children: 'Hello World',
    variant: 'filled'
  }
}

export const Outlined: Story = {
  args: {
    children: 'Hello World',
    variant: 'outlined'
  }
}

export const Custom: Story = {
  args: {
    children: 'Hello World',
    className: 'bg-red-500 text-red-200'
  }
}
