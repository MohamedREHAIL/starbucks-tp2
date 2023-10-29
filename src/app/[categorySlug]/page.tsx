import { BreadCrumbs, SectionContainer } from "tp-kit/components";
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import { ProductList } from "../../components/product-list";
import { NextPageProps } from "../../types";
import { Metadata } from "next";
import { cache } from 'react'
import { notFound } from 'next/navigation'

import prisma from "../../utils/prisma";
const category = PRODUCTS_CATEGORY_DATA[0];


type Props = {
  categorySlug: string;
};




export const getCategory = cache(async (x: string) => {
  console.log("getCategory")
  const categorie = await prisma.productCategory.findFirst({
    where: {
      slug: x
    },
    include: {
      products: true
    }
  });
  return categorie;

})




export async function generateMetadata({ params, searchParams }: NextPageProps<Props>): Promise<Metadata> {
  const result = await getCategory(params.categorySlug);

  if (!result) {
    return notFound()
  }

  return {
    title: result.name,
    description: `Trouvez votre inspiration avec un vaste choix de boissons Starbucks parmi nos produits ${result.name}`
  };
}

export default async function CategoryPage({params}: NextPageProps<Props>) {
 
  const result = await getCategory(params.categorySlug);
  
  return <SectionContainer>
   
    <BreadCrumbs 
      items={[
        {
          label: "Accueil",
          url: "/"
        },
        {
          label: result?.name,
          url: `/${result?.slug}`
        }
      ]}
    />

    <ProductList categories={[result]} />
  </SectionContainer>
}