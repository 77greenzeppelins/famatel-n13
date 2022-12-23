import React from 'react';
import Link from 'next/link';
/*Components*/
import SvgLogo from '../../../../SVG/logo/SvgLogo';
import AriaJSLink from '../../../../_basicComponents/links/ariaJSLink/AriaJSLink';

/******************************************************************************/
const HeaderLogoLink = () => {
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
        <SvgLogo scaleFactor={0.25} />
      </div>
    </AriaJSLink>
  );
};

export default HeaderLogoLink;
