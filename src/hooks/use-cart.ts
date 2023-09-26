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
export function addLine(product: ProductData) {
useStore((etat)=>{
const LigneExistant=etat.lines.find((line)=>line.product.id===product.id);
if(LigneExistant){
    LigneExistant.qty+=1
}
else{
    etat.lines.push({product,qty:1})
}

})

}

/**
 * Modifie une ligne produit du panier
 *
 * @param line
 */
export function updateLine(line: ProductLineData) {
    useStore((etat)=>{
        const ligneExistant=etat.lines.find((l)=>l.product.id===line.product.id);
        if(ligneExistant){
            ligneExistant.qty=line.qty
        }
        
        
    })
}

/**
 * Supprime la ligne produit du panier
 *
 * @param productId
 * @returns
 */
export function removeLine(productId: number) {
    useStore((etat)=>{
        etat.lines=etat.lines.filter((line)=>line.product.id!=productId)
    })
}

/**
 * Vide le contenu du panier actuel
 */
export function clearCart() {
    useStore((etat)=>{
        etat.lines=[]
    })
}

/**
 * Calcule le total d'une ligne du panier
 */
export function computeLineSubTotal(line: ProductLineData): number {
    return line.product.price*line.qty
}

/**
 * Calcule le total du panier
 */
export function computeCartTotal(lines: ProductLineData[]): number {
    return lines.reduce((total,line)=>total+computeLineSubTotal(line),0)
}