import { useRouter } from 'next/router';
import React from 'react';
import AriaJSLink from '../../../../_basicComponents/links/ariaJSLink/AriaJSLink';

/**Direct Child**/
const BorderHolder = () => {
  return (
    <div className="absolute w-full h-6 border-greyShade2 origin-right border-t-[0.5px]" />
  );
};

const FooterLink: React.FunctionComponent<{
  url: string;
  label: string;
  uniqueKey: number;
  isLast: boolean;
  isSimple: boolean;
}> = ({ url, label, uniqueKey, isLast, isSimple }) => {
  /*useRouter Section
  why: for style sake;  I want link to be in corpo color 
  when user is on its corresponding page
  */
  const router = useRouter();
  const linkStyleIfRouterMatches = router.pathname === url;

  // console.log('isSimple', isSimple);
  /**JSX**/
  return (
    <li
      data-component="NavLink_container"
      className="relative fc flex-col  overflow-hidden"
    >
      {/* <BorderHolder /> */}
      <AriaJSLink
        linkHref={url}
        controlsSet={{ background: 'transparent' }}
        controlsStart={{
          background: 'transparent',
        }}
        aStyle={`relative flex w-full select-none touch-none focus:outline-none group `}
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
      </AriaJSLink>
      {/* {isLast ? (
        <BorderHolder />
      ) : null} */}
    </li>
  );
};

export default FooterLink;
