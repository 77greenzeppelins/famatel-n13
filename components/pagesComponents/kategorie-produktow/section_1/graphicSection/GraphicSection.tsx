import React from 'react';
/**Hook Staff**/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
import useMeasure from 'react-use-measure';
/**Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import DraggableSlider from './draggableSlider/DraggableSlider';

/**--------------------------------------------------------------------------------**/
const GraphicSection: React.FunctionComponent<{
  categoryIndex: number;
  isPreviewOpen: boolean;
}> = ({ categoryIndex, isPreviewOpen }) => {
  /**Hook Section / just tell me what device's orientation is... **/
  const {
    isLandscape,
    // width: windowWidth,
    // height: windowHeight,
  } = useWindowSize({ screensNumber: 1 });
  /**Hook Section / just count container of "sliding" images... **/
  const [ref, { width, height }] = useMeasure();

  /**JSX**/
  return (
    <div className="relative flex items-start w-full h-full overflow-hidden">
      <div className="absolute fc inset-0">
        <div
          className={`h-full w-full disable-soft `}
          //___${isLandscape ? 'inner-pr-md-lg' : 'inner-px-md-lg'}
        >
          <div
            ref={ref}
            className="relative fc flex-col h-full w-full overflow-hidden "
          >
            <DraggableSlider
              width={width}
              height={height}
              currentCategory={categoryIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicSection;

//      <motion.p className="fc w-full h-full text-grey text-[0.75rem] flex flex-col">
//   <span>{`w: ${Math.trunc(width)}`}</span>
//   <span>{` h: ${Math.trunc(height)}`}</span>
//   <span>{`n: ${minNumberOfSlides}`}</span>
//   <span>{`cat: ${currentCategory + 1}`}</span>
// </motion.p>

// const containerHeight = isLandscape ? height : height / 2;
// const containerWidth = isLandscape ? width / 2 : width;
// const slideWidth =
//   containerWidth >= containerHeight ? containerHeight : containerWidth;

// const slideHeight =
//   containerHeight >= containerWidth ? containerWidth : containerHeight;
// /**/

//------------------------------------------------------------------------------------
//_____Part_1
/**Direct Child**/
// const Line = ({ slidesNumber }: { slidesNumber: number }) => {
//   // if (!slidesNumber) return;
//   /**JSX**/
//   return (
//     <>
//       {Array.from({ length: slidesNumber }).map((_, i) => {
//         return (
//           <div
//             key={i}
//             className="flex flex-col "
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
//_____Part_2
// const createLinesOfSlides = () => {
//   //**just initial condition**/
//   if (!width || !height) return;
//   /**simple data; how many n-size cells can we put to the line**/
//   const minNumberOfSlides = Math.trunc(width / slideSide);
//   /**Handlers map(); we map as slider can have 1 or two "linesOfSlides"**/
//   const createContent = Array.from({ length: slidersLines }).map((_, i) => {
//     /**map() JSX; gragable "slidesHolder"...**/
//     return (
//       <motion.div
//         data-layout="lineOfSlides"
//         key={i + windowWidth + windowHeight - width - height}
//         className="flex"
//         drag="x"
//         dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
//         dragSnapToOrigin={false}
//         dragElastic={0.9}
//         dragMomentum={true}
//       >
//         <Line slidesNumber={minNumberOfSlides + 4} />
//       </motion.div>
//     );
//   });
//   /**Handlers JSX**/
//   return (
//     <div className="flex flex-col justify-center items-center   gap-4  ">
//       {createContent}
//     </div>
//   );
// };
