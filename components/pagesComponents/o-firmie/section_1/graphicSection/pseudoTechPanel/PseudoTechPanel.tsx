import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
/**HardCoded Data**/
//___delay to create a sort of "animation sequence" => image - overlay - sniper
const delayForSniper = 3;

const PseudoTechPanel: React.FunctionComponent<{
  isSection_2_Open: boolean;
}> = ({ isSection_2_Open }) => {
  /**JSX**/
  return (
    <motion.div
      className="absolute hidden xs3xx:flex bottom-[10%] right-[25%] h-[70%] w-[70%] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: delayForSniper, duration: 0.9 },
      }}
    >
      <div className="relative fc w-full h-full">
        <div className={` absolute top-0 left-0 h-[20%] w-[20%] `} />
        <div className={`absolute bottom-0 left-0 h-[50%] w-[50%]`}>
          <div className="relative flex items-end w-full h-full">
            <div className="w-full  flex flex-col pl-2">
              <div className="flex items-center h-[30px]">
                <div className="flex gap-1">
                  <p className="p-small text-greyShade1">IP 67 /</p>
                  <p className="p-small text-greyShade1">125 A /</p>
                  <p className="p-small text-greyShade1">400 V</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div
          className={`absolute flex justify-end items-end p-2 sm:p-3 bottom-0 right-0 h-[20%] w-[20%]`}
        >
          <AnimatePresence>
            {!isSection_2_Open && (
              <motion.div
                // className="animate-spin-slow "
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0, transition: { duration: 3 } }}
              >
                <div className="animate-spin-slow ">
                  <button
                    aria-label="Click!"
                    className="w-4 h-4 aspect-square sm:w-6 sm:h-6 rounded-sm border border-greyShade2 animate-pulse"
                    //___animate-pulse glow
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {/* <div className={isSection_2_Open ? '' : 'animate-spin-slow '}>
            <button
              aria-label="Click!"
              className={
                isSection_2_Open
                  ? 'w-4 h-4 aspect-square sm:w-6 sm:h-6 rounded-sm bg-transparent border-[0.5px] border-greyShade2 transition-all'
                  : `w-4 h-4 aspect-square sm:w-6 sm:h-6 rounded-sm bg-corpo glow animate-pulse`
              }
            />
          </div> */}
        </div>
        <div className={`absolute top-0 right-0 h-[50%] w-[50%]`}>
          <div className="relative w-full h-full">
            <div className={`absolute top-0 right-0 h-[20%] w-[20%] `} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PseudoTechPanel;

// ${
//           hoverCondition
//             ? ''
//             : 'group-hover:opacity-100 group-hover:h-[25%] group-hover:w-[25%] group-hover:border-corpo duration-[0.6s] ease-in delay-[0.1s]'
//         }

{
  /* <div className="flex items-center  ">
                {' '}
                <div className="fc w-[10px] h-[10px] bg-dark border-[1px] border-greyShade1"></div>{' '}
                <div className="fc w-[10%] h-[1px] border-t-[1px] border-greyShade1"></div>{' '}
                <div className="pl-2 ">
                  <p className="p-small text-greyShade1">IP 67</p>
                </div>
              </div> */
}

{
  /* <div className="fc w-[10px] h-[10px] bg-dark border-[1px] border-greyShade1"></div>{' '}
                <div className=" fc w-[15%] h-[1px] border-t-[1px] border-greyShade1"></div>{' '}
                <div className="pl-2 ">
                  <p className="p-small text-greyShade1">125 A</p>
                </div> */
}
