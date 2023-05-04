import React from 'react';
/**FramerMotion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
// const variants = {
//   from: { opacity: 0 },
//   presence: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
//   to: { opacity: 0 },
// };
/**Basic Data**/
import { iconsDescriptions } from '../_iconsManagers_data';

/**----------------------------------------------**/
const IconsDescription: React.FunctionComponent<{
  iconState: { id: string };
}> = ({ iconState }) => {
  /**...**/
  // useEffect(() => {
  //   console.log('..... onHoverEndHandler / id:', iconState.id);
  // }, [iconState.id]);
  /**JSX**/
  return (
    <AnimatePresence mode="wait">
      <div key={iconState.id}>
        {iconsDescriptions.map(({ id, description }, i) => {
          if (id === iconState.id) {
            return (
              <div
                id="IconDescription__container"
                className="flex h-full leading-none pt-[10px] "
                key={i}
              >
                <div className="flex items-center h-full ">
                  <motion.p
                    className="header-link-label text-grey"
                    // variants={variants}
                    // initial="from"
                    // animate="presence"
                    // exit="to"
                  >
                    {description}
                  </motion.p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </AnimatePresence>
  );
};

export default IconsDescription;
