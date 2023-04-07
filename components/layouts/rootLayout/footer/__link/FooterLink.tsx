import { useRouter } from 'next/router';
import React from 'react';
import AriaJSLink from '../../../../_basicComponents/links/ariaJSLink/AriaJSLink';

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

  /**JSX**/
  return (
    <li
      data-component="NavLink_container"
      className="relative flex-col overflow-hidden fc"
    >
      <AriaJSLink
        linkHref={url}
        controlsSet={{ background: 'transparent' }}
        controlsStart={{
          background: 'transparent',
        }}
        aStyle={`relative flex flex-col gap-y-[3px] w-full group `}
      >
        <p
          className={`p-small  text-left ${
            linkStyleIfRouterMatches
              ? 'text-corpo'
              : 'text-grey group-hover:text-light duration-[0.3s] delay-[0.1s] ease-in'
          } ${linkStyleIfRouterMatches ? 'cursor-default' : 'cursor-pointer'}`}
        >
          {label}
        </p>
        <span className=" w-full h-[1px] border-b border-greyShade2 group-hover:border-grey duration-300 delay-100 ease-in" />
      </AriaJSLink>
    </li>
  );
};

export default FooterLink;
