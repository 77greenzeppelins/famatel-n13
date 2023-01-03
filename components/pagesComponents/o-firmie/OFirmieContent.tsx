import React, { useState } from 'react';
/**Components**/
import OFirmieSlider from './slider/OFirmieSlider';
import NavPanel from './navPanel/NavPanel';
/**FramerMotion Staf**/
import { motion } from 'framer-motion';
import FixedContainerWithEngine from '../../layouts/pseudoLayouts/fixedContainerWithEngine/FixedContainerWithEngine';
/**Basic Data*/
const screensNumber = 3;
const timeoutFactor = 1000;

/**----------------------------------------------------------------**/
const OFirmieContent = () => {
  /**LocalState; just to control slides**/
  const [slideState, setSlideState] = useState<{
    number: number;
  }>({
    number: 0,
  });

  /**JSX**/
  return (
    <FixedContainerWithEngine
      slideState={slideState.number}
      setSlideState={setSlideState}
      timeoutFactor={timeoutFactor}
      sectionsNumber={screensNumber}
    >
      <OFirmieSlider slideNumber={slideState.number} />
      <NavPanel
        slideNumber={slideState.number + 1}
        setSlideState={setSlideState}
        sectionsNumber={screensNumber}
      />
    </FixedContainerWithEngine>
  );
};

export default OFirmieContent;

{
  /* <div className="fc absolute top-0 left-0 right-0 bg-grey h-[75px] text-2xl">
        {`${touchInitialValue} / state: ${allPseudoScrollEventsState}`}
      </div> */
}

/**...*/
// e.stopPropagation();
/**...*/

// const [x, setX] = useState('0');
// const [y, setY] = useState(0);
// const onPointerMoveHandler = (e: React.PointerEvent<HTMLDivElement>) => {

//   if (!allPseudoScrollEventsState) {
//     return;
//   }

//   if (e.movementY < 0 && slideState.number < sectionsNumber - 1) {
//     console.log(e);
//     setSlideState({
//       number: slideState.number + 1,
//       deltaY: e.movementY,
//     });
//     setX('up');
//     setY(e.movementY);
//   }
//   if (e.movementY > 0 && slideState.number > 0) {
//     // console.log('user scrolls up', event.deltaY);
//     setSlideState({
//       number: slideState.number - 1,
//       deltaY: e.movementY,
//     });
//     setX('down');
//     setY(e.movementY);
//   }
//   setAllPseudoScrollEventsState(false);
//   setTimeout(function () {
//     // setAllPseudoScrollEventsState(true);
//     console.log('<setTimeout / allPseudoScrollEventsState ');
//     setAllPseudoScrollEventsState(true);
//   }, timeoutFactor);
// };
