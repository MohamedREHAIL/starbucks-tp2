"use client";
import {FC, memo, useEffect, useMemo, useState} from "react";
import { ProductFilters } from "./product-filters";
import { ProductsCategoryData } from "tp-kit/types";
import { Button, ProductCardLayout, ProductGridLayout } from "tp-kit/components";
import { ProductFiltersResult } from "../types";
import { filterProducts } from "../utils/filter-products";
import Link from "next/link";
import {addLine} from "../hooks/use-cart";
import {set} from "zod";

type Props = {
  categories: ProductsCategoryData[];
  showFilters?: boolean
};

const ProductList: FC<Props> = memo(function ({ categories, showFilters = false }) {

  const [filters, setFilters] = useState<ProductFiltersResult | undefined>();
 //const filteredCategories = useMemo(() => filterProducts(categories, filters), [filters, categories]);
    const [filtredCategory, setFiltredCategory] = useState(categories)
    const params = new URLSearchParams();
    useEffect(()=>{


if(filters!==undefined) {
    filters.categoriesSlugs.forEach((cat) => params.append("cat", cat));
    params.set("search", filters.search==undefined?filters.search="":filters.search);
    console.log(filters.search)
}




        fetch(`/api/product-filters?${params.toString()}`)
            .then(r => r.json ())
            .then(filteredCategories => {setFiltredCategory(filteredCategories.categories);}

            )


    })
  return (

    <div className="flex flex-row gap-8">
      {/* Filters */}


      {showFilters && <div className="w-full max-w-[270px]">
        <ProductFilters categories={categories} onChange={setFilters} />
      </div>}

      {/* Grille Produit */}
      <div className="flex-1 space-y-24">

        {filtredCategory.map((cat) => (
          <section key={cat.id}>
            <h2 className="text-lg font-semibold mb-8 tracking-tight">
              <Link href={`/${cat.slug}`} className="link">{cat.name} ({cat.products.length})</Link>
            </h2>

            <ProductGridLayout products={cat.products}>
              {(product) => (
                <ProductCardLayout
                  product={product}
                  button={
                    <Button onClick={()=>addLine(product)} variant="ghost" className="flex-1 !py-4">
                      Ajouter au panier
                    </Button>
                  }
                />
              )}
            </ProductGridLayout>
          </section>
        ))}
      </div>
    </div>
  );
});

ProductList.displayName = "ProductList";
export { ProductList };
