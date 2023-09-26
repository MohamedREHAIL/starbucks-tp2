import { FC, memo } from "react";
import { OrderData } from "../../types";
import { cva } from "class-variance-authority";

type Props = {
  /**
   * Le statut de la commande
   */
  status: OrderData['status']
}

const STATUS_LABELS: Record<OrderData['status'], string> = {
  IN_PROGRESS: 'En cours',
  COMPLETED: 'Complétée',
} as const; 

const variants = cva(
  "rounded-full px-4 py-1 text-xs uppercase font-bold select-none",
  {
    variants: {
      status: {
        IN_PROGRESS: 'bg-amber-50 text-amber-600',
        COMPLETED: 'bg-brand-50 text-brand',
      } satisfies Record<OrderData['status'], string>
    }
  }
)

/**
 * Affiche le statut de la commande sous forme de badge
 */
const OrderStatus: FC<Props> = memo(function({status}) {
  return <span className={variants({status})}>{STATUS_LABELS[status]}</span>;
});

OrderStatus.displayName = "OrderStatus";
export {OrderStatus};