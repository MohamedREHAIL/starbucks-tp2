import { FC, memo } from "react";
import Image from "next/image";
import { FOOTER_SECTION_DATA as sections } from "../data/footer-sections.data";
import StarbucksWhiteLogo from '../assets/starbucks-logo-opacity-white.svg';

type Props = {
};

/**
 * Le footer du site
 */
const Footer: FC<Props> = memo(function () {
  return (
    <footer className="bg-green-600 pb-[100px] text-white relative overflow-hidden">
      <div className="text-center lg:text-left text-xl lg:text-3xl uppercase font-bold tracking-widest container mx-auto p-8">
        Starbucks
      </div>

      <Image
        className="opacity-[0.05] absolute left-0 top-8 lg:top-1/2 lg:-translate-y-1/2 -translate-x-1/2 select-none pointer-events-none"
        src={StarbucksWhiteLogo}
        width={800}
        height={800}
        alt="Logo Starbucks"
      />

      <div className="p-8 bg-brand">
        <div className="grid lg:grid-cols-4 gap-8 container mx-auto">
          {/* Col #1 */}
          <div className="hidden lg:block"></div>

          {/* Col #2 */}
          {sections.map((col, colKey) => (
            <div key={colKey} className="space-y-12">
              {col.map((section, sectionKey) => (
                <div key={sectionKey}>
                  <h2 className="font-medium text-2xl tracking-wide mb-4">
                    {section.heading}
                  </h2>
                  <ul className=" space-y-2 text-sm">
                    {section.items.map((item, key) => (
                      <li key={key} className="text-white/50 hover:text-white transition-colors cursor-pointer">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
export { Footer };
