import React from 'react';
/**Components*/
import GraphicSection from './graphicSection/GraphicSection';
/**Hook Staf**/
import useWindowSize from '../../../../utils/hooks/useWindowSize';
import SquareImageHolder from '../../../multipagesComponents/imageHolder/SquareImageHolder';
import { imgOFirmiePage } from '../../../../public/images/oFirmiePage/imgOFirmiePage';
import { motion } from 'framer-motion';

/**------------------------------------------------------------------------**/
const Slide1: React.FunctionComponent<{
  slideNumber: number;
  scrollDeltaValue: number;
}> = ({ slideNumber, scrollDeltaValue }) => {
  /**...WTF**/
  //   console.log('isLandscape', isLandscape);
  /**Hook Section**/
  const { isLandscape } = useWindowSize({ screensNumber: 1 });

  /**JSX**/
  return (
    <div
      className={`flex ${
        !isLandscape
          ? 'flex-col-reverse'
          : slideNumber === 0
          ? `flex-row`
          : 'flex-row-reverse'
      } w-full h-full`}
    >
      <div
        className={` fc ${isLandscape ? `w-[50%] h-full` : 'w-full h-[50%]'} `}
      >
        <GraphicSection />
        {/* <SquareImageHolder
          imageData={imgOFirmiePage[0].image}
          refDivStyle="flex justify-start items-end w-full h-full "
          squareDivStyle="relative overflow-hidden"
        >
          <motion.button
            className="absolute top-[20%] left-[30%] h-[65%] w-[65%] "
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              type: 'spring',
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            }}
          >
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between w-full h-[30%] ">
                <div className="w-[30%] h-full border-t border-l border-grey" />
                <div className="w-[30%] h-full border-t border-r border-grey" />
              </div>
              <div className="flex justify-between  w-full h-[30%] ">
                <div className="w-[30%] h-full border-b border-l border-grey" />
                <div className="w-[30%] h-full border-b border-r border-grey" />
              </div>
            </div>
          </motion.button>
        </SquareImageHolder> */}

        {/**************************************** */}
      </div>
      <div
        className={` flex flex-col ${
          isLandscape ? `w-[50%] h-full` : 'w-full h-[50%]'
        } text-3xl text-light px-[2%] md:px-[60px]`}
      >
        <div className="flex h-[50%] justify-end items-end bg-dark pb-6 z-[10] ">
          <h1 className="text-[4rem] text-right leading-[5rem] uppercase">
            Elektryka <br />
            Przemysłowa
          </h1>
        </div>
        <div className="flex h-[50%] justify-end  bg-dark pt-6 z-[1]">
          <p className="text-[2rem] text-grey text-right leading-[2rem]">
            Zobacz pełną ofertę
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
