import { FC, ReactNode, memo } from "react";

type Props = {
  className?: string,
  children: ReactNode,
}

const Card: FC<Props> = memo(function({children, className}) {
  return <div className={`bg-white shadow-xl p-6 rounded-lg ${className}`}>{children}</div>;
});

Card.displayName = "Card";
export {Card};