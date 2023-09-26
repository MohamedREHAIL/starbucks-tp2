import type { Meta, StoryObj } from '@storybook/react';
import { PRODUCTS_CATEGORY_DATA } from '../../data';
import { ProductCartLine } from './product-cart-line';
import { MantineCustomThemeProvider } from '../providers/mantine-custom-theme-provider';
import { Lexend } from 'next/font/google';

const font = Lexend({
  subsets: ['latin'],
  weight: ['400', '600']
});

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Products/ProductCartLine',
  component: ProductCartLine,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    product: PRODUCTS_CATEGORY_DATA[0].products[0],
    qty: 1,
    onDelete: () => {},
    onQtyChange: (qty) => {},
  },
  decorators: [
    (Story) => {
      return <MantineCustomThemeProvider font={font}>
        <Story />
      </MantineCustomThemeProvider>
    }
  ]
} satisfies Meta<typeof ProductCartLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};