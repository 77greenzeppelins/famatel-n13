import React from 'react';
/**Components**/
import AriaJSLink from '../../../../_basicComponents/links/ariaJSLink/AriaJSLink';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import H1AnimatedPresence from '../../../../_basicComponents/componentH1/H1AnimatedPresence';

/**---------------------------------**/
const MobileNavLink: React.FunctionComponent<{
  url: string;
  label: string;
  uniqueKey: number;
}> = ({ url, label, uniqueKey }) => {
  /*useRouter Section
   why: for style sake;  I want link to be in corpo color 
    when user is on its corresponding page
  */
  const router = useRouter();
  const linkStyleisHovered = router.pathname === url;

  /**JSX**/
  return (
    <motion.li data-component="NavLink_container" className="relative ml-6 fc">
      <AriaJSLink
        linkHref={url}
        controlsSet={{ background: 'transparent' }}
        controlsStart={{
          background: 'transparent',
        }}
        aStyle={`relative fc gap-1 w-full h-full cursor-pointer bg-transparent select-none touch-none focus:outline-none group `}
      >
        <H1AnimatedPresence
          uniqueKey={uniqueKey}
          text={label}
          variantH="custome"
          customeStyle={`text-left text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4rem] font-bold tracking-[2px] leading-tight ${
            linkStyleisHovered ? 'text-corpo' : 'text-grey'
          }`}
          // variantH="h2"
        />

        {/* <p
          className={`header-link-label ${
            linkStyleisHovered ? 'text-corpo' : 'text-grey'
          }`}
        >
          <span>{label}</span>
        </p> */}

        {/* <div
          className={`absolute border-b border-grey h-[32px] ${
            linkStyleisHovered ? 'w-[0%]' : 'w-full'
          } inset-0 opacity-0 hover:opacity-100  ease-in duration-300 `}
          //__w-full h-full
        /> */}
      </AriaJSLink>
    </motion.li>
  );
};

export default MobileNavLink;
