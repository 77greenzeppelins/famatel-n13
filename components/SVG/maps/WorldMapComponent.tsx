import React, { useRef } from 'react';
/**Components**/
import SvgWordMapNoDots from './SvgWordMapNoDots';
/**Hook Staff**/
import useWindowSize from '../../../utils/hooks/useWindowSize';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';

/**TS**/
interface Props {
  widthToDrag?: number;
  outherContainerStyle?: string;
  innerContainerStyle?: string;
}
/**-----------------------**/

const WorldMapComponent: React.FC<Props> = ({
  widthToDrag = 768,
  outherContainerStyle,
  innerContainerStyle,
}) => {
  const constraintsRef = useRef(null);
  /**...**/
  const { width } = useWindowSize({ screensNumber: 1 });
  //___if width is less then passed number dragging is disabled
  const dragCondition = width <= widthToDrag;

  /**JSX**/
  return (
    <motion.div
      className={
        outherContainerStyle
          ? outherContainerStyle
          : 'fc w-full overflow-hidden'
      }
    >
      <motion.div
        ref={constraintsRef}
        drag={dragCondition ? 'x' : false}
        className={
          innerContainerStyle
            ? innerContainerStyle
            : 'relative w-full min-w-[800px]'
        }
        //translate-x-[-25%]
        // dragConstraints={{ left: -400, right: 0 }}
        dragSnapToOrigin={true}
        dragElastic={0.9}
        dragMomentum={true}
      >
        <div className="absolute inset-1 bg-greyShade2 z-5" />
        <SvgWordMapNoDots containerStyle="relative w-full z-10" />
      </motion.div>
    </motion.div>
  );
};

export default WorldMapComponent;
