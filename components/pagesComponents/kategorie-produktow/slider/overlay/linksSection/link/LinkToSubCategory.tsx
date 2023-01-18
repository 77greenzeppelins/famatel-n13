import React from 'react';
/**Components*/
import AriaJSLink from '../../../../../../_basicComponents/links/ariaJSLink/AriaJSLink';
/** */
import { corpoColors } from '../../../../../../../data/_data';
import { motion } from 'framer-motion';
import { opacityScaleYVariants } from '../../../../../../../utils/framerMotion/framerMotionUtils';

/**---------------------------------------------------------------**/
const LinkToSubCategory: React.FunctionComponent<{
  index: number;
  url: string;
  label: string;
}> = ({ index, url, label }) => {
  /**JSX**/
  return (
    <motion.li
      className="block"
      data-component="LinkToSubCategory__li-container"
      // initial={{ scaleY: 0 }}
      // animate={{ scaleY: 1, transition: { delay: 0.0, duration: 0.4 } }}
      // exit={{
      //   scaleY: 0,
      //   transition: { duration: 0.4 },
      // }}
      variants={opacityScaleYVariants}
      initial="from"
      animate="to"
      exit="exit"
    >
      <AriaJSLink
        linkHref={url}
        controlsSet={{ background: corpoColors.greyTint1 }}
        controlsStart={{
          background: corpoColors.dark, //background color
          transition: { duration: 0.4 },
        }}
        ariaLabel="Link do strony kategorii"
        aStyle="flex items-center gap-4 h-full focus:outline-none group"
        //___ ease-in duration-300 hover:border-corpo rounded-sm bg-transparent
      >
        <div className="w-[30px]">
          <p
            className={`header-link-label text-greyTint1 group-hover:text-corpo ease-in duration-300`}
          >
            {`0${index + 1}.`}
          </p>
        </div>
        <motion.p
          className={`p-small text-greyTint1  group-hover:text-corpo  ease-in duration-300`}
        >
          {label}
        </motion.p>
      </AriaJSLink>
    </motion.li>
  );
};

export default LinkToSubCategory;
