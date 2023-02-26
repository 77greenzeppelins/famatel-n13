import React, { useEffect, useRef } from 'react';
/**Components**/
import OverlayCell from './overlayCell/OverlayCell';
/**Hook Staff**/
import useMeasure from 'react-use-measure';
/**FramerMotion Staff**/
import { motion, useAnimation } from 'framer-motion';

/**Basic Data**/

const SquareOverlay: React.FunctionComponent<{
  itemsNumber: number;
  columns: number;
  delayPerPixel: number;
  gridStyle?: string;
  cellStyle?: string;
}> = ({ itemsNumber, columns, delayPerPixel, gridStyle, cellStyle }) => {
  /**Hook Section**/
  const [ref, { width, height }] = useMeasure();
  /**...**/
  const originOffset = useRef({ top: 0, left: 0 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start('to');
  }, [controls]);

  /**JSX**/
  return (
    <motion.div
      initial="from"
      animate={controls}
      variants={{}}
      ref={ref}
      data-component="SquareOverlay__container"
      className={`relative grid ${gridStyle} w-full h-full pointer-events-none bg-vB`}
      // onAnimationComplete={() => setSniperIsMounted(true)}
    >
      {/* {Array.from({ length: itemsNumber }).map((_, i) => (
        <OverlayCell
          key={i}
          width={width / columns}
          cellIndex={i}
          originIndex={13}
          delayPerPixel={delayPerPixel}
          originOffset={originOffset}
          cellStyle={cellStyle}
        />
      ))} */}
    </motion.div>
  );
};

export default SquareOverlay;

{
  (' ');
}
{
  /* <p className="text-corpo">{`h: ${Math.trunc(height)}`}</p>
      <p className="text-corpo">{`w: ${Math.trunc(width)}`}</p> */
}
