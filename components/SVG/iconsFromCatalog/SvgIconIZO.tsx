import React from 'react';
/**Basic data*/
import { corpoColors } from '../../../data/_data';
/*TS*/
interface IProps {
  // size?: number;
  colorFG?: string;
  colorBG?: string;
  colorBGOpacity?: string;
}

/**************************************************************************/
const SvgIconIZO = ({
  //  size,
  colorFG,
  colorBG,
  colorBGOpacity,
}: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width={`${size}`}
      // height={`${size}`}
      className="w-full h-full"
      viewBox="0 0 100 100"
    >
      <path
        data-layout="background"
        fill={colorBG ? colorBG : corpoColors.dark}
        fillOpacity={colorBGOpacity ? colorBGOpacity : 1}
        d="M0 0H100V100H0z"
      ></path>
      <path
        fill="none"
        stroke={colorFG ? colorFG : '#ffffff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 10H90V90H10z"
      ></path>
      <path
        fill="none"
        stroke={colorFG ? colorFG : '#ffffff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M25.636 25.636H73.636V73.636H25.636z"
      ></path>
    </svg>
  );
};

export default SvgIconIZO;
