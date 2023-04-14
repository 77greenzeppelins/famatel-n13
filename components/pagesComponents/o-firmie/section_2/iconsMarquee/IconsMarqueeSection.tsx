import React from 'react';
import IconsMarquee from '../../../../multipagesComponents/sliders/marqueeHolder/iconsMarquee/IconsMarquee';
import MarqueeHolder from '../../../../multipagesComponents/sliders/marqueeHolder/MarqueeHolder';

const IconsMarqueeSection = () => {
  return (
    <div className="relative h-[80px] w-full ">
      {/* <MarqueeHolder childComponent={<IconsMarquee />}></MarqueeHolder> */}
      <MarqueeHolder />
    </div>
  );
};

export default IconsMarqueeSection;
