import React from 'react';
import MarqueeFullWidth from '../../../../multipagesComponents/sliders/marqueeFullWidth/MarqueeFullWidth';

const MobileMarquee: React.FC<{
  transformationFactor: number;
  animatedContainerStyle?: string;
}> = ({ transformationFactor, animatedContainerStyle }) => {
  return (
    <div className="w-full h-full">
      <MarqueeFullWidth
        marqueeHolderStyle="absolute inset-0 overflow-hidden z-5"
        animatedContainerStyle={animatedContainerStyle}
        svgBasicSize={[46, 60]}
        transformationFactor={transformationFactor}
        cellsNumberFactor={0.75}
        cellStyle={'w-[46px] h-[46px] md:w-[60px] md:h-[60px] '}
      />
    </div>
  );
};

export default MobileMarquee;
