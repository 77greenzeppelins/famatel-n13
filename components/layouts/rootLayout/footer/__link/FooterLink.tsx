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
      className="relative flex-col overflow-hidden fc"
    >
      {/* <BorderHolder /> */}
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
        <span
          className=" w-full h-[1px] border-b border-greyShade2 group-hover:border-grey duration-300 delay-100 ease-in"
          //___xs:hidden xs:w-0
        />
      </AriaJSLink>
      {/* {isLast ? (
        <BorderHolder />
      ) : null} */}
    </li>
  );
};

export default FooterLink;
