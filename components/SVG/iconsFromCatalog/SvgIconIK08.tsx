import React from 'react';
/**Basic Data*/
import { corpoColors } from '../../../data/_data';

/*TS*/
interface IProps {
  colorFG?: string;
  colorBG?: string;
  colorBGOpacity?: string;
  // ID: string;
  // size?: number;
}

/****************************************************************************/
const SvgIconIK08 = ({
  colorFG,
  colorBG,
  colorBGOpacity,
}: // size, ID
IProps) => {
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
        x="4.583"
        y="90.299"
        fontFamily="Arial"
        className="text-[1.25rem] tracking-[0.0525rem]"
        fill={colorFG ? colorFG : '#fff'}
      >
        IK08
      </text>
      {/*
        ------------------------------------------------------------------------
        */}
      <g strokeLinecap="round">
        <path
          fill={colorFG ? colorFG : '#fff'}
          strokeLinejoin="round"
          strokeWidth="11.043"
          d="M118.85 38.068a1.407 1.407 0 00-1.385 1.123c-.018.093-.027.19-.027.29v25.716a1.41 1.41 0 001.123 1.387c.093.018.19.027.289.027h25.773a1.404 1.404 0 001.412-1.414V39.48a1.408 1.408 0 00-.857-1.303 1.406 1.406 0 00-.555-.109zm2.38 1.035a2.932 2.932 0 01.59.059 2.874 2.874 0 011.046.443 2.927 2.927 0 011.275 2.13 2.951 2.951 0 01-.045.886 2.86 2.86 0 01-.17.549 2.941 2.941 0 01-.836 1.119 2.936 2.936 0 01-1.27.61 2.928 2.928 0 01-.59.058 2.904 2.904 0 01-.587-.059 2.882 2.882 0 01-1.045-.441 2.927 2.927 0 01-1.06-1.287 2.906 2.906 0 01-.172-.55 2.892 2.892 0 01-.059-.587 3.073 3.073 0 01.13-.87 2.937 2.937 0 01.538-.991 2.986 2.986 0 01.863-.715 2.915 2.915 0 011.393-.354zm20.345 0a2.932 2.932 0 01.588.059 2.873 2.873 0 011.045.443 2.96 2.96 0 01.433.358 2.984 2.984 0 01.627.931 2.908 2.908 0 01.172.549 2.932 2.932 0 01.059.59 3.072 3.072 0 01-.059.588 2.86 2.86 0 01-.295.804 2.925 2.925 0 01-.504.674 2.944 2.944 0 01-.433.358 2.907 2.907 0 01-3.268 0 2.927 2.927 0 01-1.275-2.125 2.95 2.95 0 01.045-.889 2.862 2.862 0 01.17-.549 2.942 2.942 0 012.396-1.777c.098-.01.198-.014.299-.014zm.375 20.24a2.904 2.904 0 01.867.133 2.915 2.915 0 01.525.223 2.908 2.908 0 01.674.504 2.95 2.95 0 01.358.431 2.953 2.953 0 01.5 1.635 3.073 3.073 0 01-.131.87 2.908 2.908 0 01-.37.765 2.955 2.955 0 01-.357.433 2.974 2.974 0 01-.674.506 2.906 2.906 0 01-.805.295 2.92 2.92 0 01-2.222-.441 2.951 2.951 0 01-.433-.36 2.923 2.923 0 01-.504-.673 2.914 2.914 0 01-.221-2.264 2.885 2.885 0 01.725-1.197 2.974 2.974 0 011.199-.727 2.882 2.882 0 01.869-.133zm-20.318.25a2.904 2.904 0 01.588.059 2.883 2.883 0 011.045.441 2.93 2.93 0 011.06 1.287 2.906 2.906 0 01.172.55 2.93 2.93 0 01.059.587 3.073 3.073 0 01-.131.87 2.937 2.937 0 01-.537.991 2.989 2.989 0 01-.864.715 2.918 2.918 0 01-1.982.295 2.873 2.873 0 01-1.045-.443 2.927 2.927 0 01-1.275-2.13 2.951 2.951 0 01.045-.886 2.86 2.86 0 01.17-.549 2.941 2.941 0 01.27-.496c.052-.078.11-.152.169-.224a2.957 2.957 0 01.397-.399 2.938 2.938 0 011.269-.61 2.928 2.928 0 01.59-.058z"
          transform="translate(-103.97 -16.762) scale(1.2995)"
        ></path>
        <path
          //   fill="none"
          //   stroke="#000000"
          stroke={colorFG ? colorFG : '#fff'}
          strokeWidth="0.814"
          d="M140.04 63.849l3.854-3.102M123.72 63.849l-3.854-3.102M123.08 40.302l-3.854 3.102M139.83 40.302l3.854 3.102"
          transform="translate(-103.97 -16.762) scale(1.2995)"
        ></path>
      </g>
      <path
        id="hammer-and-verticalLine"
        fill={colorFG ? colorFG : '#fff'}
        d="M90.723 99.785h1.588V.078l-1.588.018zM59.962.081l6.152-.003-34.921 34.925 6.062 5.51.176 6.776-3.924 3.566-6.238-.18-16.96-15.4 10.519-9.984 7.19 6.735zM9.298 39.102c-2.255-2.61-2.135-5.459-.831-7.831-.552 2.572-.038 5.024 2.255 7.714z"
      ></path>
      <path
        id="hammers-reflex-1"
        fill={colorFG ? colorFG : '#fff'}
        // stroke={colorFG ? colorFG : '#fff'}
        d="M6.904 41.019c-2.966-3.435-2.81-7.18-1.093-10.3-.728 3.38-.052 6.607 2.965 10.145z"
      ></path>
      <path
        id="hammers-reflex-2"
        // stroke={colorFG ? colorFG : '#fff'}
        fill={colorFG ? colorFG : '#fff'}
        d="M6.904 41.019c-2.966-3.435-2.81-7.18-1.093-10.3-.728 3.38-.052 6.607 2.965 10.145zM15.237 20.916c4.155-1.824 7.69-.572 10.169 1.986-3.02-1.693-6.3-1.993-10.573-.148zM16.366 23.768c3.159-1.386 5.845-.438 7.728 1.51-2.293-1.286-4.79-1.517-8.031-.113z"
      ></path>
    </svg>
  );
};

export default SvgIconIK08;
