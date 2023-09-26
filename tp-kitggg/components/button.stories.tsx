import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Click Me'
  },
  decorators: [
    (Story) => (
      <div className='max-w-lg w-screen flex justify-center items-center'>
        <Story />
      </div>
    ),
  ]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const White: Story = {
  args: {
    variant: 'white',
  },
  parameters: {
    backgrounds: {
      default: 'starbucks',
    } 
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline'
  }
};

export const Light : Story = {
  args: {
    variant: 'light'
  }
}
