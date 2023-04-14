import React, { useEffect, useRef } from 'react';
/**Components**/
import RowOfSlides from './draggableSliderContent/RowOfSlides';
/**Hook Staff**/
/**Framer Motion Staff*/
import { motion } from 'framer-motion';

/**HardCoded Staff**/
const largeCellSize = 200;
const smallCellSize = 150;
const minWidthForLargeCell = 475.22; //in relation with <Section_1> / <GraphisSection>'s container h-[340px] xs:h-[440px]
const minHeightForTwoLines = 300;

/**-------------------------------------------------------**/
const DraggableSlider: React.FunctionComponent<{
  width: number;
  heightValue: number;
  currentCategory: number;
  minHeight?: number;
}> = ({ width, heightValue, currentCategory }) => {
  /**...**/
  const constraintsRef = useRef(null);
  /**Hook Section / just tell me what device's orientation is... **/
  // const { width: windowWidth, height: windowHeight } = useWindowSize({
  //   screensNumber: 1,
  // });
  //**just initial condition**/
  //   if (!width || !height) return null;
  /**simple data; how many n-size cells can we put to the line**/
  const slideSide =
    width > minWidthForLargeCell ? largeCellSize : smallCellSize;
  const minNumberOfSlides = Math.trunc(width / slideSide);
  /** */
  const slidersLines = heightValue > minHeightForTwoLines ? 2 : 1;

  /**Handlers map(); we map as slider can have 1 or two "linesOfSlides"**/
  const createSlidersLineViaMap = Array.from({ length: slidersLines }).map(
    (_, i) => {
      /**___JSX of map();
       * it creates one or two "line/row/some f*ing div with slides...
       * **/
      return (
        <motion.div
          data-layout={`DraggableSlider__slidersRowNr${i}`}
          key={i}
          // key={JSON.stringify(windowWidth + windowHeight + i)}
          drag="x"
          dragConstraints={constraintsRef}
          // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragSnapToOrigin={false}
          dragElastic={0.9}
          dragMomentum={true}
        >
          <RowOfSlides
            //___just to follow category changes...
            currentCategory={currentCategory}
            //___just to specify slides...
            slidesNumber={minNumberOfSlides + 6}
            slideSide={slideSide}
            //___
            slidesLineIndex={i}
          />
        </motion.div>
      );
    }
  );

  /**...WTF**/
  //   useEffect(() => {
  //     console.log('tempRef.current', tempRef.current);
  //   }, [windowWidth, windowHeight]);
  // console.log({ slidersLines });

  /**JSX**/
  return (
    <div
      data-layout="DraggableSlider__container"
      ref={constraintsRef}
      className="flex flex-col justify-center items-center gap-4"
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
