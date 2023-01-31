import React from 'react';
/**Components**/
import TextSectionContent from './textSectionContent/TextSectionContent';
/** */
import { useRouter } from 'next/router';
/**Framer Motion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
import { textSectionContainerVariants } from '../../../../../utils/framerMotion/framerMotionUtils';
/**BasicData*/
import { mainPages } from '../../../../../data/_data';

/**----------------------------------------------------------**/
const TextSection: React.FunctionComponent<{
  isProductDescriptionOpen: boolean;
  slideNumber: number;
}> = ({ isProductDescriptionOpen, slideNumber }) => {
  /**Hook Section**/
  const router = useRouter();
  /**Basic Data; **/
  const mountingCondition = router.asPath === mainPages[0].url;
  /**JSX**/
  return (
    <div
      data-component="TextSection__container"
      className="relative w-full h-full  inner-px-md-lg pt-[62px]"
    >
      <AnimatePresence initial={true}>
        {mountingCondition && (
          <motion.div
            key={router.asPath}
            className="flex justify-center gap-6 flex-col w-full h-full overflow-hidden"
            //___remember(!) to orchestrate parent-ancestor animations manes  "from / to / exit" should be in  parent-ancestor variants; ancestor doen't need to be a child...
            variants={textSectionContainerVariants}
            initial="from"
            animate="to"
            exit="exit"
          >
            <TextSectionContent slideNumber={slideNumber} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TextSection;
