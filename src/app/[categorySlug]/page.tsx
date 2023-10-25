import { BreadCrumbs, SectionContainer } from "tp-kit/components";
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import { ProductList } from "../../components/product-list";
import { NextPageProps } from "../../types";
import { Metadata } from "next";
import prisma from "../../utils/prisma";
const category = PRODUCTS_CATEGORY_DATA[0];


type Props = {
  categorySlug: string;
};

  async function getCategory() {
  const categorie = await prisma.productCategory.findFirst({

    include:{
      products:true
    }
  })
  return categorie
}

export async function generateMetadata({ params, searchParams} : NextPageProps<Props>) : Promise<Metadata> {
  {console.log("ddddd")}
  // const category = await getCategory
  return {
    title: category.name,
    description: `Trouvez votre inspiration avec un vaste choix de boissons Starbucks parmi nos produits ${category.name}`
  }
}

export default async function CategoryPage({params}: NextPageProps<Props>) {
  {console.log("ddddd")}
  return <SectionContainer>
   
    <BreadCrumbs 
      items={[
        {
          label: "Accueil",
          url: "/"
        },
        {
          label: category.name,
          url: `/${category.slug}`
        }
      ]}
    />

    <ProductList categories={[category]} />
  </SectionContainer>
}