import type { Meta, StoryObj } from '@storybook/react';
import { MenuBar } from './menu-bar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'MenuBar',
  component: MenuBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
  },
  decorators: [
    (Story) => <div className="pb-[500px]">
      <Story />
    </div>
  ]
} satisfies Meta<typeof MenuBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

export const WithLeadingAndTrailing: Story = {
  args: {
    leading: <section className='flex items-center uppercase text-sm tracking-wide'>Leading</section>,
    trailing: <div className='flex justify-end items-center uppercase text-sm tracking-wide'>Trailing</div>
  }
}