import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
   as: "h1",
   size: "md",
   children: "My heading"
  },
};

export const Large: Story = {
  args: {
    as: "h1",
    size: "lg",
    children: "My large heading"
   },
}

export const Color: Story = {
  args: {
    as: "h1",
    size: "md",
    children: "My colored heading",
    variant: "brand"
   },
};

export const Weight : Story = {
  args: {
    as: "h1",
    size: "md",
    weight: "bold",
    children: "My Bold Heading",
  }
}