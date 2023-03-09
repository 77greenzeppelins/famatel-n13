import { motion } from 'framer-motion';
import React from 'react';
import FlyingLine from '../../../../multipagesComponents/lines/flyingLine/FlyingLine';

/**-----------------------------------------------------------------------------**/
const ScrollPrompt: React.FunctionComponent<{ isSection_2_Open: boolean }> = ({
  isSection_2_Open,
}) => {
  /**JSX**/
  return (
    <motion.div
      className=" hidden xl:flex w-full h-[20%] "
      animate={{
        opacity: isSection_2_Open ? 1 : 0,
        transition: { duration: 1 },
      }}
    >
      <div className="flex h-full">
        <div className="relative w-[0.5px] h-full overflow-hidden">
          {isSection_2_Open && (
            <FlyingLine
              variantsNumber={4}
              bgColor={'bg-greyShade2'}
              fgColor={'bg-corpo'}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollPrompt;
