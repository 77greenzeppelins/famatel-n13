import React from 'react';
import { corpoColors } from '../../../data/_data';

/*TS*/
interface IProps {
  size?: number;
  colorFG?: string;
  colorBG?: string;
  colorBGOpacity?: string;
  // ID: string;
}

const SvgIconIP55 = ({
  colorFG,
  colorBG,
  colorBGOpacity,
}: //size,
//  ID
IProps) => {
  /*
  JSX
  */
  return (
    <svg
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
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
        // x="-0.167"
        // y="71.932"
        style={{
          fontVariantCaps: 'normal',
          fontVariantEastAsian: 'normal',
          fontVariantLigatures: 'normal',
          fontVariantNumeric: 'normal',
        }}
        // strokeWidth=""
        fontFamily="Arial"
        // fontSize="24"
        // fontWeight="bold"
        // fontWeight="normal"
        fill={colorFG ? colorFG : '#fff'}
        className="text-[1.25rem] tracking-[0.0525rem]"
      >
        <tspan
          // x="-0.16707221 7.1448364"// when commented, allows to apply "tracking-[0.0525rem]" ???
          y="71.932"
          style={{
            fontVariantCaps: 'normal',
            fontVariantEastAsian: 'normal',
            fontVariantLigatures: 'normal',
            fontVariantNumeric: 'normal',
          }}
        >
          IP55
        </tspan>
      </text>
      <g data-layout="umbrella" fill={colorFG ? colorFG : '#fff'}>
        <path d="M57.164 8.355c5.748.029 11.123.928 16.104 2.677 5.01 1.745 9.378 4.184 13.14 7.284 3.79 3.125 6.73 6.726 8.849 10.832 2.118 4.082 3.207 8.504 3.231 13.222h-.16c-1.88-1.433-3.708-2.467-5.428-3.153-1.696-.665-3.392-.981-5.059-.981-1.642 0-3.314.316-4.956.98-1.614.687-3.31 1.721-5.059 3.154h-.16c-1.88-1.433-3.63-2.467-5.243-3.153-1.618-.665-3.207-.981-4.768-.981-1.034 0-2.094.13-3.207.398-1.084.263-2.196.714-3.31 1.35v46.463c-.028 2.357-.61 4.45-1.724 6.331a12.597 12.597 0 01-4.529 4.398c-1.905 1.084-3.999 1.642-6.303 1.667-2.307-.025-4.397-.583-6.253-1.667a12.37 12.37 0 01-4.447-4.398c-1.113-1.88-1.671-3.974-1.696-6.331.025-.793.21-1.458.608-1.959.398-.53.874-.903 1.482-1.166a5.197 5.197 0 011.88-.37c.666 0 1.274.132 1.881.37a3.545 3.545 0 011.487 1.166c.394.501.607 1.166.607 1.959.025 1.297.477 2.357 1.323 3.178.85.821 1.909 1.248 3.128 1.273 1.245-.025 2.304-.452 3.203-1.273.904-.821 1.351-1.88 1.405-3.178V39.665a13.307 13.307 0 00-2.965-1.084 13.354 13.354 0 00-3.076-.345c-1.745 0-3.523.316-5.296.981-1.774.686-3.523 1.72-5.19 3.154h-.16c-1.59-1.433-3.208-2.468-4.875-3.154a13.792 13.792 0 00-5.14-.981c-1.746 0-3.47.316-5.137.981-1.696.686-3.363 1.72-5.034 3.154h-.477c.03-4.718 1.113-9.14 3.232-13.222 2.119-4.106 5.087-7.707 8.849-10.832 3.76-3.1 8.158-5.54 13.14-7.285 4.976-1.749 10.356-2.648 16.104-2.677"></path>
      </g>
      <g
        data-layout="dots-on-umbrella"
        fill={colorBG ? colorBG : corpoColors.dark}
      >
        <path d="M34.913 16.143c2.41.554 4.106 1.19 5.034 1.88.924.69 1.376 1.458 1.322 2.25-.024.875-.316 1.619-.899 2.173a3.241 3.241 0 01-2.119.85c-.583.024-1.112-.16-1.589-.559-.476-.37-.874-1.084-1.22-2.118-.344-1.06-.636-2.542-.85-4.476zM26.648 22.818c2.41.554 4.106 1.19 5.034 1.88.924.69 1.376 1.458 1.322 2.25-.024.875-.316 1.619-.899 2.177a3.258 3.258 0 01-2.119.846c-.583.024-1.112-.16-1.589-.559-.476-.37-.874-1.084-1.22-2.118-.344-1.06-.636-2.542-.845-4.476z"></path>
      </g>
      <g fill={colorFG ? colorFG : '#fff'}>
        <path d="M14.573 16.42c2.41.554 4.106 1.19 5.034 1.88s1.376 1.458 1.322 2.25c-.024.875-.316 1.619-.899 2.173a3.241 3.241 0 01-2.119.85c-.583.024-1.112-.16-1.589-.559-.476-.37-.874-1.084-1.22-2.143-.344-1.035-.636-2.517-.845-4.451zM21.404 11.375c2.41.558 4.106 1.19 5.034 1.88.924.69 1.376 1.458 1.322 2.25-.024.875-.316 1.618-.899 2.177a3.237 3.237 0 01-2.119.846c-.583.028-1.112-.16-1.589-.559-.476-.37-.874-1.084-1.22-2.143-.344-1.035-.636-2.517-.85-4.451zM23.453 2.84c2.41.554 4.106 1.19 5.034 1.88.924.69 1.376 1.458 1.322 2.25-.024.875-.316 1.618-.899 2.177a3.258 3.258 0 01-2.119.845c-.583.025-1.112-.16-1.589-.558-.476-.37-.874-1.084-1.22-2.143-.344-1.035-.636-2.517-.845-4.451z"></path>
      </g>
    </svg>
  );
};

export default SvgIconIP55;
