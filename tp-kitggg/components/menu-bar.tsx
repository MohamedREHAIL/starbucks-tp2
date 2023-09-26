import Image from "next/image";
import { FC, ReactNode, memo } from "react";
import LogoStarbucks from "../assets/starbucks-logo.svg";
import Link from "next/link";

type Props = {
  /**
   * Un composant optionnel pouvant être rendu à **gauche** de la navbar
   */
  leading?: ReactNode,
  /**
   * Un composant optionnel pouvant être rendu à **droite** de la navbar
   */
  trailing?: ReactNode,
};

/**
 * La barre de menu du haut du site
 */
const MenuBar: FC<Props> = memo(function ({leading, trailing}) {
  return (
    <nav className="bg-white shadow-2xl shadow-gray-600/10 sticky inset-x-0 top-0 z-20 p-4 lg:px-8">
      <div className="container mx-auto grid grid-cols-3 gap-8 relative">
        {leading ? leading : <section></section>}

        <section className="flex justify-center">
          <Link href={'/'} className="transition-colors hover:bg-black/10 active:bg-black/20 block p-1 rounded-full">
            {/* Logo */}
            <Image
              src={LogoStarbucks}
              alt="Logo Starbucks"
              className="select-none pointer-events-none"
              height={50}
              width={50}
            />
          </Link>
        </section>

        {trailing ? trailing : <section></section>}
      </div>
    </nav>
  );
});

MenuBar.displayName = "MenuBar";
export { MenuBar };
