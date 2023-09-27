"use client";
import { PRODUCTS_CATEGORY_DATA } from "../../../tp-kit/data";
import { Button, ProductCardLayout, SectionContainer,ProductCartLine } from "../../../tp-kit/components";
import {Card} from "tp-kit/components";
import {addLine, computeCartTotal, computeLineSubTotal, removeLine, updateLine} from "../../hooks/use-cart";
import {useEffect} from "react";
import {Cart} from "../../components/cart";
import {useStore} from "../../hooks/use-cart";


export default function DevCartPage() {
    console.log("rendu page");
    const products = PRODUCTS_CATEGORY_DATA[0].products.slice(0, 3);

    return (
        <SectionContainer
            className="py-36"
            wrapperClassName="flex flex-col lg:flex-row gap-24"
        >
            {/* Produits */}
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
                {products.map((product) => (
                    <ProductCardLayout
                        key={product.id}
                        product={product}

                        button={<Button onClick={()=>addLine(product)} variant={"ghost"} fullWidth>Ajouter au panier</Button>}
                    />

                ))}
            </section>
            

            {/* /Produits */}

            {/* Panier */}
            <Cart></Cart>
            {/* /Panier */}
        </SectionContainer>
    );
}