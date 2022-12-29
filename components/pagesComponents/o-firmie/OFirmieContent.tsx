import React, { useState } from 'react';
/**Components**/
import OFirmieSlider from './slider/OFirmieSlider';
/**Hook Staf**/
import useWindowSize from '../../../utils/hooks/useWindowSize';
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

    if (event.deltaY > 0 && slideState.number < sectionsNumber - 1) {
      /**let's utilize wheelEvent data
       * when user scrolls down = expects progress = goes forward => deltaY > 0
       **/
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

  /**JSX**/
  return (
    <div
      data-component="OFirmieContent__container"
      className="w-screen h-screen pt-[52px]  bg-dark"
      onWheel={onWheelHandler}
    >
      <OFirmieSlider
        slideNumber={slideState.number}
        scrollDeltaValue={slideState.deltaY}
      />
    </div>
  );
};

export default OFirmieContent;
