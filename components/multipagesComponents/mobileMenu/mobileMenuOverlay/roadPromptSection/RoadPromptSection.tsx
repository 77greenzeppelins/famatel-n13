import { motion } from 'framer-motion';
import React from 'react';
/**Components**/
import SvgMap from '../../../../SVG/maps/SvgMap';

/**------------------------------------------------------**/
const RoadPromptSection: React.FunctionComponent<{
  roadPrompt: boolean;
}> = ({ roadPrompt }) => {
  /**JSX**/
  return (
    <motion.div
      className="absolute left-0 right-0 top-0 bottom-0"
      animate={{ x: roadPrompt ? 0 : '110%' }}
      transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
    >
      <div className="relative fc flex-col w-full h-full bg-dark">
        <SvgMap containerStyle="width-full aspect-square" />
      </div>
    </motion.div>
  );
};

export default RoadPromptSection;
