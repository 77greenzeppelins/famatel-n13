import React from 'react';
/**Components**/
import AriaMotionButton from '../../../../_basicComponents/buttons/ariaMotionButton/AriaMotionButton';
/**FramerMotion staff*/
import {
  animatedButton,
  animatedSniper,
} from '../../../../../utils/framerMotion/framerMotionUtils';
import { motion } from 'framer-motion';
import { corpoColors } from '../../../../../data/_data';
import Sniper from '../../../../_basicComponents/buttons/sniper/Sniper';
/**Basic Data**/

/**------------------------------------------------------------------------**/
const ButtonsSection: React.FunctionComponent<{
  sectionsNumber: number;
  slideNumber: number;
  setSlideState: React.Dispatch<
    React.SetStateAction<{
      number: number;
    }>
  >;
}> = ({ sectionsNumber, slideNumber, setSlideState }) => {
  /**...WTF**/
  // console.log('ButtonsSection / slideNumber:', slideNumber);
  /**JSX**/
  return (
    <div className="absolute fc bottom-0 left-0 right-0 h-[60px] pb-[10px]">
      <div className="flex justify-between w-[400px] h-full ">
        {Array.from({ length: sectionsNumber }).map((_, i) => (
          <div
            key={i}
            //__
            className="relative fc w-[40px] h-[40px]"
          >
            <AriaMotionButton
              ariaLabel={`zobacz slajd ${i + 1}`}
              onClick={() => {
                setSlideState({
                  number: i,
                });
              }}
              whileTap={animatedButton.whileTap}
              transition={animatedButton.transition}
            >
              <Sniper
                color="border-light"
                containerStyle="opacity-50 group-hover:opacity-100 duration-[0.4s] ease-in"
              />
              <motion.div className="absolute fc w-full h-full ">
                <motion.p
                  className={`text-[0.625rem] lg:text-[0.75rem] xl:text-[0.875rem] tracking-widest text-light ${
                    slideNumber === i + 1
                      ? 'opacity-100'
                      : 'opacity-50 group-hover:opacity-100 duration-[0.4s] ease-in'
                  } `}
                  animate={{
                    color:
                      slideNumber === i + 1
                        ? corpoColors.orange
                        : corpoColors.light,
                  }}
                >{`0${i + 1}`}</motion.p>
              </motion.div>
            </AriaMotionButton>
            {/* <motion.div className="absolute fc w-full h-full opacity-[0.3]">
              <motion.p
                className="text-[0.625rem] lg:text-[0.75rem] xl:text-[0.875rem] tracking-widest text-light"
                // animate={{
                //   color:
                //     slideNumber === i + 1
                //       ? corpoColors.orange
                //       : corpoColors.light,
                //   opacity: slideNumber === i + 1 ? 1 : 0.2,
                // }}
              >{`0${i + 1}`}</motion.p>
            </motion.div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonsSection;

/* <div className="flex items-center">
                <motion.p className="text-[0.625rem] lg:text-[0.75rem] xl:text-[0.875rem] tracking-widest text-grey">{`0${
                  i + 1
                }.`}</motion.p>
                <div key={i} className="fc h-[2px] w-[60px] bg-grey"></div>
              </div> */
