import React, { useState } from 'react';

/**-------------------------------------------**/
const usePrevious = (state: number) => {
  const [prewSlideIndex, setPrevSlideIndex] = useState<number[]>([0, state]);
  /*
  ...it'a a trick how to get access to preview value of slideIndex
  */
  if (prewSlideIndex[1] !== state) {
    setPrevSlideIndex([prewSlideIndex[1], state]);
  }

  return prewSlideIndex[0];
};

export default usePrevious;
