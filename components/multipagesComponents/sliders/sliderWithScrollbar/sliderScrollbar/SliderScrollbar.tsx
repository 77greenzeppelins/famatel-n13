import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';

/**--------------------------------**/
const SliderScrollbar: React.FC<{
  handleSize?: number;
  translateX: number;
  setTranslateXValue: Dispatch<SetStateAction<number>>;
}> = ({ handleSize = 24, translateX, setTranslateXValue }) => {
  /*
  References
  */
  const constraintsRef = useRef<HTMLDivElement>(null!);
  const handlerRef = useRef<HTMLDivElement>(null!);
  const progressBarRef = useRef<HTMLDivElement>(null!);
  /*
  Local State for countin progress of scroll's handle move
  */
  const [progressValue, setProgressValue] = useState(0);
  /*
  Local State for countin progress of scroll's handle move
  */
  const [isDragging, setIsDragging] = useState(false);
  /*
  ...
  */
  const dragHandler = () => {
    //___it activates calculation of getBoundingClientRect() = returns object with set of data; in practice we can detect slider's handler localization according to the left side of the page
    const handlerBounds = handlerRef.current?.getBoundingClientRect();
    //___allowes to "dynamically" calculate slider's handler "x-position"; in practice, to initial value we add every pixel we mowe left
    const middleOfHandler = handlerBounds.x + handleSize / 2;
    //___simply calculates "static" value
    const progressBarBounds = progressBarRef.current?.getBoundingClientRect();
    // console.log('...progressBarBounds.x', progressBarBounds.x);
    // console.log('...progressBarBounds.width', progressBarBounds.width);

    //___calculation that returns percentage result; initial state: (400-400) / 600 = 0; example: (450-400) / 600 => progress of slider handle = 50px; total width of scroll bar is 600px; result 0.083333
    const newProgress =
      (middleOfHandler - progressBarBounds.x) / progressBarBounds.width;
    setTranslateXValue(translateX * newProgress);
    // console.log('...newProgress', newProgress);
    //___result 0.083333 * (100-0) = 8.333
    // const newProgressInPercentage = newProgress * (max - min);
    setProgressValue(progressBarBounds.width * newProgress + handleSize / 2);
  };

  return (
    <div
      data-component="CarouselScrollbar__container"
      className="relative flex flex-col justify-center "
    >
      <div
        data-layout="slider--wrapper"
        className="relative flex flex-col justify-center "
      >
        <div
          data-layout="slider-background"
          className="absolute w-full h-2 rounded-full "
          style={{
            background: `linear-gradient(90deg, #1d1d1b ${progressValue}px, #9d9e9f 0 )`,
          }}
        />
        <div
          ref={progressBarRef}
          data-layout="slider-progress-bar"
          className="absolute  "
          style={{ left: handleSize / 2, right: handleSize / 2 }}
        />
        <div data-layout="slider-handler-constraintsRef" ref={constraintsRef}>
          <motion.div
            ref={handlerRef}
            data-layout="slider-handler"
            className="relative bg-corpo rounded-full cursor-grab"
            style={{ width: handleSize, height: handleSize }}
            drag="x"
            dragMomentum={false}
            dragElastic={0}
            dragConstraints={constraintsRef}
            onDrag={dragHandler}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            onPointerDown={() => setIsDragging(true)}
            onPointerUp={() => setIsDragging(false)}
            animate={{ scale: isDragging ? 1.5 : 1 }}
          />
        </div>
      </div>
      {/* <div>
        <p>{value}</p>
      </div>  */}
      {/* <div>
        <p>{translateX}</p>
      </div> */}
      {/* <div>
        <p>{translateXValue}</p>
      </div> */}
    </div>
  );
};

export default SliderScrollbar;
