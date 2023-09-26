import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Card",
  component: Card,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "slate",
    },
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "My card body",
  },
};