import type { Meta, StoryObj } from '@storybook/react';
import { ProductRating } from './product-rating';



// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Products/ProductRating',
  component: ProductRating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    value: 4,
    size: 24,
  },
} satisfies Meta<typeof ProductRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stars: Story = {
  args: {},
};

export const Circles: Story = {
  args: {
    icon: 'circle'
  }
}