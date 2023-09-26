import type { Meta, StoryObj } from '@storybook/react';
import { NoticeMessage, NoticeMessageData } from './notice-message';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'NoticeMessage',
  component: NoticeMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    type: 'error',
    message: 'Contenu du message'
  },
  argTypes: {
  }
} satisfies Meta<typeof NoticeMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
  args: {
    type: 'error',
    message: "Une erreur s'est produite !",
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    message: "Votre inscription a bien été prise en compte, confirmez votre email pour vous connecter.",
  },
};