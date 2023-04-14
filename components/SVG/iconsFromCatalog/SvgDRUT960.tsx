import React from 'react';
/**Basic Data**/
import { corpoColors } from '../../../data/_data';

/*TS*/
import { IF_IconProps } from '../../../utils/TS/typeScriptStaff';
/**-----------------------------------------------------------**/
const SvgDRUT960: React.FC<IF_IconProps> = ({ colorFG, className }) => {
  /*
  JSX
  */
  return (
    <svg
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={className ? className : 'w-full aspect-square'}
      viewBox="0 0 100 100"
    >
      <text
        x="5.383"
        y="61.453"
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
          lineHeight: '0.9',
        }}
        fontFamily="Arial"
        fontSize="32"
        letterSpacing="0"
        fill={colorFG ? colorFG : '#fff'}
      >
        <tspan x="5.383" y="61.453">
          960°C
        </tspan>
      </text>
    </svg>
  );
};

export default SvgDRUT960;
