import React from 'react';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';

const Section_2: React.FunctionComponent<{ isSection_2_Open: boolean }> = ({
  isSection_2_Open,
}) => {
  return (
    <AnimatePresence>
      {isSection_2_Open && (
        <motion.div className="h-[75vh] bg-dark">
          <div className="hidden xl:flex w-full h-[10vh] bg-greyShade2" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Section_2;
