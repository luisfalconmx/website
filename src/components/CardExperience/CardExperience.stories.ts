import CardExperience from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CardExperience> = {
  component: CardExperience
}

export default meta
type Story = StoryObj<typeof CardExperience>

export const Default: Story = {
  args: {
    title: 'Frontend Developer',
    companyName: 'Company',
    companyImage: 'https://via.placeholder.com/150',
    employmentType: 'Full-time',
    location: 'Mexico City, Mexico',
    locationType: 'Remote',
    startDate: '2021-01-01',
    endDate: '2022-01-01',
    industry: 'Software',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero ut aliquet ullamcorper, felis libero accumsan risus, id ultrices quam ipsum eu velit. Sed euismod, velit at aliquet aliquam, ante velit ultrices leo, eget condimentum tortor nunc a dolor. Etiam auctor, velit ut aliquet ullamcorper, felis libero accumsan risus, id ultrices quam ipsum eu velit. Sed euismod, velit at aliquet aliquam, ante velit ultrices leo, eget condimentum tortor nunc a dolor.'
  }
}
