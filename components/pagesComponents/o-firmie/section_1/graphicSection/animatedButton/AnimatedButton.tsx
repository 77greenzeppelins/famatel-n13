import React, { ReactNode } from 'react';
/**Components**/
import AriaMotionButton from '../../../../../_basicComponents/buttons/ariaMotionButton/AriaMotionButton';
import Sniper from '../../../../../_basicComponents/buttons/sniper/Sniper';
/**FrameMotion Staff**/
import { motion } from 'framer-motion';
// import { animatedButton } from '../../../../../../utils/framerMotion/framerMotionUtils';
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
      <div className="relative w-full h-full">
        <motion.div
          className="w-full h-full"
          animate={{ rotate: isSection_2_Open ? 90 : 0 }}
          transition={{ duration: 4, delay: 0.4 }}
        >
          <AriaMotionButton
            ariaLabel="Zobacz opis wtyczki"
            buttonStyle="w-full h-full focus:outline-none disable-soft pointer-events-auto group"
            // whileTap={animatedButton.whileTap}
            // whileHover={animatedButton.whileHover}
            // transition={animatedButton.transition}
            onClick={onClick}
            isDisabled={isSection_2_Open ? true : false}
          >
            <Sniper
              borderColor={sniperColor}
              hoverCondition={isSection_2_Open}
            />
            {children}
          </AriaMotionButton>
        </motion.div>
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

// <div className="hidden xl:flex absolute inset-0 ">
//   <div className="relative w-full h-full grid grid-cols-[2%_3%_90%_3%_2%] grid-rows-[2%_3%_80%_13%_2%]">
//     {/* <div className="absolute inset-0 bg-dark opacity-50" /> */}
//     <div
//       className="fc col-start-2 row-start-2 row-end-5"
//       //___border-r-[1px] border-greyShade1
//     >
//       <div className="w-[4px] h-full border-l-[1px] border-r-[1px] border-greyShade1 " />
//     </div>

//     <div className="col-start-2 col-end-5 row-start-2 border-b-[1px] border-greyShade1"></div>
//     <div className="col-start-2 col-end-5 row-start-4 flex justify-center flex-col ">
//       <div className="flex gap-2">
//         <div className="fc h-full w-[10%] ">
//           <div className="w-full h-[1px] bg-greyShade1" />
//         </div>
//         <p className="text-grey text-[0.625rem] xs:text-[0.75rem] tracking-[0.125rem] uppercase word-spacing-0125 lg:word-spacing-025">
//           IP 67
//         </p>
//       </div>
//       <div className="flex gap-2">
//         <div className="fc h-full w-[15%] ">
//           <div className="w-full h-[1px] bg-greyShade1" />
//         </div>
//         <p className="text-grey text-[0.625rem] xs:text-[0.75rem] tracking-[0.125rem] uppercase word-spacing-0125 lg:word-spacing-025">
//           125A
//         </p>{' '}
//       </div>
//     </div>
//   </div>
// </div>;
