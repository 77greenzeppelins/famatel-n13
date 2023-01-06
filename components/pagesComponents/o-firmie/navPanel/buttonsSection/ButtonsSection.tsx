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
import AriaButton from '../../../../_basicComponents/buttons/ariaButton/AriaButton';
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
    <div className="absolute fc bottom-0 left-0 right-0 h-[40px] pb-[10px] ">
      <div className="flex justify-between w-[200px] lg:w-[300px] h-full ">
        {Array.from({ length: sectionsNumber }).map((_, i) => (
          <div
            key={i}
            //__
            className="relative fc w-[36px] h-[36px]"
          >
            <AriaButton
              // onClick={showSubcategories}
              specialOnClickHandler={() => {
                setSlideState({
                  number: i,
                });
              }}
              controlsSet={{
                background: corpoColors.greyShade1,
                // scale: slideNumber === i + 1 ? 1.5 : 1,
                // scale: 1.5,
              }}
              controlsStart={{
                background: corpoColors.dark, //background color
                transition: { duration: 0.4 },
                // scale: slideNumber === i + 1 ? 1.5 : 1,
                // scale: 1,
              }}
              buttonStyle="fc gap-4 h-full aspect-square border border-greyShade1 rounded-sm bg-transparent focus:outline-none group"
              specialStyle={
                slideNumber === i + 1
                  ? { borderColor: corpoColors.light }
                  : { borderColor: corpoColors.greyShade1 }
              }
            >
              <motion.p
                className={`header-link-label text-greyShade1 group-hover:text-light ease-in duration-300 px-2`}
                // animate={{
                //   color:
                //     slideNumber === i + 1
                //       ? corpoColors.orange
                //       : corpoColors.greyShade1,
                // }}
              >
                {`0${i + 1}`}
              </motion.p>
            </AriaButton>
            {/* <AriaMotionButton
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
            </AriaMotionButton> */}
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
