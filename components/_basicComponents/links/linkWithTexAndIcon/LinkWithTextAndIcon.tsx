import React from 'react';
/**Components**/
import AriaJSLink from '../ariaJSLink/AriaJSLink';
import LinkWithArrowIcon from '../../../SVG/icons/LinkWithArrowIcon';
/**Basic Data**/
import { corpoColors } from '../../../../data/_data';
/**Hardcoded Data**/
const mainContinerDefaultStyle = 'h-[40px]';

/**----------------------------------------------------------------**/
const LinkWithTextAndIcon: React.FunctionComponent<{
  linkHref: string;
  pLabel: string;
  ariaLabel?: string;
  mainContainerStyle?: string;
}> = ({ linkHref, pLabel, ariaLabel, mainContainerStyle }) => {
  /**JSX**/
  return (
    <div
      className={
        mainContainerStyle ? mainContainerStyle : mainContinerDefaultStyle
      }
    >
      <AriaJSLink
        linkHref={linkHref}
        controlsSet={{ background: corpoColors.greyTint1 }}
        controlsStart={{
          background: 'transparent', //dark
          transition: { duration: 0.4 },
        }}
        ariaLabel={ariaLabel}
        aStyle="fc gap-4 h-full border border-greyTint1 hover:border-corpo rounded-sm bg-transparent focus:outline-none group"
      >
        <p
          className={`header-link-label text-greyTint1 group-hover:text-corpo ease-in duration-300 px-2`}
        >
          {pLabel}
        </p>
        <LinkWithArrowIcon
          containerStyle="fc h-full aspect-square stroke-greyTint1 group-hover:stroke-corpo group-hover:translate-x-1 ease-in duration-300 scale-[0.75] origin-center"
          // pathStyle="scale-[0.75] origin-center "
        />
      </AriaJSLink>
    </div>
  );
};

export default LinkWithTextAndIcon;

//____usage:
{
  /* <LinkWithTextAndIcon
  linkHref={pagesUrl.produkty}
  pLabel={'Poznaj kategorie produktów'}
/>; */
}
