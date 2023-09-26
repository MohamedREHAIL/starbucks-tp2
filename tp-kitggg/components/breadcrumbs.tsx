import Link from "next/link";
import { FC, memo } from "react";

type Props = {
  /**
   * Les items qui constituent le fil d'Ariane
   */
  items: Array<{ label: string; url: string }>;
  /**
   * Classes additionnelles CSS
   * @default my-8
   */
  className?: string;
};

/**
 * Fil d'Ariane qui affiche à l'utilisateur la structure de la navigation du site
 */
const BreadCrumbs: FC<Props> = memo(function ({ items, className = "my-8" }) {
  return (
    <nav className={`${className}`}>
      <ul className="flex flex-row gap-2 flex-wrap text-sm text-gray-600">
        {items.map((item, i) => (
          <li key={item.url} className="flex flex-row gap-2">
            {(i+1) !== items.length ? (
              <>
                <Link
                  href={item.url}
                  className="hover:text-brand transition-colors"
                >
                  {item.label}
                </Link>
                <span>/</span>
              </>
            ) : (
              <span className="text-brand">{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
});

BreadCrumbs.displayName = "BreadCrumbs";
export { BreadCrumbs };
