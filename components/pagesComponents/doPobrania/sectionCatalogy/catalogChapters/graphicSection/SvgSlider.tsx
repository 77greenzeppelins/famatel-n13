import React from 'react';
/**FramerMotion Staff**/
import { AnimatePresence, motion } from 'framer-motion';
/**Basic Data**/
import { svgTech_darkBackground_categories } from '../../../../../SVG/techDrawings/0_dark/darkBackground';
import SlideWithSvg from './slide/SlideWithSvg';
/**HaardCoded Data**/
const svgMaxHeight = 'max-h-[540px]';
/**TS**/
import { IF_NormalizedNumbers } from '../../../../../../utils/TS/typeScriptStaff';

interface Props extends IF_NormalizedNumbers {
  stateId: string;
}
/**------------------------------------------------------------------**/
const SvgSlider: React.FC<Props> = ({ stateId, normalizedValues }) => {
  /**Calculations**/
  // function sigmoid(x: number): number {
  //   return 100 / (1 + Math.exp(-10 * x));
  // }
  function mapInputToRange(input: number): number {
    const steepnessFactor = 10; // Adjust this value to control the steepness of the curve
    // const xNorm = input / 0.5;
    const xNorm = input;
    // const mappedValue = 200 / (1 + Math.exp(steepnessFactor * xNorm)) - 100;
    const mappedValue = 50 / (1 + Math.exp(steepnessFactor * xNorm)) - 25;

    return mappedValue;
  }
  /**JSX**/
  return (
    <motion.ul
      className="relative fc w-full h-full"
      // style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      // animate={{
      //   // rotateY: mapInputToRange(normalizedValues.x),
      //   rotateX: mapInputToRange(normalizedValues.y),
      //   // scale: 1.05,
      //   transition: { duration: 0.5 },
      // }}
    >
      {/* <div className="flex flex-col text-corpo">
        <p>{`function for X: ${mapInputToRange(normalizedValues.x).toFixed(
          2
        )}`}</p>
      </div> */}
      <AnimatePresence>
        {svgTech_darkBackground_categories.map(({ id, Component }) => {
          if (stateId === id.toString()) {
            return <SlideWithSvg key={stateId} Component={Component} />;
          }
        })}
      </AnimatePresence>
    </motion.ul>
  );
};

export default SvgSlider;

{
  /* <p>{`normalizedX: ${normalizedValues.x.toFixed(2)}`}</p> */
}
{
  /* <p>{`normalizingY: ${normalizedValues.y.toFixed(2)}`}</p> */
}
{
  /* <p>{`function for X: ${sigmoid(normalizedValues.x).toFixed(2)}`}</p> */
}
{
  /* <p>{`function for Y: ${sigmoid(normalizedValues.y).toFixed(2)}`}</p> */
}
// <motion.li
//   className="absolute fc w-full h-full "
//   key={stateId}
//   initial={{ opacity: 0, scale: 0.95 }}
//   animate={{
//     opacity: 1,
//     scale: 1,
//     transition: { delay: 0.2, duration: 0.4 },
//   }}
//   exit={{
//     opacity: 0,
//     scale: 1,
//   }}
// >
//   <Component
//     className={`w-[80%] aspect-square ${svgMaxHeight}`}
//   />
// </motion.li>
