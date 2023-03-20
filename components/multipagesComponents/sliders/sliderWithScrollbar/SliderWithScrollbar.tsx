import React, { ReactNode, useState } from 'react';
/**Components**/
import SliderScrollbar from './sliderScrollbar/SliderScrollbar';
/**Hooks staff**/
import useElementSize from '../../../../utils/hooks/useElementSize';
/**Framer Motion Staff**/
import { motion, useMotionValue } from 'framer-motion';

/**--------------------------------------**/
const SliderWithScrollbar: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  /**Local State**/
  const [translateXValue, setTranslateXValue] = useState(0);
  /**Layout Calculator**/
  const [squareRef, { width, scrollWidth }] = useElementSize();
  /*Framer Motion Section*/
  const translateXMotionValue = useMotionValue(0);
  /**JSX**/
  return (
    <div
      data-component="CarouselWithScrollbar__container"
      className="flex h-full flex-col"
    >
      <div
        data-layout="carousel-viewBox"
        className="relative h-[85%] overflow-x-hidden  pl-2 pr-6"
      >
        <motion.div
          ref={squareRef}
          data-layout="carousel-contentSlides--wrapper"
          className=" grid grid-flow-col-dense gap-[1rem] h-full py-2 "
          style={{ translateX: translateXValue }}
        >
          {children}
        </motion.div>
      </div>
      <div
        data-layout="carouselScrollbar--wrapper"
        className="fc h-[15%] w-full pt-4"
      >
        <div className="w-[50%]">
          {width !== scrollWidth && (
            <SliderScrollbar
              translateX={-(scrollWidth - width)}
              setTranslateXValue={setTranslateXValue}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SliderWithScrollbar;
