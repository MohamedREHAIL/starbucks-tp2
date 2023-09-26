import type { Meta, StoryObj } from '@storybook/react';
import { ProductCardLayout } from './product-card-layout';
import { PRODUCTS_CATEGORY_DATA } from '../../data';
import { Button } from '../button';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Products/ProductCardLayout',
  component: ProductCardLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    product: PRODUCTS_CATEGORY_DATA[0].products[0],
    button: "Un bouton irait bien par ici"
  },
  decorators: [
    (Story) => {
      return <div className='max-w-[300px]'>
        <Story />
      </div>
    }
  ]
} satisfies Meta<typeof ProductCardLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithButton : Story = {
  args: {
    button: <Button variant={"ghost"} fullWidth>Click me</Button>
  }
}