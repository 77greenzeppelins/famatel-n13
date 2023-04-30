import React from 'react';
import MarqueeFullWidth from '../../../../multipagesComponents/sliders/marqueeFullWidth/MarqueeFullWidth';

/**---------------------------------**/
const IconsMarqueeSection = () => {
  /**JSX**/
  return (
    <div className="relative h-[60px] w-full">
      <MarqueeFullWidth
        marqueeHolderStyle="absolute inset-0 overflow-hidden z-5"
        svgBasicSize={[46, 60]}
        transformationFactor={-2}
        cellsNumberFactor={1}
        cellStyle="w-[46px] h-[46px] md:w-[60px] md:h-[60px]"
      />
    </div>
  );
};

export default IconsMarqueeSection;
