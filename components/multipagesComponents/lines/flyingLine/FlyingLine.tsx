import React from 'react';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
import { x1, x2, y1, y2, noAnimation } from './flyingLine_FM';

/**---------------------------------------------------------------------------**/
const FlyingLine: React.FunctionComponent<{
  variantsNumber: number;
  bgColor?: string;
  fgColor?: string;
}> = ({ variantsNumber, bgColor, fgColor }) => {
  /**...**/
  const createVariant = (variantsNumber: number) => {
    switch (variantsNumber) {
      case 0:
        return noAnimation;
      case 1:
        return x1;
      case 2:
        return x2;
      case 3:
        return y1;
      case 4:
        return y2;
      default:
        return noAnimation;
    }
  };
  let variants;

  switch (variantsNumber) {
    case 0:
      noAnimation;
      break;
    case 1:
      variants = x1;
      break;
    case 2:
      variants = x2;
      break;
    case 3:
      variants = y1;
      break;
    case 4:
      variants = y2;
      break;
    default:
      noAnimation;
      break;
  }

  return (
    <>
      <div
        className={`absolute left-0 top-0 right-0 w-[0.5px] h-full ${
          bgColor || 'bg-grey'
        } `}
      />
      <motion.div
        className={`absolute w-[0.5px] h-full  ${fgColor || 'bg-light'}`}
        // variants={variants}
        variants={createVariant(variantsNumber)}
        animate="animate"
        initial="initial"
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 1 }}
      />
    </>
  );
};

export default FlyingLine;

// let variants;

// switch (variantsNumber) {
//   case 0:
//     noAnimation;
//     break;
//   case 1:
//     //for <Arrow>
//     variants = x1;
//     break;
//   case 2:
//     variants = x2;
//     break;
//   case 3:
//     //for <Arrow>
//     variants = y1;
//     break;
//   case 4:
//     variants = y2;
//     break;
//   default:
//     noAnimation;
//     break;
// }
