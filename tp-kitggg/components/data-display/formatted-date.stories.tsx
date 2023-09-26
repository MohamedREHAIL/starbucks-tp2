import type { Meta, StoryObj } from '@storybook/react';
import { FormattedDate } from './formatted-date';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Data Display/FormattedDate',
  component: FormattedDate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    date: new Date()
  },
  argTypes: {
    date: {control: 'date'}
  }
} satisfies Meta<typeof FormattedDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};