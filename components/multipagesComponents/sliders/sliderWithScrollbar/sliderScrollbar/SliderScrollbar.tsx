import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
/**Basic Data**/
import { corpoColors } from '../../../../../data/_data';

/**--------------------------------**/
const SliderScrollbar: React.FC<{
  handleSize?: number;
  translateX: number;
  setTranslateXValue: Dispatch<SetStateAction<number>>;
}> = ({ handleSize = 60, translateX, setTranslateXValue }) => {
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
  // const [isDragging, setIsDragging] = useState(false);
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
          className="absolute w-full h-[1px] rounded-full "
          style={{
            background: `linear-gradient(90deg, ${corpoColors.grey} ${progressValue}px,${corpoColors.orange} 0 )`,
          }}
        />
        <div
          ref={progressBarRef}
          data-layout="slider-progress-bar"
          className="absolute "
          style={{ left: handleSize / 2, right: handleSize / 2 }}
        />
        <div data-layout=" slider-handler-constraintsRef" ref={constraintsRef}>
          <motion.div
            ref={handlerRef}
            data-layout="slider-handler"
            // className="relative border rounded-sm border-corpo bg-dark cursor-grab"
            className="relative fc w-[60px] h-7  bg-dark border border-grey"
            //___bg-corpo glow animate-pulse aspect-square rounded-sm
            // style={{ width: handleSize, height: handleSize }}
            drag="x"
            dragMomentum={false}
            dragElastic={0}
            dragConstraints={constraintsRef}
            onDrag={dragHandler}
            // onDragStart={() => setIsDragging(true)}
            // onDragEnd={() => setIsDragging(false)}
            // onPointerDown={() => setIsDragging(true)}
            // onPointerUp={() => setIsDragging(false)}
            // animate={{ scale: isDragging ? 1.5 : 1 }}
          >
            <p className="text-grey header-link-label">scroll</p>
            {/* <div className="absolute top-0 bottom-0 w-6 h-6 rounded-sm aspect-square bg-dark" /> */}
            {/* <div className="relative w-6 h-6 rounded-sm aspect-square bg-corpo glow animate-pulse" /> */}
          </motion.div>
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

/*
<motion.button
            className= "w-4 h-4 rounded-sm aspect-square sm:w-6 sm:h-6 bg-corpo glow animate-pulse"
            }
          />

*/
