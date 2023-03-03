import React, { ReactNode } from 'react';
/**Components**/
import AriaMotionButton from '../../../../../_basicComponents/buttons/ariaMotionButton/AriaMotionButton';
import Sniper from '../../../../../_basicComponents/buttons/sniper/Sniper';
/**FrameMotion Staff**/
import { motion } from 'framer-motion';
import { animatedButton } from '../../../../../../utils/framerMotion/framerMotionUtils';
/**HardCoded Data**/
//___delay to create a sort of "animation sequence" => image - overlay - sniper
const delayForSniper = 3;

/**--------------------------------------------------------**/
const AnimatedButton: React.FunctionComponent<{
  isSection_2_Open: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  sniperColor?: string;
}> = ({ isSection_2_Open, onClick, sniperColor, children }) => {
  /**JSX**/
  return (
    <motion.div
      className="absolute hidden xs352:flex bottom-[10%] right-[25%] h-[70%] w-[70%] "
      //__pointer-events-auto
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: delayForSniper, duration: 0.9 },
      }}
    >
      {/**
       *
       *
       *
       */}
      <div className="relative w-full h-full">
        <AriaMotionButton
          ariaLabel="Zobacz opis wtyczki"
          // whileTap={animatedButton.whileTap}
          // whileHover={animatedButton.whileHover}
          transition={animatedButton.transition}
          onClick={onClick}
        >
          <Sniper borderColor={sniperColor} hoverCondition={isSection_2_Open} />
          {children}
        </AriaMotionButton>
      </div>
    </motion.div>
  );
};

export default AnimatedButton;

/* <div className="flex justify-between flex-col w-full h-full group">
        <div className="flex justify-between w-full h-[30%] group-hover:h-[50%] duration-[0.4s] ease-in">
          <div className="w-[30%] h-full border-t border-l border-grey group-hover:w-[50%] duration-[0.4s] ease-in" />
          <div
            className={`w-[30%] h-full border-t border-r  border-grey group-hover:w-[50%] duration-[0.4s] ease-in`}
          />
        </div>
        <div className="flex justify-between  w-full h-[30%] group-hover:h-[50%] duration-[0.4s] ease-in">
          <div className="w-[30%] h-full border-b border-l border-grey group-hover:w-[50%] duration-[0.4s] ease-in" />
          <div className="w-[30%] h-full border-b border-r border-grey group-hover:w-[50%] duration-[0.4s] ease-in" />
        </div>
      </div> */
