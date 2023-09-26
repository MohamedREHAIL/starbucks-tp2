import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './footer';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
  },
  decorators: [
    (Story) => <div className="pt-[300px]">
      <Story />
    </div>
  ]
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
   
  },
};