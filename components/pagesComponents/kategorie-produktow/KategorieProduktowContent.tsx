import React, { useState } from 'react';
/**Components**/
import HeroSection from './heroSection/HeroSection';
import Section_2 from './section_2/Section_2';
/**Basic Data*/

/**----------------------------------------------------------------------------------**/
const KategorieProduktowContent = () => {
  /**JSX**/
  return (
    <div
      data-component="KategorieProduktowContent__container"
      className="flex flex-col gap-10 sm:gap-20 lg:gap-32 justify-center pt-[60px] overflow-hidden"
      //___pt-[50px] pb-[10vh]
    >
      <div className="z-1">
        <HeroSection />
      </div>
      <div className="z-10">
        <Section_2

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
