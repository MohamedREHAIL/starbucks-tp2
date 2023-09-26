import type { Meta, StoryObj } from '@storybook/react';
import { BreadCrumbs } from './breadcrumbs';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'BreadCrumbs',
  component: BreadCrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
  },

} satisfies Meta<typeof BreadCrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   items: [
    {
      label: 'Label',
      url: '#',
    },
    {
      label: 'Current Label',
      url: '#',
    }
   ]
  },
};