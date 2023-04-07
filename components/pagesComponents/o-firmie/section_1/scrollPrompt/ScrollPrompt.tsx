import { motion } from 'framer-motion';
import React from 'react';
import InViewContainer from '../../../../containers/inViewContainer/InViewContainer';
import FlyingLine from '../../../../multipagesComponents/lines/flyingLine/FlyingLine';

/**-----------------------------------------------------------------------------**/
const ScrollPrompt: React.FC = () => {
  /**JSX**/
  return (
    // <InViewContainer>
    <motion.div
      className=" absolute bottom-[3%] md:bottom-0 right-[3%] h-[25%] md:h-[35%] "
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 2, delay: 3 },
      }}
    >
      <div className="flex h-full">
        <div className="relative w-[0.5px] h-full overflow-hidden">
          <FlyingLine variantsNumber={4} />

          {/* {isSection_2_Open && <FlyingLine variantsNumber={4} />} */}
        </div>
      </div>
    </motion.div>
    // </InViewContainer>
  );
};

export default ScrollPrompt;
