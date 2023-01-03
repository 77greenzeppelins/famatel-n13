import React, { ReactNode, useState } from 'react';
/**Framer Motion Staff */
import { motion } from 'framer-motion';

/**--------------------------------------------------------------------**/
/**
 *
 * used in: OFirmieContent/>
 *
 */
const FixedContainerWithEngine: React.FunctionComponent<{
  slideState: number;
  setSlideState: React.Dispatch<
    React.SetStateAction<{
      number: number;
    }>
  >;
  sectionsNumber: number;
  timeoutFactor: number;
  children: ReactNode;
  containerStyle?: string;
}> = ({
  //___index of current screen
  slideState,
  setSlideState,
  //___number of screens
  sectionsNumber,
  timeoutFactor,
  children,
  containerStyle,
}) => {
  /**LocalState nr1; just to disable "scrolling" temporaily**/
  const [allPseudoScrollEventsState, setAllPseudoScrollEventsState] =
    useState<boolean>(true);
  /**LocalState nr2; just to set initial value of onTouchStart Event**/
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
    if (event.deltaY > 0 && slideState < sectionsNumber - 1) {
      // console.log('user scrolls down', event.deltaY);
      setSlideState({
        number: slideState + 1,
      });
    }
    if (event.deltaY < 0 && slideState > 0) {
      // console.log('user scrolls up', event.deltaY);
      setSlideState({
        number: slideState - 1,
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
      touchInitialValue - e.changedTouches[0].screenY > 100 &&
      slideState < sectionsNumber - 1
    ) {
      // console.log(e);
      setSlideState({
        number: slideState + 1,
      });
    }
    if (
      touchInitialValue - e.changedTouches[0].screenY < -100 &&
      slideState > 0
    ) {
      // console.log('user scrolls up', event.deltaY);
      setSlideState({
        number: slideState - 1,
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
      data-component="FixedContainerWithEngine__container"
      /**
       * "fixed" prevents from "resizing" when changing pages
       */
      className={
        containerStyle
          ? containerStyle
          : `fixed w-screen h-full pt-[52px] bg-dark touch-auto `
      }
      // className="fixed inset-0 pt-[52px] bg-dark "
      onWheel={onWheelHandler}
      onTouchStart={e => {
        setTouchInitialValue(e.changedTouches[0].screenY);
      }}
      onTouchEnd={onTouchEndHandler}
    >
      {children}
    </motion.div>
  );
};

export default FixedContainerWithEngine;
