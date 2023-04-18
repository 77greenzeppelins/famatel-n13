import React from 'react';
/**Components**/
import SVG_10_d from '../../../../SVG/techDrawingsDetails/SVG_10_d';
/**Basic Data**/
import { corpoColors } from '../../../../../data/_data';

/**-----------------------------------**/
const TenCategoriesWithSvg = () => {
  /**JSX**/
  return (
    <>
      <div className="relative fc  sm:h-[80%] lg:h-[90%] xl:h-hull z-10">
        <div className="absolute left-0 w-[6%] h-full from-dark via-dark to-transparent bg-gradient-to-l"></div>
        <div className="absolute w-[88%] h-full  bg-dark"></div>
        <div className="absolute right-0 w-[6%] h-full from-dark to-transparent via-dark bg-gradient-to-r"></div>
        <SVG_10_d
          className="relative w-[82%] h-[82%] z-10"
          letterStyle={corpoColors.orange}
        />
      </div>
      <span className="hidden" id="svg-description">
        Obrazek pełni funcję wyłącznie estetyczną. Poszczególne jego ememenety
        reagują zmianą skali w remach eventu on hover{' '}
      </span>
    </>
  );
};

export default TenCategoriesWithSvg;
