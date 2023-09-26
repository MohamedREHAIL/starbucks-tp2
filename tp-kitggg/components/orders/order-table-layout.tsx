"use client";

import { FC, memo } from "react";
import { type OrderTableRowData } from "../../types";
import { FormattedDate, FormattedPrice } from "../data-display";
import { OrderStatus } from "./order-status";


type Props = {
  /**
   * Liste des commandes à afficher
   */
  orders: OrderTableRowData[];
  /**
   * Fonction appelée lors d'un clic sur une ligne
   * 
   * @param order 
   * @returns 
   */
  onRowClick: (order: OrderTableRowData) => void, 
};

/**
 * Affichage d'une liste de commandes
 */
const OrderTableLayout: FC<Props> = memo(function ({ orders, onRowClick }) {
  return (
    <div className="flex">
      <table className="-mx-6 flex-1 select-none">
        <thead>
          <tr className="text-sm uppercase">
            <th className="w-[70px] border-b border-slate-100 px-2 py-4 pl-6 text-left">
              N°
            </th>
            <th className="border-b border-slate-100 px-2 py-4 text-left">
              Statut
            </th>
            <th className="border-b border-slate-100 px-2 py-4 text-right pr-6">
              Total
            </th>
          </tr>
        </thead>
        <tbody className="text-slate-700">
          {orders.map((order) => (
            <tr key={order.id} className="group" onClick={() => onRowClick(order)}>
              <td className="cursor-pointer border-b border-slate-100 px-2 py-4 pl-6 transition-colors group-active:bg-slate-100 group-last:!border-b-0 group-hover:bg-slate-50">
                #{order.id}
              </td>
              <td className="cursor-pointer border-b border-slate-100 px-2 py-4 transition-colors group-active:bg-slate-100 group-last:!border-b-0 group-hover:bg-slate-50">
                <OrderStatus status={order.status} />
                <span className="hidden md:inline">
                  {order.completedAt ? " Terminée le " : " Crée le "}
                  <FormattedDate date={order.completedAt ?? order.createdAt} />
                </span>
              </td>
              <td className="cursor-pointer border-b border-slate-100 px-2 py-4 pr-6 text-right transition-colors group-active:bg-slate-100 group-last:!border-b-0 group-hover:bg-slate-50">
                <FormattedPrice price={order.total} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

OrderTableLayout.displayName = "OrderTableLayout";
export { OrderTableLayout };
