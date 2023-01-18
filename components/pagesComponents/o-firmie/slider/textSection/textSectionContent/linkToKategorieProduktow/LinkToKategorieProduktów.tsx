import React from 'react';
/**Components**/
import AriaJSLink from '../../../../../../_basicComponents/links/ariaJSLink/AriaJSLink';
import LinkWithArrowIcon from '../../../../../../SVG/icons/LinkWithArrowIcon';
/**Basic Data**/
import { corpoColors, pagesUrl } from '../../../../../../../data/_data';

/**-----------------------------------------------**/
const LinkToKategorieProduktów = () => {
  /**JSX**/
  return (
    <div className="h-[40px]">
      <AriaJSLink
        linkHref={pagesUrl.produkty}
        controlsSet={{ background: corpoColors.greyTint1 }}
        controlsStart={{
          background: 'transparent', //dark
          transition: { duration: 0.4 },
        }}
        ariaLabel='Link do strony: "Kategorie Produktów"'
        aStyle="fc gap-4 h-full border border-greyTint1 hover:border-corpo rounded-sm bg-transparent focus:outline-none group"
      >
        <p
          className={`header-link-label text-greyTint1 group-hover:text-corpo ease-in duration-300 px-2`}
        >
          Poznaj kategorie produktów
        </p>
        <LinkWithArrowIcon
          containerStyle="fc h-full aspect-square stroke-greyTint1 group-hover:stroke-corpo group-hover:translate-x-1 ease-in duration-300 scale-[0.75] origin-center"
          // pathStyle="scale-[0.75] origin-center "
        />
      </AriaJSLink>
    </div>
  );
};

export default LinkToKategorieProduktów;
