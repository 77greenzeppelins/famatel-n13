import React from 'react';
/**Components**/
import Section_1 from './section_1/Section_1';
import Section_2 from './section_2/Section_2';
/**HardCoded Staff*/
const mediumTextStyle =
  'text-[0.75rem]  lg:text-[1rem] tracking-[2px] leading-tight';

/**----------------------------------------------------------------**/
const OFirmieContent = () => {
  /**JSX**/
  return (
    <div
      data-component="OFirmieContent__container"
      className="flex flex-col justify-center pt-[80px] overflow-hidden"
      //___pt-[60px] min-h-screen divide-y-[1px] divide-greyShade2 w-screen
    >
      <div className="z-[10] min-h-screen">
        <Section_1
          mediumTextStyle={`${mediumTextStyle} text-dark font-bold group-hover:text-light`}
        />
      </div>
      <div className="z-[8] ">
        <Section_2
          mediumTextStyle={`${mediumTextStyle} text-dark font-bold group-hover:text-light`}
        />
      </div>
    </div>
  );
};

export default OFirmieContent;
// <FixedContainerWithEngine
//   slideState={slideState.number}
//   setSlideState={setSlideState}
//   timeoutFactor={timeoutFactor}
//   sectionsNumber={screensNumber}
//   isEngineActive={true}
// >
//   <OFirmieSlider
//     slideNumber={slideState.number}
//     isProductDescriptionOpen={isProductDescriptionOpen}
//     setIsProductDescriptionOpen={setIsProductDescriptionOpen}
//   />
//   <NavPanel
//     slideNumber={slideState.number + 1}
//     setSlideState={setSlideState}
//     sectionsNumber={screensNumber}
//   />
//   <ProductDescriptionOverlay
//     currentIndex={slideState.number}
//     isPreviewOpen={isProductDescriptionOpen}
//     setIsProductDescriptionOpen={setIsProductDescriptionOpen}
//   />
// </FixedContainerWithEngine>

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
