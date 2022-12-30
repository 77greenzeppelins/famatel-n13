import React from 'react';
/*Framer Motion Staff*/
import { x1, x2, y1, y2, noAnimation } from './flyingLine_FM';
import { motion } from 'framer-motion';

/*TS*/
interface IProps {
  variantsNumber: number;
  bgColor?: string;
  fgColor?: string;
}

/******************************************************************************************/
const FlyingLine = ({ variantsNumber, bgColor, fgColor }: IProps) => {
  let variants;

  switch (variantsNumber) {
    case 0:
      noAnimation;
      break;
    case 1:
      //for <Arrow>
      variants = x1;
      break;
    case 2:
      variants = x2;
      break;
    case 3:
      //for <Arrow>
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
        className={`absolute left-0 top-0 right-0 w-full h-full ${
          bgColor || 'bg-grey'
        } `}
      />
      <motion.div
        className={`absolute w-full h-full  ${fgColor || 'bg-light'}`}
        variants={variants}
        animate="animate"
        initial="initial"
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 1 }}
      />
    </>
  );
};

export default FlyingLine;
