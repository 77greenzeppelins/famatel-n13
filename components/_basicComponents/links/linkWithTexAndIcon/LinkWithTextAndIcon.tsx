import React from 'react';
/**Components**/
import AriaJSLink from '../ariaJSLink/AriaJSLink';
import ArrowLongRightIcon from '../../../SVG/icons/ArrowLongRightIcon';
import SmallPseudoHeader from '../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';
// import LinkWithArrowIcon from '../../../SVG/icons/LinkWithArrowIcon';
/**Basic Data**/
import { corpoColors } from '../../../../data/_data';

/**Hardcoded Data**/
const mainContinerDefaultStyle = '';
const defaultAStyle =
  'fc gap-4 h-full border border-greyShade1 hover:border-corpo ease-in duration-[0.4s] delay-[0.1s] bg-transparent focus:outline-none group pr-2 py-1';

/**----------------------------------------------------------------**/
const LinkWithTextAndIcon: React.FunctionComponent<{
  linkHref: string;
  ariaLabel?: string;
  mainContainerStyle?: string;
  aStyle?: string;
  //__for <SmallPseudoHeader>
  pLabel: string;
  hasBox?: boolean;
  hasVerticalOrnament?: boolean;
  boxStyle?: string;
  pStyle?: string;
}> = ({
  linkHref,
  ariaLabel,
  mainContainerStyle,
  aStyle,
  //__for <SmallPseudoHeader>
  pLabel,
  hasBox,
  hasVerticalOrnament,
  boxStyle,
  pStyle,
}) => {
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
        aStyle={aStyle ? aStyle : defaultAStyle}
      >
        <SmallPseudoHeader
          text={pLabel}
          hasBox={hasBox}
          hasVerticalOrnament={hasVerticalOrnament}
          boxStyle={
            boxStyle
              ? boxStyle
              : 'h-[10px] md:h-[14px] aspect-square bg-transparent'
          }
          textStyle={
            pStyle
              ? pStyle
              : `flex items-center h-full header-link-label text-grey group-hover:text-light ease-in duration-[0.4s] delay-[0.1s] px-2 `
          }
        />

        <ArrowLongRightIcon containerStyle="fc h-6 w-6 aspect-square stroke-greyShade1 group-hover:stroke-light group-hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center " />
      </AriaJSLink>
    </div>
  );
};

export default LinkWithTextAndIcon;

//____usage__1:
{
  /* <LinkWithTextAndIcon
  linkHref={pagesUrl.produkty}
  pLabel={'Poznaj kategorie produktów'}
/>; */
}
//____usage__2 / <ProductDescription>:
{
  /* <LinkWithTextAndIcon
  linkHref={linkHref}
  // mainContainerStyle="w-[90%]"
  aStyle="fc gap-4 h-full  bg-transparent focus:outline-none "
  //___ for <SmallPseudoHeader>
  hasBox={true}
  hasVerticalOrnament={false}
  pLabel={l2}
  pStyle="flex items-center h-full p-medium text-grey group-hover:text-light ease-in duration-[0.4s] delay-[0.1s]"
/>; */
}
