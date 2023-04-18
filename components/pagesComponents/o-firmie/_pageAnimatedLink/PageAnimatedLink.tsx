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
      linkStyle="fc gap-4 h-full xl:h-full group px-4 py-1 xl:py-4 bg-corpo rounded-sm"
      spanStyle={`${textStyle ? textStyle : defaultTextStyle} ${
        layoutStyle ? layoutStyle : defaultLayoutStyle
      }  ease-in duration-[0.4s] delay-[0.1s] `}
      iconStyle="fc h-4 w-4  aspect-square stroke-dark group-hover:stroke-light group-hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0"
    />
  );
};

export default PageAnimatedLink;
