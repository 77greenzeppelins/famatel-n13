/**
 * inspired by:
 * https://codesandbox.io/s/framer-motion-directional-stagger-effect-grid-forked-iggty5?file=/src/index.js:1668-1681
 */

import React, { useEffect, useLayoutEffect, useRef } from 'react';
/**FramerMotion Staff**/
import { motion } from 'framer-motion';
/**TS**/
interface IF_OverlayCell {
  width: number;
  cellIndex: number;
  originIndex: number;
  delayPerPixel: number;
  originOffset: React.MutableRefObject<{
    top: number;
    left: number;
  }>;
  cellStyle?: string;
}

/**--------------------------------------------------------**/
const OverlayCell: React.FunctionComponent<IF_OverlayCell> = ({
  width,
  cellIndex,
  originIndex,
  delayPerPixel,
  originOffset,
  cellStyle,
}) => {
  /** */
  const delayRef = useRef(0);
  const offset = useRef({ top: 0, left: 0 });
  const ref = useRef(null);

  const itemVariants = {
    from: (delayRef: React.MutableRefObject<number>) => ({
      opacity: 1,
      scale: 1.2,
    }),
    to: (delayRef: React.MutableRefObject<number>) => ({
      opacity: 1,
      scale: 0,

      transition: { delay: 0.2 + delayRef.current, duration: 0.9 },
    }),
  };

  /**
   * The measurement for all elements happens in the layoutEffect cycle
   * This ensures that when we calculate distance in the effect cycle all elements have already been measured
   */

  useLayoutEffect(() => {
    const individualCell = ref.current as HTMLElement | null;
    if (!individualCell) return;
    offset.current = {
      top: individualCell.offsetTop,
      left: individualCell.offsetLeft,
    };
    //___
    if (cellIndex === originIndex) {
      originOffset.current = offset.current;
    }
    // console.log('offset', offset);
    //___why "delayPerPixel" ?
  }, [cellIndex, originIndex, originOffset, delayPerPixel]);

  useEffect(() => {
    const dx = Math.abs(offset.current.left - originOffset.current.left);
    const dy = Math.abs(offset.current.top - originOffset.current.top);
    const d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    delayRef.current = 0.6 + d * delayPerPixel;

    console.log('delayRef.current: ', delayRef.current);
  }, [delayPerPixel]);

  /**JSX**/
  return (
    <motion.div
      ref={ref}
      className={cellStyle ? cellStyle : `aspect-square bg-dark`}
      style={{ width: width }}
      variants={itemVariants}
      custom={delayRef}
    ></motion.div>
  );
};

export default OverlayCell;
