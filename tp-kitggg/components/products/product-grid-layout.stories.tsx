import type { Meta, StoryObj } from '@storybook/react';
import { ProductGridLayout } from './product-grid-layout';
import { ProductCardLayout } from './product-card-layout';
import { PRODUCTS_CATEGORY_DATA } from '../../data';
import { Button } from '../button';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Products/ProductGridLayout',
  component: ProductGridLayout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    products: PRODUCTS_CATEGORY_DATA[0].products.slice(0,3),
    children: (product) => product.name
  },
} satisfies Meta<typeof ProductGridLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCards : Story = {
  args: {
    children: (product) => <ProductCardLayout 
      product={product}
      button={<Button variant={"ghost"} fullWidth>Ajouter au panier</Button>}
    />
  }
}