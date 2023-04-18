import React from 'react';
import Link from 'next/link';
/*Components*/
import SvgLogo from '../../../../SVG/logo/SvgLogo';
import { useRouter } from 'next/router';

/**------------------------------**/
const HeaderLogoLink = () => {
  /**staff for setting arai-current*/
  const router = useRouter();
  const isActive = router.asPath === '/';
  /**JSX*/
  return (
    <Link
      href={'/'}
      aria-label={`Link do strony O Firmie`}
      aria-current={isActive ? 'page' : undefined}
      scroll={false}
      className="pointer-events-auto"
    >
      <span className="flex justify-start cursor-pointer disable-soft">
        <SvgLogo />
      </span>
    </Link>
  );
};

export default HeaderLogoLink;
