import React, { ReactNode, useEffect, useRef, useState } from 'react';
/**Components**/
import SliderScrollbar from './sliderScrollbar/SliderScrollbar';
/**Hooks staff**/
import useElementSize from '../../../../utils/hooks/useElementSize';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';

/**--------------------------------------**/
const SliderWithScrollbar: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  /**References**/
  const timeoutRef = useRef<NodeJS.Timeout>();
  /**Local State**/
  const [translateXValue, setTranslateXValue] = useState(0);
  /**Layout Calculator**/
  const [squareRef, { width, scrollWidth }] = useElementSize();
  const mountingCondition = width !== scrollWidth; //for <SliderScrollbar>

  /**Resizer**/
  useEffect(() => {
    //___resize handler
    function handleResize() {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setTranslateXValue(0);
        // console.log('________handleResize');
      }, 400);
    }
    //__listener
    window.addEventListener('resize', handleResize);
    //__cleaner
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  /**____________________________**/
  /**JSX**/
  return (
    <div
      data-component="SliderWithScrollbar__container"
      className="flex flex-col h-full gap-y-7 pb-[14px]"
    >
      <div
        data-layout="carousel-viewBox"
        className="relative h-[85%] overflow-x-hidden"
        //___pl-2 pr-6
      >
        <motion.div
          /*
          this element is a holder of content we want to "move" / translate on x-axis;
          it might be the holder of a table, that stops decreasing according to screen size changes; to be fully visible it requires mechanism that shows it on smaller screens;
          */
          ref={squareRef}
          data-layout="carousel-contentHolder"
          style={{ translateX: translateXValue }}
        >
          {children}
        </motion.div>
      </div>

      {mountingCondition && (
        <div data-layout="carouselScrollbar--wrapper" className="fc w-full">
          <div className="w-[80%]">
            <SliderScrollbar
              translateX={-(scrollWidth - width)} //tells how many pixels of the element are invisible = should be reveled during scrolling
              setTranslateXValue={setTranslateXValue}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderWithScrollbar;

{
  /* <div data-layout="carouselScrollbar--wrapper" className="fc w-full">
        <div className="w-[80%]">
          {mountingCondition && (
            <SliderScrollbar
              translateX={-(scrollWidth - width)}
              setTranslateXValue={setTranslateXValue}
            />
          )}
        </div>
      </div> */
}
