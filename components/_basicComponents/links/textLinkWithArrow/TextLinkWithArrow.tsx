import React, { ReactNode, useRef, useState } from 'react';
import Link from 'next/link';
/**ReactAria Staff*/
import { FocusRing, useLink } from 'react-aria';
/**FramerMotion Staff*/
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
const variants = {
  initial: { y: '-100%' },
  animate: { y: 0, transition: { ease: 'circOut', duration: 0.8 } },
};
/**BasicData*/
import { corpoColors } from '../../../../data/_data';
import { tailwindStyles } from '../../../../data/_styleData';
import ArrowLongRightIcon from '../../../SVG/icons/ArrowLongRightIcon';
//___<a> style, optimised for "iconStyle"
const aDefaultStyle =
  'fc h-[70%] aspect-1 text-[1rem] bg-greyShade1 select-none touch-none focus:outline-none';

/**-----------------------------------------------**/

const TextLinkWithArrow: React.FunctionComponent<{
  linkHref: string;
  ariaLabel: string;
  label: string;
  aStyle: string;
  //   children: ReactNode;
  variants: {
    initial: {
      y: string;
    };
    animate: {
      y: number;
      transition: {
        ease: string;
        duration: number;
      };
    };
  };
}> = ({ linkHref, ariaLabel, aStyle, variants, label }) => {
  /**State**/
  const [state, setState] = useState(false);

  //   console.log('state', state);
  /**JSX**/
  return (
    <div className="rounded-sm bg-corpo">
      <Link href={linkHref} scroll={false} legacyBehavior passHref>
        <motion.a
          aria-label={ariaLabel}
          className={aStyle ? aStyle : aDefaultStyle}
          whileHover={{ x: '3%' }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <motion.p
            className="fc h-full text-light text-[0.625rem] lg:text-[0.75rem] xxxl:text-[0.875rem] tracking-widest uppercase  disable pointer-events-auto cursor-pointer px-4 z-[10] whitespace-nowrap"
            variants={variants}
            initial="initial"
            animate="animate"
          >
            {label}
          </motion.p>

          <motion.div
            className="fc h-full aspect-square pointer-events-auto cursor-pointer z-[5]"
            variants={variants}
            initial="initial"
            animate="animate"
          >
            <ArrowLongRightIcon
              containerStyle="fc h-full aspect-1 stroke-dark"
              pathStyle="stroke-light scale-[0.75] origin-left"
            />
          </motion.div>
        </motion.a>
      </Link>
    </div>
  );
};

export default TextLinkWithArrow;
