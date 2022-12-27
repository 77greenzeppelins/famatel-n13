import React from 'react';
/*Components*/
import SvgLogo from '../../../../SVG/logo/SvgLogo';
import AriaJSLink from '../../../../_basicComponents/links/ariaJSLink/AriaJSLink';
/**Hook Section**/
import { useRouter } from 'next/router';
/**BasicData*/
import { pagesUrl } from '../../../../../data/_data';

/******************************************************************************/
const HeaderLogoLink = () => {
  /**Staff for condition that switches between dark and lighr svgPath...*/
  const { pathname } = useRouter();
  const condition =
    pathname === pagesUrl.produkty || pathname === pagesUrl.kontakt;
  /**JSX*/
  return (
    <AriaJSLink
      linkHref={'/'}
      controlsSet={{ background: 'transparent' }}
      controlsStart={{
        background: 'transparent',
      }}
      aStyle="relative cursor-pointer fc bg-transparent select-none touch-none focus:outline-none group "
    >
      <div className="flex justify-start cursor-pointer no-sparkling">
        <SvgLogo scaleFactor={0.25} animationCondition={condition} />
      </div>
    </AriaJSLink>
  );
};

export default HeaderLogoLink;
