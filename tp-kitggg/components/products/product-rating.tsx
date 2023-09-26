'use client';

import { Rating } from "@mantine/core";
import { FC, memo } from "react";
import { Circle, Star } from "@phosphor-icons/react";

type Props = {
  /**
   * Taille des icônes exprimée en px
   * @default 16
   */
  size?: number,
  /**
   * Note sur entre 0 et 5
   */
  value: number,
  /**
   * Conditionne le type d'icône affichées pour la notation
   * @default star
   */
  icon?: 'star' | 'circle'
}

/**
 * Utilisé pour affiché une note entre 0 et 5
 */
const ProductRating: FC<Props> = memo(function({icon = 'star', value, size = 16}) {
  return <Rating 
    value={value}
    readOnly
    emptySymbol={icon === 'star'
      ? <Star weight="bold" className="text-200" size={size} />
      : <Circle weight="bold" className="text-200" size={size * 0.9} />
    } 
    fullSymbol={icon === 'star' 
      ? <Star weight="fill" className="text-brand" size={size} />
      : <Circle weight="fill" className="text-brand" size={size * 0.9} />
    }
  />;
});

ProductRating.displayName = "ProductRating";
export {ProductRating};