import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

/**TS**/
import { IF_LinkData } from '../../../../../utils/TS/typeScriptStaff';

/**---------------------------**/

const FooterLink: React.FC<IF_LinkData> = ({ url, label }) => {
  /*useRouter Section
  why: for style sake;  I want link to be in corpo color 
  when user is on its corresponding page
  */
  const router = useRouter();
  const linkStyleIfRouterMatches = router.pathname === url;
  /**staff for setting arai-current*/
  const isActive = router.asPath === url;

  /**JSX**/

  return (
    <li
      data-component="NavLink_container"
      className="relative flex-col overflow-hidden fc"
    >
      <Link
        href={url}
        aria-label={`Link do strony ${label}`}
        aria-current={isActive ? 'page' : undefined}
        scroll={false}
        className={'relative flex flex-col gap-y-[3px] w-full group'}
      >
        <span
          className={`p-small  text-left ${
            linkStyleIfRouterMatches
              ? 'text-corpo'
              : 'text-grey group-hover:text-light duration-[0.3s] delay-[0.1s] ease-in'
          } ${linkStyleIfRouterMatches ? 'cursor-default' : 'cursor-pointer'}`}
        >
          {label}
        </span>
        <span className=" w-full h-[1px] border-b border-greyShade2 group-hover:border-grey duration-300 delay-100 ease-in" />
      </Link>
    </li>
  );
};

export default FooterLink;
