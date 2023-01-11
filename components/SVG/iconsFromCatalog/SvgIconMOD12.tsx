import React from 'react';
/**Basic Data**/
import { corpoColors } from '../../../data/_data';

/*TS*/
interface IProps {
  // size?: number;
  colorFG?: string;
  colorBG?: string;
  colorBGOpacity?: string;
  // ID: string;
}

/********************************************************************************/
const SvgMOD12 = ({
  //  size,
  colorFG,
  colorBG,
  colorBGOpacity,
}: // ID,
IProps) => {
  /*
  ...WTF: slice first 3 letters  
  */
  // const modID = ID.slice(3);
  /*
  JSX
  */
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width={`${size}`}
      // height={`${size}`}
      className="w-full aspect-square"
      viewBox="0 0 100 100"
    >
      <path
        data-layout="background"
        fill={colorBG ? colorBG : corpoColors.dark}
        fillOpacity={colorBGOpacity ? colorBGOpacity : 1}
        d="M0 0H100V100H0z"
      ></path>
      <text
        x="72.753"
        y="96.004"
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
        }}
        strokeWidth="1.333"
        fontFamily="Arial"
        fontSize="37.714"
        fill={colorFG ? colorFG : '#fff'}
      >
        <tspan
          x="72.753"
          y="96.004"
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
          }}
        >
          {/* {modID} */}
          12
        </tspan>
      </text>
      <path
        fill={colorFG ? colorFG : '#fff'}
        d="M5.655 3.067h48.817v21.059h12.745v13.816a12.99 12.99 0 013.376 1.982l5.377-3.816 4.171 5.876-5.377 3.816c1.959 5.469-1.907 13.248-4.827 15.317-2.92 2.074-1.778 1.109-2.72 1.492v10.287H54.472v23.831H5.655V77.054h8.87V22.74l-8.87 5.543z"
      ></path>
    </svg>
  );
};

export default SvgMOD12;
