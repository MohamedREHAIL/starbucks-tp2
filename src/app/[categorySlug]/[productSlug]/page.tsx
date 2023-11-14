
import {
  BreadCrumbs,
  Button,
  FormattedPrice,
  ProductCardLayout,
  ProductGridLayout,
  ProductRating,
  ProductImage,
  SectionContainer,
} from "tp-kit/components";
import { NextPageProps } from "../../../types";
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import { Metadata } from "next";
import {
  ProductAttribute,
  ProductAttributesTable,
} from "../../../components/product-attributes-table";
import {addLine} from "../../../hooks/use-cart";
import prisma from "../../../utils/prisma";
import {cache} from "react";
import {AddToCartButton} from "../../../components/add-to-cart-button";
// const product = {
//   ...PRODUCTS_CATEGORY_DATA[0].products[0],
//   category: {
//     ...PRODUCTS_CATEGORY_DATA[0],
//     products: PRODUCTS_CATEGORY_DATA[0].products.slice(1),
//   },
// };


export const getCategoryProduct = cache(async (slugCate: string, slugProduct: string) => {
  console.log("getCategoryProduct");
  const product = await prisma.product.findUnique({
    where: {
      slug: slugProduct
    },
    include: {
      category: {
        include:{
          products:{
            where:{
              slug: {not:slugCate}
            }
          }
        }
      }
    }
  });
  console.log(product)
  return product;
});

type Props = {
  categorySlug: string;
  productSlug: string;
};

export async function generateMetadata({
  params,
  searchParams,
}: NextPageProps<Props>): Promise<Metadata> {
  const result = await getCategoryProduct(params.categorySlug, params.productSlug);

  return {
    title: result.name,
    description:
      result.desc ??
      `Succombez pour notre ${result.name} et commandez-le sur notre site !`,
  };
}

const productAttributes: ProductAttribute[] = [
  { label: "Intensité", rating: 3 },
  { label: "Volupté", rating: 2 },
  { label: "Amertume", rating: 1 },
  { label: "Onctuosité", rating: 4 },
  { label: "Instagramabilité", rating: 5 },
];

export default async function ProductPage({ params }: NextPageProps<Props>) {
  const result = await getCategoryProduct(params.categorySlug, params.productSlug);
  console.log(result)
  return (
    <SectionContainer wrapperClassName="max-w-5xl">
      <BreadCrumbs
        className="my-8"
        items={[
          {
            label: "Accueil",
            url: "/",
          },
          {
            label: result.category.name,
            url: `/${result.category.slug}`,
          },
          {
            label: result.name,
            url: `/${result.path}`,
          },
        ]}
      />

      {/* Produit */}
      <section className="flex flex-col md:flex-row justify-center gap-8">
        {/* Product Image */}
        <div className="relative">
          <ProductImage
            {...result}
            priority
            className="rounded-lg sticky top-12 object-cover sm:aspect-video md:aspect-auto w-full md:w-[300px]"
          />
        </div>

        {/* Product body */}
        <div className="flex-1">
          <div className="prose prose-lg">
            {/* Product Name */}
            <h1>{result.name}</h1>

            {/* Product Rating */}
            <ProductRating value={4} size={18} />

            {/* Desc */}
            <p>{result.desc}</p>

            {/* Prix et ajout au panier */}
            <div className="flex justify-between items-center gap-8">
              <p className="!my-0 text-xl">
                {result.price}
              </p>
              <AddToCartButton variant={"primary"} product={result} fullWidth={false} />
            </div>
          </div>

          {/* Products attribute */}
          <ProductAttributesTable className="mt-6" data={productAttributes} />
        </div>
      </section>

      {/* Related products */}
      <section>
        <div className="mt-24">
          <div className="prose prose-lg mb-8">
            <h2>Vous aimerez aussi</h2>
          </div>

          <ProductGridLayout products={result.category.products}>
            {(product) => (
              <ProductCardLayout
                product={product}
                button={
                  <Button variant="ghost" className="flex-1 !py-4">
                    Ajouter au panier
                  </Button>
                }
              />
            )}
          </ProductGridLayout>
        </div>
      </section>
      {/* /Related products */}
    </SectionContainer>
  );
}
