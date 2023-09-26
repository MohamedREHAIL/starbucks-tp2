import type { Meta, StoryObj } from '@storybook/react';
import { OrderStatus } from './order-status';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Orders/OrderStatus',
  component: OrderStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
  },

} satisfies Meta<typeof OrderStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InProgress: Story = {
  args: {
    status: "IN_PROGRESS"
  }
};

export const Completed: Story = {
  args: {
    status: "COMPLETED"
  }
}