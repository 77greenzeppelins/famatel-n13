import React, { useRef } from 'react';
/**Components**/
import RowOfSlides from './draggableSliderContent/RowOfSlides';
/**Hook Staff**/
/**Framer Motion Staff*/
import { motion } from 'framer-motion';
import InViewContainer from '../../../../../containers/inViewContainer/InViewContainer';
import InViewAnimatedContent from '../../../../../containers/inViewContainer/InViewAnimatedContent';
// import InViewAnimatedContent from '../../../../kontakt/_inViewAnimatedContent/InViewAnimatedContent';

/**HardCoded Staff**/
const largeCellSize = 280;
const smallCellSize = 150;
const minWidthForLargeCell = 768; //in relation with <Section_1> / <GraphisSection>'s container h-[340px] xs:h-[440px]
const sliderMaxWidth = 2000; //___max 2000px; it's a matter of items in array
const slidesNumberOffset = 6;

/**TS**/
interface Props {
  width: number;
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
  currentCategory,
  arrayOrder, //___specifief if read array from first or the last item
  xFactor,
  yFactor,
}) => {
  /**References**/
  const constraintsRef = useRef(null);
  /**simple data; how many n-size cells can we put to the line**/
  const slideSide =
    width > minWidthForLargeCell ? largeCellSize : smallCellSize;
  const minNumberOfSlides = Math.trunc(
    Math.min(width, sliderMaxWidth) / slideSide
  );

  /**JSX**/
  return (
    <div
      data-component="DraggableSlider__container"
      ref={constraintsRef}
      // className="flex flex-col justify-center items-center"
      /*
      (!) below class + delate of div in parentComponent goives interesting effect... 
      */
      className="relative fc w-full max-w-[2000px] overflow-hidden"
    >
      {/* {width && heightValue ? createSlidersLineViaMap : null} */}
      <motion.div
        aria-label="Element przesuwny / drag event"
        // data-layout={`DraggableSlider__slidersRow_Nr-${i}`}
        // key={i}
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
              slidesNumber={minNumberOfSlides + slidesNumberOffset}
              slideSide={slideSide}
              //___
            />
          </InViewAnimatedContent>
        </InViewContainer>
      </motion.div>
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
