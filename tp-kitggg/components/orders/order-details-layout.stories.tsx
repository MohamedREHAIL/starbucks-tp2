import type { Meta, StoryObj } from "@storybook/react";
import { OrderDetailsLayout } from "./order-details-layout";
import { PRODUCTS_CATEGORY_DATA } from "../../data";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Orders/OrderDetailsLayout",
  component: OrderDetailsLayout,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "slate",
    },
  },
  tags: ["autodocs"],
  args: {},
  decorators: [
    (Story) => (
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof OrderDetailsLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InProgress: Story = {
  args: {
    order: {
      id: 42,
      total:
        PRODUCTS_CATEGORY_DATA[0].products[0].price * 2 +
        PRODUCTS_CATEGORY_DATA[0].products[1].price * 1,
      createdAt: new Date(),
      completedAt: null,
      status: "IN_PROGRESS",
      lines: [
        {
          id: 1,
          product: PRODUCTS_CATEGORY_DATA[0].products[0],
          qty: 2,
          subtotal: PRODUCTS_CATEGORY_DATA[0].products[0].price * 2,
        },
        {
          id: 2,
          product: PRODUCTS_CATEGORY_DATA[0].products[1],
          qty: 1,
          subtotal: PRODUCTS_CATEGORY_DATA[0].products[1].price * 1,
        },
      ],
    },
  },
};

export const Completed: Story = {
  args: {
    order: {
      ...InProgress.args.order,
      completedAt: new Date(),
      status: "COMPLETED",
    },
  },
};
