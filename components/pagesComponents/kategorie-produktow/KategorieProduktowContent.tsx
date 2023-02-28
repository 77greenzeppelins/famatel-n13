import React, { useState } from 'react';
/**Components**/
import FixedContainerWithEngine from '../../layouts/pseudoLayouts/fixedContainerWithEngine/FixedContainerWithEngine';
import KategorieProduktowSlider from './slider/KategorieProduktowSlider';
/**Basic Data*/
import { catalogStructureData } from '../../../data/_catalogStructure_data';
import Section_1 from './section_1/Section_1';
const timeoutFactor = 1000;
/**----------------------------------------------------------------------------------**/
const KategorieProduktowContent = () => {
  /**LocalState; just to control slides**/
  const [categoryIndex, setCategoryIndex] = useState(0);

  /**JSX**/
  return (
    <div
      data-component="KategorieProduktowContent__container"
      className="flex flex-col w-screen min-h-screen pt-[60px] lg:pt-[80px] pb-[10vh] bg-dark"
    >
      <Section_1
        categoryIndex={categoryIndex}
        setCategoryIndex={setCategoryIndex}
      />
      <div className="h-[50vh]" />
      <div className="fixed w-full h-[50px] top-0 bg-dark" />
    </div>
    // <FixedContainerWithEngine
    //   slideState={slideState.number}
    //   setSlideState={setSlideState}
    //   timeoutFactor={timeoutFactor}
    //   sectionsNumber={catalogStructureData.length}
    //   isEngineActive={true}
    // >
    //   <KategorieProduktowSlider currentCategory={slideState.number} />
    // </FixedContainerWithEngine>
  );
};

export default KategorieProduktowContent;
