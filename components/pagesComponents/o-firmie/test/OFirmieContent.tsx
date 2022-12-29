import React, { useState } from 'react';
/**Components**/
import OFirmieSlider from '../slider/OFirmieSlider';
/**FramerMotion Staf**/
import { motion } from 'framer-motion';
/**Basic Data*/
const sectionsNumber = 3;
const timeoutFactor = 1000;

/**----------------------------------------------------------------**/
const OFirmieContent = () => {
  /**LocalState nr1; just to disable scrollin temporaily**/
  const [allPseudoScrollEventsState, setAllPseudoScrollEventsState] =
    useState<boolean>(true);
  /*
  LocalState nr2; just to control slides
  */
  const [slideState, setSlideState] = useState<{
    number: number;
    deltaY: number;
  }>({
    number: 0,
    deltaY: 0,
  });
  /**LocalState nr3; just to set initial valu of onTouchStart Event**/
  const [touchInitialValue, setTouchInitialValue] = useState(0);

  /**Events Management**/
  const onWheelHandler = (event: any): void => {
    /*
    "if statement" that specify what to do when allPseudoScrollEventsState is false; what we actually want react to do is "nothing"; but...
    using : console.log('<SectionContainer/> / should by !allPseudoScrollEventsState', allPseudoScrollEventsState) it's logged to console when value is false and user scrolls; usualy lots of logs...
    */
    if (!allPseudoScrollEventsState) {
      return;
    }
    /**let's utilize wheelEvent data
     * when user scrolls down = expects progress = goes forward => deltaY > 0
     **/
    if (event.deltaY > 0 && slideState.number < sectionsNumber - 1) {
      // console.log('user scrolls down', event.deltaY);
      setSlideState({
        number: slideState.number + 1,
        deltaY: event.deltaY,
      });
    }
    if (event.deltaY < 0 && slideState.number > 0) {
      // console.log('user scrolls up', event.deltaY);
      setSlideState({
        number: slideState.number - 1,
        deltaY: event.deltaY,
      });
    }
    //    console.log('allPseudoScrollEventsState before setAllPseudoScrollEventsState(false):', allPseudoScrollEventsState);
    //   console.log('<SectionContainer/> / setTimeout / event', event.deltaY);

    /**let's manipulate allPseudoScrollEventsState
     *__1__above instructiuons are evaluated "immedietely"; so at this stage they are complete
     *__2__with "setAllPseudoScrollEventsState(false)" we disable wheeling
     *__3__with "setTimeout(...)" we specify when whilling would be active again
     *__4__with such setting "wheelvent" works as "time-base-switcher"
     */
    setAllPseudoScrollEventsState(false);
    setTimeout(function () {
      setAllPseudoScrollEventsState(true);
    }, timeoutFactor);
  };

  const onTouchEndHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    // e.stopPropagation();
    if (!allPseudoScrollEventsState) {
      return;
    }
    // console.log(e.movementY);
    if (
      // touchInitialValue > e.changedTouches[0].screenY
      touchInitialValue - e.changedTouches[0].screenY > 100 &&
      slideState.number < sectionsNumber - 1
    ) {
      // console.log(
      //   'forward / touchInitialValue - e.changedTouches[0].screenY:',
      //   // Math.abs(touchInitialValue - e.changedTouches[0].screenY)
      //   touchInitialValue - e.changedTouches[0].screenY
      // );
      setSlideState({
        number: slideState.number + 1,
        deltaY: 0,
      });
    }
    if (
      //___
      touchInitialValue - e.changedTouches[0].screenY < -100 &&
      slideState.number > 0
    ) {
      // console.log(
      //   'backward / touchInitialValue - e.changedTouches[0].screenY:',
      //   // Math.abs(touchInitialValue - e.changedTouches[0].screenY)
      //   touchInitialValue - e.changedTouches[0].screenY
      // );
      setSlideState({
        number: slideState.number - 1,
        deltaY: 0,
      });
    }
    setAllPseudoScrollEventsState(false);
    setTimeout(function () {
      // console.log('<setTimeout / allPseudoScrollEventsState ');
      setAllPseudoScrollEventsState(true);
    }, timeoutFactor);
  };

  /**JSX**/
  return (
    <motion.div
      data-component="OFirmieContent__container"
      /**
       * "fixed" prevents from "resizing" when changing pages
       */
      className="fixed w-screen h-full pt-[52px] bg-dark touch-auto"
      // className="fixed inset-0 pt-[52px] bg-dark"
      onWheel={onWheelHandler}
      // onTouchStart={e => {
      //   setTouchInitialValue(e.changedTouches[0].screenY);
      // }}
      // onTouchEnd={onTouchEndHandler}
    >
      <OFirmieSlider
        slideNumber={slideState.number}
        scrollDeltaValue={slideState.deltaY}
      />
      <div className="fc absolute top-0 left-0 right-0 bg-grey h-[75px] text-2xl">
        {`${touchInitialValue} / state: ${allPseudoScrollEventsState}`}
      </div>
    </motion.div>
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
