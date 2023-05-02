import React, { useState } from 'react';
/**Components**/
import HeroSection from './heroSection/HeroSection';
import Section_1 from './section_1/Section_1';
/**Basic Data*/
import { catalogStructureData } from '../../../data/_catalogStructure_data';

/**----------------------------------------------------------------------------------**/
const KategorieProduktowContent = () => {
  /**LocalState; just to control slides**/
  const [categoryIndex, setCategoryIndex] = useState(0);

  /**JSX**/
  return (
    <div
      data-component="KategorieProduktowContent__container"
      className="flex flex-col justify-center pt-[60px] overflow-hidden"
      //___pt-[50px] pb-[10vh]
    >
      <div className="z-1">
        <HeroSection />
      </div>
      <div className="z-10">
        <Section_1
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
          categoriesNumber={catalogStructureData.length}
          // categoryUrl={catalogStructureData[categoryIndex].mainCategoryUrl}
        />
      </div>
    </div>
  );
};

export default KategorieProduktowContent;

/* <div className="inner-px-md-xl-xxl flex justify-end h-[50px]">
        <div className="fc w-[60%]">
          <SmallPseudoHeader
            text="Szybki podgląd kategorii"
            hasBox={true}
            hasVerticalOrnament={false}
          />
        </div>
      </div> */
