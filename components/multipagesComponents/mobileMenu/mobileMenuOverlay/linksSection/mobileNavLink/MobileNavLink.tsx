import { useRouter } from 'next/router';
import React from 'react';
/**Components**/
import AriaJSLink from '../../../../../_basicComponents/links/ariaJSLink/AriaJSLink';
import H1AnimatedPresence from '../../../../../_basicComponents/componentH1/H1AnimatedPresence';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
const variants = {
  from: { opacity: 0, scaleY: 0 },
  to: {
    opacity: 1,
    scaleY: 1,
    transition: {
      delay: 0.9,
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

/**Direct Child**/
const BorderHolder = ({
  isSimple,
  style,
}: {
  isSimple: boolean;
  style: string;
}) => {
  return (
    <motion.div
      className={
        isSimple
          ? `w-full h-[6px]  border-greyShade1 origin-right ${style}`
          : `w-full h-[16px]  border-greyShade1 origin-right ${style}`
      }
      initial={{ x: '110%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    />
  );
};

/**------------------------------------------------**/
const MobileNavLink: React.FunctionComponent<{
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
    <motion.li
      data-component="NavLink_container"
      className="relative fc flex-col  overflow-hidden"
    >
      <BorderHolder isSimple={isSimple} style="border-t-[0.5px]" />
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
          customeStyle={`text-right ${
            isSimple
              ? 'text-[1rem]'
              : 'text-[1.5rem] xs:text-[2rem] sm:text-[2.5rem] '
          }  font-bold tracking-[2px] leading-tight ${
            linkStyleIfRouterMatches
              ? 'text-corpo'
              : 'text-grey group-hover:text-light duration-[0.3s] delay-[0.1s] ease-in'
          } ${linkStyleIfRouterMatches ? 'cursor-default' : 'cursor-pointer'}`}
          customeVariants={variants}
        />
      </AriaJSLink>
      {isLast ? (
        <BorderHolder isSimple={isSimple} style="border-b-[0.5px]" />
      ) : null}
    </motion.li>
  );
};

export default MobileNavLink;
