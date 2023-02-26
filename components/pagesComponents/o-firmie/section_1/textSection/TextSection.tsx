import React from 'react';
/**Components**/
import TextSectionContent from './textSectionContent/TextSectionContent';
/**.....**/
import { useRouter } from 'next/router';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
import { textSectionContainerVariants } from '../../../../../utils/framerMotion/framerMotionUtils';

/**----------------------------------------------------------**/
const TextSection: React.FunctionComponent<{
  isProductDescriptionOpen: boolean;
  slideNumber: number;
}> = ({ isProductDescriptionOpen, slideNumber }) => {
  /**Hook Section**/
  const router = useRouter();

  /**JSX**/
  return (
    <div
      data-component="TextSection__container"
      className="relative w-full"
      //___inner-px-md-lg pt-[62px]
    >
      <motion.div
        key={router.asPath}
        className="flex justify-center gap-6 flex-col overflow-hidden"
        //___remember(!) to orchestrate parent-ancestor animations manes  "from / to / exit" should be in  parent-ancestor variants; ancestor doen't need to be a child...
        variants={textSectionContainerVariants}
        initial="from"
        animate="to"
        exit="exit"
      >
        <TextSectionContent slideNumber={slideNumber} />
      </motion.div>
    </div>
  );
};

export default TextSection;
