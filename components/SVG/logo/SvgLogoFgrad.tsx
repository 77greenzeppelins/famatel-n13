/**BasicData*/
import { corpoColors } from '../../../data/_data';

/**------------------------------------------------------------------------------*/
const SvgLogoFgrad: React.FC<{ className: string }> = ({ className }) => {
  /**JSX*/
  return (
    <svg
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 358 500"
    >
      <defs>
        <linearGradient
          id="linearGradient3284"
          x1="185"
          x2="346.2"
          y1="383.21"
          y2="383.21"
          gradientTransform="matrix(1 0 0 .1 0 145.32)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopOpacity="0" stop-color="white"></stop>
          <stop offset="0.25" stop-color="white"></stop>
          <stop offset="0.75" stopOpacity="0.839" stop-color="white"></stop>
          <stop offset="1" stopOpacity="0" stop-color="white"></stop>
        </linearGradient>
        <linearGradient
          id="linearGradient3292"
          x1="185"
          x2="346.2"
          y1="383.21"
          y2="383.21"
          gradientTransform="matrix(1 0 0 .1 0 305.57)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopOpacity="0" stop-color="white"></stop>
          <stop offset="0.25" stop-color="white"></stop>
          <stop offset="0.75" stopOpacity="0.839" stop-color="white"></stop>
          <stop offset="1" stopOpacity="0" stop-color="white"></stop>
        </linearGradient>
        <linearGradient
          id="linearGradient3296"
          x1="185"
          x2="346.2"
          y1="383.21"
          y2="383.21"
          gradientTransform="matrix(1 0 0 .1 -1.83 -222.12)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopOpacity="0" stop-color="white"></stop>
          <stop offset="0.25" stop-color="white"></stop>
          <stop offset="0.75" stopOpacity="0.839" stop-color="white"></stop>
          <stop offset="1" stopOpacity="0" stop-color="white"></stop>
        </linearGradient>
        <linearGradient
          id="linearGradient3300"
          x1="185"
          x2="346.2"
          y1="383.21"
          y2="383.21"
          gradientTransform="matrix(1 0 0 .1 -1.83 -382.32)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopOpacity="0" stop-color="white"></stop>
          <stop offset="0.25" stop-color="white"></stop>
          <stop offset="0.75" stopOpacity="0.839" stop-color="white"></stop>
          <stop offset="1" stopOpacity="0" stop-color="white"></stop>
        </linearGradient>
      </defs>
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="1"
        d="M14 13.888v472.226h138.39V152.29H344V13.888z"
      ></path>
      <path
        fill="none"
        stroke="#fff"
        d="M183.8 343.9H344V183.65H183.8z"
        display="none"
      ></path>
      <path
        fill="url(#linearGradient3284)"
        d="M185 183.14H346.2V184.14H185z"
      ></path>
      <path
        fill="url(#linearGradient3292)"
        d="M185 343.4H346.2V344.4H185z"
      ></path>
      <path
        fill="url(#linearGradient3296)"
        d="M183.17 -184.3H344.37V-183.3H183.17z"
        transform="rotate(90)"
      ></path>
      <path
        fill="url(#linearGradient3300)"
        d="M183.17 -344.5H344.37V-343.5H183.17z"
        transform="rotate(90)"
      ></path>
    </svg>
  );
};

export default SvgLogoFgrad;
