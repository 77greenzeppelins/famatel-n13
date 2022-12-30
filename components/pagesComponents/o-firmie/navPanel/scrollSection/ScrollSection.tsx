import React from 'react';
/**Components**/
import FlyingLine from '../../../../multipagesComponents/lines/flyingLine/FlyingLine';

/**-----------------------------------------------------------**/
const ScrollSection = () => {
  /**JSX**/
  return (
    <div className="flex items-end  w-full h-[40%] lg:h-[45%] xl:h-[40%] pb-8">
      <div className="flex flex-col h-[80%] w-[50%] ">
        <div className="h-[50%] w-full "></div>
        <div className="flex justify-end items-end h-[50%] w-full ">
          <p
            className="text-grey text-[0.625rem] lg:text-[0.75rem] xxxl:text-[0.875rem] tracking-widest"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'upright', // upright mixed
            }}
          >
            SCROLL
          </p>
        </div>
      </div>
      <div className="relative h-[80%] w-[1px] overflow-hidden">
        <FlyingLine
          variantsNumber={4}
          bgColor="bg-greyShade2"
          fgColor="bg-light"
        />
      </div>
    </div>
  );
};

export default ScrollSection;
