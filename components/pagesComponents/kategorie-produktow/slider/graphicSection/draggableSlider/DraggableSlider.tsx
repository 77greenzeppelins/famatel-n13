import React, { useEffect, useRef } from 'react';
/**Components**/
import DraggableSlidesContainer from './draggableSlidesContainer/DraggableSlidesContainer';
/**Hook Staff**/
import useWindowSize from '../../../../../../utils/hooks/useWindowSize';
/**Framer Motion Staff*/
import { motion } from 'framer-motion';

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

/**-------------------------------------------------------**/
const DraggableSlider: React.FunctionComponent<{
  width: number;
  height: number;
}> = ({ width, height }) => {
  /**...**/
  const constraintsRef = useRef(null);
  /**Hook Section / just tell me what device's orientation is... **/
  const {
    isLandscape,
    width: windowWidth,
    height: windowHeight,
  } = useWindowSize({ screensNumber: 1 });
  //**just initial condition**/
  //   if (!width || !height) return null;
  /**simple data; how many n-size cells can we put to the line**/
  const slideSide = width > 500 ? 200 : 150;
  const minNumberOfSlides = Math.trunc(width / slideSide);
  /** */
  const slidersLines = height > 400 ? 2 : 1;
  /**Handlers map(); we map as slider can have 1 or two "linesOfSlides"**/
  const createContent = Array.from({ length: slidersLines }).map((_, i) => {
    /**map() JSX; gragable "slidesHolder"...**/

    return (
      <motion.div
        // ref={tempRef}
        data-layout="DraggableSlider__lineContainer"
        // key={i + windowWidth + windowHeight}
        key={JSON.stringify(windowWidth + windowHeight + i)}
        className="flex"
        drag="x"
        dragConstraints={constraintsRef}
        // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragSnapToOrigin={false}
        dragElastic={0.9}
        dragMomentum={true}
      >
        {/* <LineOfSlides
          slidesNumber={minNumberOfSlides + 4}
          slideSide={slideSide}
        /> */}
        <DraggableSlidesContainer
          slidesNumber={minNumberOfSlides + 4}
          slideSide={slideSide}
        />
      </motion.div>
    );
  });

  /**...WTF**/
  //   useEffect(() => {
  //     console.log('tempRef.current', tempRef.current);
  //   }, [windowWidth, windowHeight]);
  /**JSX**/
  return (
    <div
      ref={constraintsRef}
      className="flex flex-col justify-center items-center gap-4  "
    >
      {width && height ? createContent : null}
    </div>
  );
};

export default DraggableSlider;
