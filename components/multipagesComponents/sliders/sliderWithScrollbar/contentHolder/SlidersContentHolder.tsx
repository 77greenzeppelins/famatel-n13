import React, { ReactNode, useEffect, useRef, useState } from 'react';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
/**Hooks Staff**/
import useElementSize from '../../../../../utils/hooks/useElementSize';

const SlidersContentHolder: React.FC<{
  children: ReactNode;
  translateXValue: number;
  setTranslateXValue: React.Dispatch<React.SetStateAction<number>>;
}> = ({ children, translateXValue, setTranslateXValue }) => {
  /** */
  const [squareRef, { width, scrollWidth }] = useElementSize();
  /**References**/
  const timeoutRef = useRef<NodeJS.Timeout>();
  /**Local State**/
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  /**Resizer**/
  useEffect(() => {
    //___resize handler
    function handleResize() {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setWindowSize({ width: window.innerWidth, height: innerHeight });
        //__allowes to reset mposition of table
        setTranslateXValue(0);
        console.log('________handleResize');
      }, 400);
    }
    //__listener
    window.addEventListener('resize', handleResize);
    //___tester
    // console.log('scrollWidth:', scrollWidth);
    //__cleaner
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [setTranslateXValue]);
  /**____________________________**/
  /**JSX*/
  return (
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
  );
};

export default SlidersContentHolder;
