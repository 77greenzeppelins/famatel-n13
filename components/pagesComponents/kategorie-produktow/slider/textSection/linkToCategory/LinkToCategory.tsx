import React from 'react';
/**Components**/
import LinkWithArrowIcon from '../../../../../SVG/icons/LinkWithArrowIcon';
import AriaJSLink from '../../../../../_basicComponents/links/ariaJSLink/AriaJSLink';
/**BasicData**/
import {
  corpoColors,
  pagesUrl,
  mainCategories,
} from '../../../../../../data/_data';

/**---------------------------------------**/
const LinkToCategory: React.FunctionComponent<{ currentCategory: number }> = ({
  currentCategory,
}) => {
  /**JSX**/
  return (
    <div className="h-[36px]">
      <AriaJSLink
        linkHref={mainCategories[currentCategory].url}
        controlsSet={{ background: corpoColors.greyTint1 }}
        controlsStart={{
          background: corpoColors.dark, //background color
          transition: { duration: 0.4 },
        }}
        ariaLabel="Link do strony kategorii"
        aStyle="fc gap-4 h-full border border-greyTint1 hover:border-corpo rounded-sm bg-transparent focus:outline-none group"
      >
        <p
          className={`header-link-label text-greyTint1 group-hover:text-corpo ease-in duration-300 px-2`}
        >
          Poznaj szczegóły kategorii
        </p>
        <LinkWithArrowIcon
          containerStyle="fc h-full aspect-square stroke-greyTint1 group-hover:stroke-corpo group-hover:translate-x-1 ease-in duration-300 scale-[0.75] origin-center"
          // pathStyle="scale-[0.75] origin-center "
        />
      </AriaJSLink>
    </div>
  );
};

export default LinkToCategory;
