import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
/**Components**/
import FixedContainerWithEngine from '../../layouts/pseudoLayouts/fixedContainerWithEngine/FixedContainerWithEngine';
import KategorieProduktowSlider from './slider/KategorieProduktowSlider';
/**Basic Data*/
const screensNumber = 11;
const timeoutFactor = 1000;
const initialFolseNumber = 77;
/**----------------------------------------------------------------------------------**/
const KategorieProduktowContent = () => {
  /**LocalState; just to control slides**/
  const [slideState, setSlideState] = useState<{
    number: number;
  }>({
    number: 0,
  });

  const [state, setState] = useState(false);

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
      {/* <AnimatePresence>
        {state ? (
          <KategorieProduktowSlider currentCategory={slideState.number} />
        ) : (
          <div className="fc h-full w-full bg-grey">
            {' '}
            <button onClick={() => setState(true)}>button</button>
          </div>
        )}
      </AnimatePresence> */}
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
