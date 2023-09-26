import { type VariantProps, cva } from "class-variance-authority";
import { FC, ReactNode, memo } from "react";

const variants = cva("tracking-widest uppercase", {
  variants: {
    size: {
      lg: "text-xl",
      md: "text-base",
      sm: "text-sm",
    },
    variant: {
      brand: "text-brand",
      black: "text-slate-800",
    },
    weight: {
      normal: "font-normal",
      bold: "font-bold",
    }
  },
});

type Props = VariantProps<typeof variants> & {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  children: ReactNode;
};

const Heading: FC<Props> = memo(function ({
  as: Comp,
  className = "",
  children,
  ...props
}) {
  return <Comp className={`${variants(props)} ${className}`}>{children}</Comp>;
});

Heading.displayName = "Heading";
export { Heading };
