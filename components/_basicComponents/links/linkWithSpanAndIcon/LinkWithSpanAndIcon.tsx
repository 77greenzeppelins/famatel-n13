import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
/**Components*/
import ArrowLongRightIcon from '../../../SVG/icons/ArrowLongRightIcon';
import AnimatedSpanHeader from '../../../multipagesComponents/pseudoHeaders/animatedSpanHeader/AnimatedSpanHeader';

/**TS**/
interface Props {
  uniqueKeyToAnimate: string; // empty if no animation needed
  linkHref: string;
  linkLabel: string;
  ariaLabel: string;
  linkStyle?: string;
  //___
  spanStyle?: string;
  iconStyle?: string;
}

/**----------------------------**/
const LinkWithSpanAndIcon = ({
  uniqueKeyToAnimate,
  linkHref,
  linkLabel,
  ariaLabel,
  linkStyle,
  spanStyle,
  iconStyle,
}: Props) => {
  /**staff for setting arai-current*/
  const router = useRouter();
  const isActive = router.asPath === linkHref;

  /**JSX**/
  return (
    <Link
      href={linkHref}
      aria-label={ariaLabel ? ariaLabel : 'link'}
      aria-current={isActive ? 'page' : undefined}
      scroll={false}
      className={
        linkStyle
          ? linkStyle
          : ' flex flex-col items-center justify-center w-full h-full xl:h-full group'
      }
    >
      {uniqueKeyToAnimate ? (
        <AnimatedSpanHeader
          uniqueKey={uniqueKeyToAnimate}
          label={linkLabel}
          spanStyle={spanStyle}
        />
      ) : (
        <span className={spanStyle}>{linkLabel}</span>
      )}

      <ArrowLongRightIcon
        containerStyle={
          iconStyle
            ? iconStyle
            : 'fc h-6 w-6 min-w-6 min-h-6 aspect-square stroke-greyShade1 group-hover:stroke-light group-hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0'
        }
      />
    </Link>
  );
};

export default LinkWithSpanAndIcon;
