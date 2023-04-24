import React, { useEffect, useRef } from 'react';
/**Components**/
import RowOfSlides from './draggableSliderContent/RowOfSlides';
/**Hook Staff**/
/**Framer Motion Staff*/
import { motion } from 'framer-motion';
import InViewContainer from '../../../../../containers/inViewContainer/InViewContainer';
import InViewAnimatedContent from '../../../../../containers/inViewContainer/InViewAnimatedContent';
// import InViewAnimatedContent from '../../../../kontakt/_inViewAnimatedContent/InViewAnimatedContent';

/**HardCoded Staff**/
const largeCellSize = 180;
const smallCellSize = 150;
const minWidthForLargeCell = 475.22; //in relation with <Section_1> / <GraphisSection>'s container h-[340px] xs:h-[440px]
const minHeightForTwoLines = 300;

/**TS**/
interface Props {
  width: number;
  heightValue: number;
  currentCategory: number;
  minHeight?: number;
  arrayOrder?: number;
  //___for <InViewAnimatedContent>
  xFactor?: string;
  yFactor?: string;
}
/**-------------------------------------------------------**/
const DraggableSlider: React.FC<Props> = ({
  width,
  heightValue,
  currentCategory,
  arrayOrder, //___specifief if read array from first or the last item
  xFactor,
  yFactor,
}) => {
  /**...**/
  const constraintsRef = useRef(null);

  //**just initial condition**/
  //   if (!width || !height) return null;
  /**simple data; how many n-size cells can we put to the line**/
  const slideSide =
    width > minWidthForLargeCell ? largeCellSize : smallCellSize;
  const minNumberOfSlides = Math.trunc(Math.min(width, 2000) / slideSide);
  /**simple data;...*/
  const slidersLines = heightValue > minHeightForTwoLines ? 2 : 1;

  /**Handlers map(); we map as slider can have 1 or two "linesOfSlides"**/
  const createSlidersLineViaMap = Array.from({ length: slidersLines }).map(
    (_, i) => {
      /*___JSX of map();
      it creates one or two "line/row/some f*ing div with slides...
      */
      return (
        <motion.div
          aria-label="Element przesuwny / drag event"
          data-layout={`DraggableSlider__slidersRow_Nr-${i}`}
          key={i}
          // key={JSON.stringify(windowWidth + windowHeight + i)}
          drag="x"
          dragConstraints={constraintsRef}
          // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragSnapToOrigin={false}
          dragElastic={0.9}
          dragMomentum={true}
        >
          <InViewContainer
            animationDelay={0.1}
            outherContainerStyle="w-full h-full "
            measuredElementStyle="w-full h-full "
            topFactor={0.25}
            bottomFactor={0.25}
          >
            <InViewAnimatedContent
              containerStyle="relative flex flex-col  justify-evenly w-full h-full"
              xFactor={xFactor}
              yFactor={yFactor}
            >
              <RowOfSlides
                //___just to follow category changes...
                currentCategory={currentCategory}
                //___just to specify slides...
                slidesNumber={minNumberOfSlides + 6}
                slideSide={slideSide}
                //___
                slidesLineIndex={arrayOrder ? arrayOrder : i}
              />
            </InViewAnimatedContent>
          </InViewContainer>
        </motion.div>
      );
    }
  );

  /**JSX**/
  return (
    <div
      data-layout="DraggableSlider__container"
      ref={constraintsRef}
      className="flex flex-col justify-center items-center"
    >
      {width && heightValue ? createSlidersLineViaMap : null}
    </div>
  );
};

export default DraggableSlider;

/**Direct Child**/
// const LineOfSlides = ({
//   slidesNumber,
//   slideSide,
// }: {
//   slidesNumber: number;
//   slideSide: number;
// }) => {
//   // if (!slidesNumber) return;
//   /**JSX**/
//   return (
//     <>
//       {Array.from({ length: slidesNumber }).map((_, i) => {
//         return (
//           <div
//             key={i}
//             className="flex flex-col border border-greyShade2"
//             style={{ width: slideSide, height: slideSide }}
//             // className="w-[250px]  h-[250px] border"
//             // className={`w-[${slideSide}px]  h-[${slideSide}px] border`}
//             // className={`${cellSize} border`}
//           >
//             <p className="fc flex-col w-full h-full text-corpo">
//               <span>{`n: ${slidesNumber}`}</span>
//               <span>{`i: ${i}`}</span>
//             </p>
//           </div>
//         );
//       })}
//     </>
//   );
// };

{
  /* <LineOfSlides
          slidesNumber={minNumberOfSlides + 4}
          slideSide={slideSide}
        /> */
}
