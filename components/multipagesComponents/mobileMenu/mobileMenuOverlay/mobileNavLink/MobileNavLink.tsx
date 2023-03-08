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
  isLast: boolean;
}> = ({ url, label, uniqueKey, isLast }) => {
  /*useRouter Section
   why: for style sake;  I want link to be in corpo color 
    when user is on its corresponding page
  */
  const router = useRouter();
  const linkStyleIfRouterMatches = router.pathname === url;

  /**JSX**/
  return (
    <motion.li
      data-component="NavLink_container"
      className="relative fc flex-col  overflow-hidden"
    >
      <motion.div
        className="w-full h-[16px] border-t-[0.5px] border-greyShade1 origin-right"
        initial={{ x: '110%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
      <AriaJSLink
        linkHref={url}
        controlsSet={{ background: 'transparent' }}
        controlsStart={{
          background: 'transparent',
        }}
        aStyle={`relative flex justify-end w-full bg-transparent select-none touch-none focus:outline-none group `}
      >
        <H1AnimatedPresence
          uniqueKey={uniqueKey}
          text={label}
          variantH="custome"
          customeStyle={`text-right text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4rem] font-bold tracking-[2px] leading-tight ${
            linkStyleIfRouterMatches
              ? 'text-corpo'
              : 'text-grey group-hover:text-light duration-[0.3s] delay-[0.1s] ease-in'
          } ${linkStyleIfRouterMatches ? 'cursor-default' : 'cursor-pointer'}`}
        />
      </AriaJSLink>
      {isLast ? (
        <div className="w-full h-[16px] border-b-[0.5px] border-greyShade1" />
      ) : null}
    </motion.li>
  );
};

export default MobileNavLink;
