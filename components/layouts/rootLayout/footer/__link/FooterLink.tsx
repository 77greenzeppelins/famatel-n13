import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

/**TS**/
interface Props {
  url: string;
  label: string;
  labelStyle?: string;
}
/**---------------------------**/

const FooterLink = ({ url, label, labelStyle }: Props) => {
  /*useRouter Section
  why: for style sake;  I want link to be in corpo color when user is on its corresponding page
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
              ? 'text-corpo font-bold'
              : 'text-dark font-bold group-hover:text-greyTint2 duration-[0.3s] delay-[0.1s] ease-in'
          } ${linkStyleIfRouterMatches ? 'cursor-default' : 'cursor-pointer'}`}
        >
          {label}
        </span>
        <span className=" w-full h-[1px] border-b border-dark group-hover:border-greyTint2 duration-300 delay-100 ease-in" />
      </Link>
    </li>
  );
};

export default FooterLink;
