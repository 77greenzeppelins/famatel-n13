import React from 'react';
/**Components**/
import AriaMotionButton from '../../../../_basicComponents/buttons/ariaMotionButton/AriaMotionButton';
/**FramerMotion staff*/
import { animatedButton } from '../../../../../utils/framerMotion/framerMotionUtils';
import { motion } from 'framer-motion';

/**------------------------------------------------------------------------**/
const ButtonSection: React.FunctionComponent<{
  sectionsNumber: number;
  slideNumber: number;
}> = ({ sectionsNumber, slideNumber }) => {
  return (
    <div className="absolute fc bottom-0 left-0 right-0 h-[70px] pb-[10px]">
      <div className="flex justify-between w-[400px] h-full ">
        {Array.from({ length: sectionsNumber }).map((_, i) => (
          <div key={i}>
            <AriaMotionButton
              ariaLabel={`zobacz slajd ${i + 1}`}
              whileHover={animatedButton.whileHover}
              transition={animatedButton.transition}
              onClick={() => {
                console.log('...........NavPanel / GraphicSection');
              }}
            >
              <div className="flex items-center">
                <motion.p className="text-[0.625rem] lg:text-[0.75rem] xl:text-[0.875rem] tracking-widest text-grey">{`0${
                  i + 1
                }.`}</motion.p>
                <div key={i} className="fc h-[2px] w-[60px] bg-grey"></div>
              </div>
            </AriaMotionButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonSection;
