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
          // className="absolute left-[40%] -bottom-[10%] w-[10px] h-[30%] bg-vB"
          className="absolute left-[40%] top-[80%] w-[10px] h-[20%]"
          // className="relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
        >
          <div className="flex gap-1 items-center  flex-col w-[99%] h-full ">
            {/* <div className="h-[10px] w-[10px]  bg-corpo" />
            <div className="relative w-[1px] h-[80%] bg-vY overflow-hidden">
              <FlyingLine
                variantsNumber={4}
                bgColor={'bg-light'}
                fgColor={'bg-corpo'}
              />
            </div>
            <div className="h-[10px] w-[10px] bg-corpo" /> */}

            <div className="relative w-[1px] h-full bg-vY overflow-hidden">
              <FlyingLine
                variantsNumber={4}
                bgColor={'bg-light'}
                fgColor={'bg-corpo'}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollPrompt;
