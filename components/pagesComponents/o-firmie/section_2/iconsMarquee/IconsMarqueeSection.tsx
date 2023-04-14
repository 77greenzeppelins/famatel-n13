import React from 'react';
import MarqueeFullWidth from '../../../../multipagesComponents/sliders/marqueeFullWidth/MarqueeFullWidth';
// import IconsMarquee from '../../../../multipagesComponents/sliders/marqueeHolder/iconsMarquee/IconsMarquee';
// import MarqueeHolder from '../../../../multipagesComponents/sliders/marqueeHolder/MarqueeHolder';

const IconsMarqueeSection = () => {
  return (
    <div className="relative h-[60px] w-full ">
      {/* <MarqueeHolder childComponent={<IconsMarquee />}></MarqueeHolder> */}
      {/* <MarqueeHolder marqueeContainerStyle="absolute inset-0 overflow-hidden z-5" /> */}
      <MarqueeFullWidth marqueeContainerStyle="absolute inset-0 overflow-hidden z-5" />
    </div>
  );
};

export default IconsMarqueeSection;
