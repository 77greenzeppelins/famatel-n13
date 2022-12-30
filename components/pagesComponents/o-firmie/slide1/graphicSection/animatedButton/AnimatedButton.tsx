import React, { useState } from 'react';
/**Components**/
import AriaMotionButton from '../../../../../_basicComponents/buttons/ariaMotionButton/AriaMotionButton';
/**FrameMotion Staff
 */
import { animatedButton } from '../../../../../../utils/framerMotion/framerMotionUtils';

/**--------------------------------------------------------**/
const AnimatedButton: React.FunctionComponent<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ onClick }) => {
  /**JSX**/
  return (
    <AriaMotionButton
      ariaLabel="Zobacz opis wtyczki"
      whileHover={animatedButton.whileHover}
      transition={animatedButton.transition}
      onClick={onClick}
    >
      <div className="flex justify-between flex-col w-full h-full">
        <div className="flex justify-between w-full h-[30%] ">
          <div className="w-[30%] h-full border-t border-l border-grey" />
          <div className={`w-[30%] h-full border-t border-r  border-grey`} />
        </div>
        <div className="flex justify-between  w-full h-[30%] ">
          <div className="w-[30%] h-full border-b border-l border-grey" />
          <div className="w-[30%] h-full border-b border-r border-grey" />
        </div>
      </div>
    </AriaMotionButton>
  );
};

export default AnimatedButton;
