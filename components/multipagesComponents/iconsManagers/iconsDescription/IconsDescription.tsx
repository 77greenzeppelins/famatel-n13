import React from 'react';
/**FramerMotion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
const variants = {
  from: { opacity: 0 },
  presence: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  to: { opacity: 0 },
};
/**Basic Data**/
import { iconsDescriptions } from '../_iconsManagers_data';

/**----------------------------------------------**/
const IconsDescription: React.FunctionComponent<{
  iconState: { id: string };
}> = ({ iconState }) => {
  /**JSX**/
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={iconState.id}
        variants={variants}
        initial="from"
        animate="presence"
        exit="to"
        className="flex items-center relative "
      >
        {iconsDescriptions.map(({ id, description }, i) => {
          if (id === iconState.id) {
            return (
              <div
                id="IconDescription__container"
                className="flex h-full leading-none pt-[10px] lg:pt-[0px]"
                key={i}
              >
                {/* <div className="flex items-center h-full  pl-[0.75rem] pr-[0.75rem] ">
                  <div
                    className="bg-corpo h-full w-full"
                    // style={{ height: size, width: size }}
                  />
                </div> */}
                <div className="flex items-center h-full ">
                  <p className="header-link-label text-corpo">{description}</p>
                </div>
              </div>
            );
          }
        })}
      </motion.div>
    </AnimatePresence>
  );
};

export default IconsDescription;
