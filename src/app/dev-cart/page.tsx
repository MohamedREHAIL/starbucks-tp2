"use client";
import { PRODUCTS_CATEGORY_DATA } from "../../../tp-kit/data";
import { Button, ProductCardLayout, SectionContainer,ProductCartLine } from "../../../tp-kit/components";
import {Card} from "tp-kit/components";
import {addLine, computeCartTotal, computeLineSubTotal, removeLine, updateLine} from "../../hooks/use-cart";
import {useEffect} from "react";
import {useStore} from "../../hooks/use-cart";


export default function DevCartPage() {
    const products = PRODUCTS_CATEGORY_DATA[0].products.slice(0, 3);
    // const { lines } = useStore();
    const lines = useStore((state) => state.lines)

    useEffect(() => {
        console.log(lines);
    }, [lines]);

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
            {/*<pre>{JSON.stringify(lines, null, 2)}</pre>*/}

            {/* /Produits */}

            {/* Panier */}

                <section className="w-full lg:w-1/3 space-y-8">
                    <h2>Mon Panier</h2>
                    {lines.map((product)=>(
                        <>
                            <ProductCartLine key={product.product.id} product={product.product} qty={product.qty} onQtyChange={(qty)=>updateLine({...product, qty})} onDelete={()=>removeLine(product.product.id)} ></ProductCartLine>

                        </>

                    ))}
                    <div className="flex justify-between">
                        <h3>Total</h3>
                        <div>{computeCartTotal(lines.map(p=>p))}</div>
                    </div>
                    <Button variant={"primary"} fullWidth>Commander</Button>
                    <Button variant={"outline"} fullWidth>Vider le panier</Button>


                </section>


            {/* /Panier */}
        </SectionContainer>
    );
}