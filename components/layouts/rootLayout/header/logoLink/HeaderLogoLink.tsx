import React from 'react';
import Link from 'next/link';
/*Components*/
import SvgLogo from '../../../../SVG/logo/SvgLogo';
// import AriaJSLink from '../../../../_basicComponents/links/ariaJSLink/AriaJSLink';
/**Hook Section**/
// import { useRouter } from 'next/router';
// /**BasicData*/
// import { pagesUrl } from '../../../../../data/_data';

/******************************************************************************/
const HeaderLogoLink = () => {
  /**JSX*/
  return (
    <Link href={'/'} scroll={false} className="pointer-events-auto">
      <div className="flex justify-start cursor-pointer no-sparkling">
        <SvgLogo />
      </div>
    </Link>
    // </AriaJSLink>
  );
};

export default HeaderLogoLink;
