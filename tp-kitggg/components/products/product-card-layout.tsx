import { FC, ReactNode, memo } from "react";
import { ProductImage } from "./product-image";
import Link from "next/link";
import { ProductData } from "../../types";
import { FormattedPrice } from "../data-display/formatted-price";

type Props = {
  /**
   * Classes HTML additionnelles
   */
  className?: string;
  /**
   * Données produits
   */
  product: ProductData;
  /**
   * Un composant bouton qui sera affiché dans la carte
   */
  button: ReactNode;
};

/**
 * Base d'affichage pour un produit. **Il ne reste plus qu'à ajouter un joli bouton** !
 */
const ProductCardLayout: FC<Props> = memo(function (props) {
  const productUrl = `/${props.product.path}`;

  return (
    <div className={props.className}>
      <div className="overflow-hidden rounded-lg cursor-pointer">
        <Link href={productUrl}>
          <ProductImage
            className="!w-full !h-auto"
            height={300}
            width={300}
            {...props.product}
          />
        </Link>
      </div>

      <div className="mt-4">
        <div className="flex flex-row justify-between items-center gap-4 mb-2">
          <h3 className="tracking-tight uppercase truncate flex-1 link">
            <Link href={productUrl}>{props.product.name}</Link>
          </h3>

          <p className="w-[64px] text-right">
            <FormattedPrice price={props.product.price} />
          </p>
        </div>

        <div className="flex flex-row justify-between items-end gap-8">
          {props.button}
        </div>
      </div>
    </div>
  );
});

ProductCardLayout.displayName = "ProductCardLayout";
export { ProductCardLayout };
