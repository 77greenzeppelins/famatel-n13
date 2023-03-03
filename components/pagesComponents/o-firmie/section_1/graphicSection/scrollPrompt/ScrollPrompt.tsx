import React from 'react';
/**Components**/
import FlyingLine from '../../../../../multipagesComponents/lines/flyingLine/FlyingLine';
/**Framer Motion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
/**---------------------------------**/
const ScrollPrompt: React.FunctionComponent<{
  isSection_2_Open: boolean;
}> = ({ isSection_2_Open }) => {
  /**JSX**/
  return (
    <AnimatePresence>
      {isSection_2_Open && (
        <motion.div
          className="absolute  left-[40%] -bottom-[10%] w-[10px] h-[30%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
        >
          <div className="flex gap-1 items-center  flex-col w-full h-full ">
            <div className="h-[5%]  aspect-square bg-corpo" />
            <div className="relative w-[1px] h-[80%] bg-vY overflow-hidden">
              <FlyingLine
                variantsNumber={4}
                bgColor={'bg-light'}
                fgColor={'bg-corpo'}
              />
            </div>
            <div className="h-[5%]  aspect-square bg-corpo" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollPrompt;
