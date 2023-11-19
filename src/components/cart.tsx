"use client"
import {computeCartTotal, removeLine, updateLine, useStore} from "../hooks/use-cart";
import {Button, Card} from "tp-kit/components";
import {ProductCartLine} from "tp-kit/components/products";
import {useEffect} from "react";
import {CartCounter} from "./cart-counter";
import {createOrder} from "../actions/create-orders";


export function Cart(){

    const lines = useStore((state) => state.lines)

    const HandleCommander=async ()=>{
        const cartData = {
            lines: lines.map((product) => ({ product: product.product, qty: product.qty })),
        };

         await createOrder(cartData);
    }
    useEffect(() => {
        console.log(lines);
    }, [lines]);



    return(<>


            <section className="w-full space-y-8">
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
                <Button onClick={HandleCommander} variant={"primary"} fullWidth>Commander</Button>
                <Button variant={"outline"} fullWidth>Vider le panier</Button>


            </section>



    </>)
}