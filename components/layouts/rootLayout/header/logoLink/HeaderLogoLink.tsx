import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
/*Components*/
import SvgLogo from '../../../../SVG/logo/SvgLogo';
/**BasicData*/
import { corpoColors } from '../../../../../data/_data';

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
      className="fc pointer-events-auto h-full "
    >
      {/* <span className="fc h-full cursor-pointer disable-soft bg-light"> */}
      <SvgLogo fillColorText={corpoColors.dark} />
      {/* </span> */}
    </Link>
  );
};

export default HeaderLogoLink;
