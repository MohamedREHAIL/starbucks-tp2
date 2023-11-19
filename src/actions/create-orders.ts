"use server"
import prisma from '../utils/prisma';
import {clearCart} from "../hooks/use-cart";

export async function createOrder(cartData) {
    try {

        const createdOrder = await prisma.order.create({
            data: {
                status: 'IN_PROGRESS',
                lines: {
                    create: cartData.lines.map(line => ({
                        qty: line.qty,
                        product: { connect: { id: line.product.id } },
                    })),
                },
            },
            include: {
                lines: true,
            },
        });
        await clearCart();


        return createdOrder;
    } catch (error) {
        console.error('Erreur lors de la création de la commande avec Prisma :', error);
        throw error;
    }
}
