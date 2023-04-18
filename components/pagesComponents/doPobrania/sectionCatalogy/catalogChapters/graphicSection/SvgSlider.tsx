import React from 'react';
/**FramerMotion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data**/
import { svgTech_darkBackground_categories } from '../../../../../SVG/techDrawings/0_dark/darkBackground';
import SlideWithSvg from './slide/SlideWithSvg';
/**TS**/
interface Props {
  stateId: string;
}
/**------------------------------------------------------------------**/
const SvgSlider: React.FC<Props> = ({ stateId }) => {
  /**JSX**/
  return (
    <motion.ul className="relative w-full h-full fc">
      <AnimatePresence>
        {svgTech_darkBackground_categories.map(({ id, Component }) => {
          if (stateId === id.toString()) {
            return <SlideWithSvg key={stateId} Component={Component} />;
          }
        })}
      </AnimatePresence>
    </motion.ul>
  );
};

export default SvgSlider;
