import React, { useState } from 'react';
/**Components**/
import OFirmieSlider from './slider/OFirmieSlider';
/**FramerMotion Staf**/
import { motion, PanInfo } from 'framer-motion';
/**Basic Data*/
const sectionsNumber = 3;
const timeoutFactor = 1000;

/**----------------------------------------------------------------**/
const OFirmieContent = () => {
  /**LocalState nr1; just to disable scrollin temporaily**/
  const [wheelState, setWheelState] = useState<boolean>(true);
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
  /*
  LocalState nr3; allowes to coordinate <ProduktInfoPanel> visibility and its content; is set via buttons in <SnipersLayout> <ProductInfoPanel>'c "closeButton"
  */
  // const [svgGraphicState, setSvgGraphicState] = useState<{
  //   renderInfoPanel: boolean;
  //   productId: string;
  // }>({
  //   renderInfoPanel: false,
  //   productId: '',
  // });

  /**Events Management**/
  const onWheelHandler = (event: any): void => {
    /*
    "if statement" that specify what to do when wheelState is false; what we actually want react to do is "nothing"; but...
    using : console.log('<SectionContainer/> / should by !wheelState', wheelState) it's logged to console when value is false and user scrolls; usualy lots of logs...
    */
    if (!wheelState) {
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
    //    console.log('wheelState before setWheelState(false):', wheelState);
    //   console.log('<SectionContainer/> / setTimeout / event', event.deltaY);

    /**let's manipulate wheelState
     *__1__above instructiuons are evaluated "immedietely"; so at this stage they are complete
     *__2__with "setWheelState(false)" we disable wheeling
     *__3__with "setTimeout(...)" we specify when whilling would be active again
     *__4__with such setting "wheelvent" works as "time-base-switcher"
     */
    setWheelState(false);
    setTimeout(function () {
      setWheelState(true);
      // console.log('<wheelState in setTimeout', wheelState);
    }, timeoutFactor);
    /* end of "time-base-switcher" */
  };

  const [x, setX] = useState('0');
  const [y, setY] = useState(0);
  const onPointerMoveHandler = (e: React.PointerEvent<HTMLDivElement>) => {
    /**...*/
    // e.stopPropagation();
    /**...*/
    if (!wheelState) {
      return;
    }
    // console.log(e.movementY);

    if (e.movementY < 0 && slideState.number < sectionsNumber - 1) {
      console.log(e);
      setSlideState({
        number: slideState.number + 1,
        deltaY: e.movementY,
      });
      setX('up');
      setY(e.movementY);
    }
    if (e.movementY > 0 && slideState.number > 0) {
      // console.log('user scrolls up', event.deltaY);
      setSlideState({
        number: slideState.number - 1,
        deltaY: e.movementY,
      });
      setX('down');
      setY(e.movementY);
    }
    setWheelState(false);
    setTimeout(function () {
      // setWheelState(true);
      console.log('<setTimeout / wheelState ');
      setWheelState(true);
    }, timeoutFactor);
  };

  const [touchProgress, setTouchProgress] = useState(0);

  const onTouchEndHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    /**...*/
    // e.stopPropagation();
    /**...*/
    if (!wheelState) {
      return;
    }
    // console.log(e.movementY);
    if (
      touchProgress > e.changedTouches[0].screenY &&
      slideState.number < sectionsNumber - 1
    ) {
      // console.log(e);
      setSlideState({
        number: slideState.number + 1,
        deltaY: 0,
      });
    }
    if (touchProgress < e.changedTouches[0].screenY && slideState.number > 0) {
      // console.log('user scrolls up', event.deltaY);
      setSlideState({
        number: slideState.number - 1,
        deltaY: 0,
      });
    }
    setWheelState(false);
    setTimeout(function () {
      // setWheelState(true);
      // console.log('<setTimeout / wheelState ');
      setWheelState(true);
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
      // onPointerMove={onPointerMoveHandler}

      onTouchStart={e => {
        // console.log('onTouchStart', Math.abs(e.changedTouches[0].screenY));
        setTouchProgress(e.changedTouches[0].screenY);
      }}
      onTouchEnd={onTouchEndHandler}
    >
      <OFirmieSlider
        slideNumber={slideState.number}
        scrollDeltaValue={slideState.deltaY}
      />
      {/* <div className="fc absolute top-0 left-0 right-0 bg-grey h-[75px] text-2xl">
        {`${touchProgress} / state: ${wheelState}`}
      </div> */}
    </motion.div>
  );
};

export default OFirmieContent;

// onTouchEnd={e => {
//   console.log('onTouchEnd', Math.abs(e.changedTouches[0].screenY));
//   if (touchProgress > e.changedTouches[0].screenY) {
//     setXXX('progress');
//   }
//   if (touchProgress < e.changedTouches[0].screenY) {
//     setXXX('regress');
//   }
// }}
