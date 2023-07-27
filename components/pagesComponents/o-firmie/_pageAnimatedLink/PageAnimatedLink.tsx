/**Components*/
import AnimatedLabel from '../../../multipagesComponents/pseudoHeaders/animatedLabel/AnimatedLabel';
import LinkAsContainer from '../../../_basicComponents/links/linkAsContainer/LinkAsContainer';
/**Framer Motion Staff**/
import { simpleOpacityVariants } from '../../../../utils/framerMotion/framerMotionUtils';
// import LinkWithSpanAndIcon from '../../../_basicComponents/links/linkWithSpanAndIcon/LinkWithSpanAndIcon';
// /**HardCoded Staff*/
// const defaultTextStyle =
//   'text-corpo text-left text-[1.25rem] xs:text-[1.5rem] md:text-[1.75rem] xxl:text-[2.25rem] tracking-[2px] leading-tight group-hover:text-light';
// const defaultLayoutStyle = 'flex items-center w-fit max-w-[750px] disable-soft';
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
    <LinkAsContainer
      linkHref={linkHref}
      ariaLabel="Link do strony: Kategorie Produktów"
      linkStyle="flex items-center w-fit px-4 py-2 rounded-sm border border-corpo hover:bg-corpo group ease-in duration-[0.4s] delay-[0.1s]"
    >
      <AnimatedLabel
        customeVariants={simpleOpacityVariants}
        uniqueKey={linkHref}
        label="Poznaj kategorie produktów"
        hasIcon={true}
        textStyle="text-corpo font-normal header-link-label group-hover:text-dark group-hover:font-bold ease-in duration-[0.4s] delay-[0.1s]"
        iconStyle="fc h-6 w-6 min-w-6 min-h-6 aspect-square stroke-corpo group-hover:stroke-dark group-hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0"
      />
    </LinkAsContainer>
  );

  // return (
  //   <LinkWithSpanAndIcon
  //     uniqueKeyToAnimate={''} //___empty means no animation in <span>
  //     linkHref={linkHref}
  //     linkLabel={'Poznaj kategorie produktów'}
  //     ariaLabel={`Link do strony: Kategorie Produktów`}
  //     linkStyle="fc gap-4 h-full xl:h-full group px-4 py-1 xl:py-4 bg-corpo rounded-sm"
  //     spanStyle={`${textStyle ? textStyle : defaultTextStyle} ${
  //       layoutStyle ? layoutStyle : defaultLayoutStyle
  //     }  ease-in duration-[0.4s] delay-[0.1s] `}
  //     iconStyle="fc h-4 w-4  aspect-square stroke-dark group-hover:stroke-light group-hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0"
  //   />
  // );
};

export default PageAnimatedLink;
/*
return(
<LinkAsContainer
          linkHref={linkHref}
          ariaLabel="Link do strony: Kategorie Produktów"
          linkStyle="flex items-center w-fit px-4 py-2 rounded-sm bg-corpo group "
        >
          <AnimatedLabel
            customeVariants={simpleOpacityVariants}
            uniqueKey={categoryIndex}
            label="Poznaj kategorie produktów"
            hasIcon={true}
            textStyle="text-dark font-bold header-link-label group-hover:text-light group-hover:font-normal ease-in duration-[0.4s] delay-[0.1s]"
            iconStyle="fc h-6 w-6 min-w-6 min-h-6 aspect-square stroke-dark group-hover:stroke-light group-hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0"
          />
        </LinkAsContainer>
        )

*/
