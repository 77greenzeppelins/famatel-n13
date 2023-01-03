import React, { useState } from 'react';
/**Components**/
import FixedContainerWithEngine from '../../layouts/pseudoLayouts/fixedContainerWithEngine/FixedContainerWithEngine';
import KategorieProduktowSlider from './slider/KategorieProduktowSlider';
/**Basic Data*/
const screensNumber = 11;
const timeoutFactor = 1000;
/**----------------------------------------------------------------------------------**/
const KategorieProduktowContent = () => {
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
      <KategorieProduktowSlider currentCategory={slideState.number} />
    </FixedContainerWithEngine>
    // <div
    //   data-component="KategorieProduktowContent__container"
    //   className="relative"
    // >
    //   <FakeContent setCategoryIndex={setCategoryIndex} />
    //   <ProductPageFixedOverlay />
    //   <div className="fixed fc bottom-0 left-0 right-0 h-[60px] ">
    //     <BottomMenu categoryIndex={categoryIndex} />
    //   </div>
    // </div>
  );
};

export default KategorieProduktowContent;
