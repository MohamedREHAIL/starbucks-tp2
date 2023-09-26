"use client";

import { useRouter } from "next/navigation";
import { useCallback, FC, memo } from "react";
import { OrderData } from "../../types";
import { OrderStatus } from "./order-status";
import { FormattedDate, FormattedPrice } from "../data-display";
import { Button } from "../button";
import { ProductImage } from "../products/product-image";

type Props = {
  order: OrderData;
};

/**
 * Affiche le détail d'une commande
 */
const OrderDetailsLayout: FC<Props> = memo(function ({ order }) {
  const router = useRouter();
  const handleClose = useCallback(() => {
    router.replace("/mon-compte");
  }, [router]);

  return (
    <div className="space-y-6">
      <header className="flex flex-row justify-between">
        <h2 className="text-lg font-bold">
          Commande n°{order.id}
        </h2>

        <OrderStatus status={order.status} />
      </header>

      <div className="grid md:grid-cols-2 gap-4">
        <p>
          <span className="tracking-loose uppercase block text-xs">Créée le</span>
          <FormattedDate date={order.createdAt} />
        </p>

        {order.completedAt && <p>
          <span className="tracking-loose uppercase block text-xs">Complétée le</span>
          <FormattedDate date={order.completedAt} />
        </p>}
      </div>

      <ul className="">
        {order.lines.map(line => <li key={line.id} className="py-4 grid grid-cols-4 gap-4">
          <div className="rounded-lg overflow-hidden">
            <ProductImage 
              img={line.product.img} 
              name={line.product.name}
              height={100}
              width={100}
              className="w-full aspect-square"
            />
          </div>

          <div className="col-span-3 flex flex-col justify-between">
            <div className="text-sm">
              <h3 className="font-medium uppercase tracking-widest">{line.product.name}</h3>
              <p className="text-slate-700">Prix unitaire : <FormattedPrice price={line.product.price} /></p>
            </div>

            <div className="flex items-end justify-between gap-4">
              <div>Qté : x{line.qty}</div>
              <div>Sous-total : <FormattedPrice price={line.subtotal} /></div>
            </div>
          </div>
        </li>)}
      </ul>

      <div className="grid grid-cols-2 gap-6 font-bold">
        <p className="">Total</p>
        <p className="text-right"><FormattedPrice price={order.total} /></p>
      </div>

      <Button variant={"ghost"} fullWidth size={"lg"} onClick={handleClose}>
        Retour
      </Button>
    </div>
  );
});

OrderDetailsLayout.displayName = "OrderDetailsLayout";
export { OrderDetailsLayout };
