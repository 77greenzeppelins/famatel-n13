import React from 'react';
/**Components*/
import AnimatedLink from '../../kategorie-produktow/section_1/navSection/animatedLink/AnimatedLink';
/**HardCoded Staff*/
const defaultTextStyle =
  'text-corpo text-left text-[1.25rem] xs:text-[1.5rem] md:text-[1.75rem] xxl:text-[2.25rem] tracking-[2px] leading-tight group-hover:text-light';
const defaultLayoutStyle = 'flex items-center w-fit max-w-[750px] disable-soft';
/**TS**/
interface Props {
  linkHref: string;
  textStyle?: string;
  layoutStyle?: string;
}
/**------------------------------**/
const PageAnimatedLink = ({ linkHref, textStyle, layoutStyle }: Props) => {
  /**JSX**/
  return (
    <AnimatedLink
      linkHref={linkHref}
      linkLabel={'Poznaj kategorie produktów'}
      ariaLabel={`Link do strony: Kategorie Produktów`}
      linkStyle="fc gap-4 w-full h-full xl:h-full group px-4 xl:py-4 border border-greyShade2"
      spanStyle={`${textStyle ? textStyle : defaultTextStyle} ${
        layoutStyle ? layoutStyle : defaultLayoutStyle
      }  ease-in duration-[0.4s] delay-[0.1s] `}
      iconStyle="fc h-6 w-6 min-w-6 min-h-6 aspect-square stroke-corpo group-hover:stroke-light group-hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0"
    />
  );
};

export default PageAnimatedLink;
