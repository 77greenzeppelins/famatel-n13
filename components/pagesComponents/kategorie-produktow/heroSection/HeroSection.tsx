import React from 'react';

import FadingFrame from '../../../multipagesComponents/lines/fadingFrame/FadingFrame';
import SVG_10_d from '../../../SVG/techDrawingsDetails/SVG_10_d';
/**Basic Data**/
import { story } from '../../../../data/_data';
/**-------------------------**/
const HeroSection = () => {
  return (
    <div className="min-h-screen fc flex-col gap-y-10">
      <div className="h-[55vh] min-h-[400px] ">
        <div className="relative fc  h-full aspect-square">
          {/* <FadingFrame /> */}
          <SVG_10_d className="w-[100%] h-[100%]" />
        </div>
      </div>
      <div className="h-[40vh] ">
        <p className="text-grey text-center text-[1.25rem] xs:text-[1.5rem]  md:text-[1.75rem] xxl:text-[2.25rem] tracking-[2px] leading-tight">
          {story.oFirmiePage.heroSection[0]}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
