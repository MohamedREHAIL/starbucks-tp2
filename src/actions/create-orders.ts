"use server"
import prisma from '../utils/prisma';
import {clearCart, computeCartTotal, computeLineSubTotal} from "../hooks/use-cart";


export async function createOrder(cartData) {
    try {



        const createdOrder = await prisma.order.create({
            data: {
                status: 'COMPLETED',
                completedAt:new Date(),
                lines: {
                    create: cartData.lines.map(line => ({
                        qty: line.qty,
                        product: { connect: { id: line.product.id } },
                        subtotal: line.product.price*line.qty,
                    })),
                },
                total:cartData.lines.reduce((total,line)=>total+line.product.price*line.qty,0),

            },
            include: {
                lines: true,
            },
        });
        cartData.lines=[]


        return createdOrder;
    } catch (error) {
        console.error('Erreur lors de la création de la commande avec Prisma :', error);
        throw error;
    }
}
