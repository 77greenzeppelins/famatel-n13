import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

/**TS**/
interface Props {
  children: React.ReactNode; // empty if no animation needed
  linkHref: string;
  ariaLabel: string;
  linkStyle?: string;
}

/**----------------------------**/
const LinkAsContainer = ({
  children,
  linkHref,
  ariaLabel,
  linkStyle,
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
        linkStyle ? linkStyle : 'flex items-center  group '
        //___w-fit
      }
    >
      {children}
    </Link>
  );
};

export default LinkAsContainer;
