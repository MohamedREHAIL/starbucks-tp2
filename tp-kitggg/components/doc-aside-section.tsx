import { FC, ReactNode, memo } from "react";

type Props = {
  children: ReactNode,
  aside: ReactNode
}

const DocAsideSection: FC<Props> = memo(function({children, aside}) {
  return <div className="grid lg:grid-cols-3 gap-6 !my-12">
    <div className="lg:col-span-2">
      {children}
    </div>

    <div className="relative">
      <div className="sticky top-12">
        {aside}
      </div>
    </div>
  </div>;
});

DocAsideSection.displayName = "DocAsideSection";
export {DocAsideSection};