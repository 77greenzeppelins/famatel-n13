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
      isEngineActive={true}
    >
      <KategorieProduktowSlider currentCategory={slideState.number} />
    </FixedContainerWithEngine>
  );
};

export default KategorieProduktowContent;
