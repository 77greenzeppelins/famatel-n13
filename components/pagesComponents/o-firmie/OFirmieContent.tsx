import React from 'react';
/**Components**/
import Section_1 from './section_1/Section_1';
import Section_2 from './section_2/Section_2';
/**HardCoded Staff*/
const mediumTextStyle =
  'text-[0.75rem]  lg:text-[1rem] tracking-[2px] leading-tight';

/**----------------------------------------------------------------**/
const OFirmieContent = () => {
  /**JSX**/
  return (
    <div
      data-component="OFirmieContent__container"
      className="flex flex-col justify-center pt-[80px] overflow-hidden"
    >
      <div className="z-[10] min-h-screen">
        <Section_1
          mediumTextStyle={`${mediumTextStyle} text-dark font-bold group-hover:text-light group-hover:font-normal`}
        />
      </div>
      <div className="z-[8] ">
        <Section_2
          mediumTextStyle={`${mediumTextStyle} text-dark font-bold group-hover:text-light group-hover:font-normal`}
        />
      </div>
    </div>
  );
};

export default OFirmieContent;
