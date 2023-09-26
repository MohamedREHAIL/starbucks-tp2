import { FC, memo } from "react";

type Props = {
  /**
   * Le prix à formatter
   */
  price: number,
  /**
   * Classes HTML additionnelles optionnelles
   */
  className?: string
}

/**
 * Formate un nombre pour qu'il soit affiché sous forme de prix. **Un arrondi est opéré au delà de 2 décimales.**
 */
const FormattedPrice: FC<Props> = memo(function({price, className = ''}) {
  return <span className={className}>{price.toFixed(2).replace('.', ',')} €</span>;
});

FormattedPrice.displayName = "FormattedPrice";
export {FormattedPrice};