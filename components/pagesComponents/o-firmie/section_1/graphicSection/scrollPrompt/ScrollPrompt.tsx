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
          className="absolute xl:hidden left-[40%] top-[80%] w-[0.5px] h-[20%] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
        >
          <div className="flex gap-1 items-center flex-col w-[99%] h-full ">
            <div className="relative w-[1px] h-full bg-vY overflow-hidden">
              <FlyingLine
                variantsNumber={4}
                bgColor={'bg-greyShade2'}
                fgColor={'bg-light'}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollPrompt;
