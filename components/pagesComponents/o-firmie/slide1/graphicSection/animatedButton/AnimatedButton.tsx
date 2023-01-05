import React, { useState } from 'react';
/**Components**/
import AriaMotionButton from '../../../../../_basicComponents/buttons/ariaMotionButton/AriaMotionButton';
import Sniper from '../../../../../_basicComponents/buttons/sniper/Sniper';
/**FrameMotion Staff
 */
import { animatedButton } from '../../../../../../utils/framerMotion/framerMotionUtils';
/**--------------------------------------------------------**/
const AnimatedButton: React.FunctionComponent<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  sniperColor?: string;
}> = ({ onClick, sniperColor }) => {
  /**JSX**/
  return (
    <AriaMotionButton
      ariaLabel="Zobacz opis wtyczki"
      whileTap={animatedButton.whileTap}
      transition={animatedButton.transition}
      onClick={onClick}
    >
      <Sniper color={sniperColor} />
    </AriaMotionButton>
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
