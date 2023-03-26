import { motion } from 'framer-motion';
import React from 'react';
import InViewContainer from '../../../../containers/inViewContainer/InViewContainer';
import FlyingLine from '../../../../multipagesComponents/lines/flyingLine/FlyingLine';

/**-----------------------------------------------------------------------------**/
const ScrollPrompt: React.FunctionComponent<{ isSection_2_Open: boolean }> = ({
  isSection_2_Open,
}) => {
  /**JSX**/
  return (
    // <InViewContainer>
    <motion.div
      className=" absolute bottom-[3%] md:bottom-0 right-[3%] h-[25%] md:h-[35%] "
      animate={{
        opacity: isSection_2_Open ? 1 : 0,
        transition: { duration: 1 },
      }}
    >
      <div className="flex h-full">
        <div className="relative w-[0.5px] h-full overflow-hidden">
          {isSection_2_Open && <FlyingLine variantsNumber={4} />}
        </div>
      </div>
    </motion.div>
    // </InViewContainer>
  );
};

export default ScrollPrompt;
