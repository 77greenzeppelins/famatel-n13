import React from 'react';
/**Components**/
import Sniper from '../../../../../_basicComponents/buttons/sniper/Sniper';
/**FramerMotion staff**/
import { motion } from 'framer-motion';
/**HardCoded Data**/
//___delay to create a sort of "animation sequence" => image - overlay - sniper
const delayForSniper = 3;

const SniperPanel = () => {
  /**JSX**/
  return (
    <motion.div
      className="absolute hidden xs3xx:flex bottom-[10%] right-[25%] h-[70%] w-[70%]"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: delayForSniper, duration: 0.9 },
      }}
    >
      <Sniper borderColor={'border-greyShade1'} hoverCondition={true} />
    </motion.div>
  );
};

export default SniperPanel;
