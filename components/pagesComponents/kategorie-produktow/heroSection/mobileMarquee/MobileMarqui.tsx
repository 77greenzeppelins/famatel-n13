import React from 'react';
import MarqueeFullWidth from '../../../../multipagesComponents/sliders/marqueeFullWidth/MarqueeFullWidth';

const MobileMarquee = () => {
  return (
    <div className="w-full h-full">
      <MarqueeFullWidth
        marqueeContainerStyle="absolute inset-0 overflow-hidden z-5"
        svgBasicSize={[46, 60]}
        svgContainerSizes={'w-[46px] h-[46px] md:w-[60px] md:h-[60px] '}
      />
    </div>
  );
};

export default MobileMarquee;
