import { create } from 'zustand'
import {CartData, ProductLineData} from "../types";
import {set} from "zod";
import {ProductData} from "tp-kit/types";

const useStore = create<CartData>(function (){
    return {
        lines:[]
    }

})

// [...]

/**
 * Ajoute une nouvelle ligne au panier.
 * Si le produit est déjà dans le panier, augmente la quantité de 1.
 *
 * @param product
 */
export function addLine(product: ProductData) {}

/**
 * Modifie une ligne produit du panier
 *
 * @param line
 */
export function updateLine(line: ProductLineData) {}

/**
 * Supprime la ligne produit du panier
 *
 * @param productId
 * @returns
 */
export function removeLine(productId: number) {}

/**
 * Vide le contenu du panier actuel
 */
export function clearCart() {}

/**
 * Calcule le total d'une ligne du panier
 */
export function computeLineSubTotal(line: ProductLineData): number {}

/**
 * Calcule le total du panier
 */
export function computeCartTotal(lines: ProductLineData[]): number {}