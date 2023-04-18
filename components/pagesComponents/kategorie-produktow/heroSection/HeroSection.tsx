import React from 'react';
/**Components**/
import HeroBackground from './heroBackground/HeroBackground';
import TenCategoriesWithSvg from './heroForegroundGraphic/TenCategoriesWithSvg';
/**Basic Data**/
import { story } from '../../../../data/_data';

/**-------------------------**/
const HeroSection = () => {
  return (
    <div className="relative fc flex-col gap-y-4 ">
      <div className="relative h-[70vh] md:h-[76vh] min-h-[300px] w-full">
        <div
          className="absolute h-full left-0 w-[5%] max-w-[40px] z-10 from-dark  to-transparent bg-gradient-to-r"
          //___via-dark
        />
        <div className="absolute h-full right-0 w-[5%] max-w-[40px] z-10 from-dark to-transparent bg-gradient-to-l" />
        <div className="fc h-full">
          <HeroBackground />
          <TenCategoriesWithSvg />
        </div>
      </div>
      <div className="h-[30vh] md:h-[24vh] w-[74%]">
        <p className="text-grey text-center text-[1.25rem] xs:text-[1.5rem]  md:text-[1.75rem] xxl:text-[2.25rem] tracking-[2px] leading-tight">
          {story.oFirmiePage.heroSection[0]}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
