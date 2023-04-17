import React from 'react';
/**Components**/
import GraphicSection from './graphicSection/GraphicSection';
import ScrollPrompt from './scrollPrompt/ScrollPrompt';
import TextSection from './textSection/TextSection';
/**TS**/
interface Props {
  mediumTextStyle: string;
}
/**-----------------------**/
const Section_1 = ({ mediumTextStyle }: Props) => {
  /**JSX**/
  return (
    <div
      data-component="Section_1__container"
      className="relative flex flex-col-reverse items-end xl:flex-row-reverse xl:items-center justify-center xl:h-screen"
    >
      <div className="relative flex items-start justify-end w-[98%] sm:w-[95%] md:w-[90%] lg:w-[84%] xl:w-[55%] xxl:w-[60%] xl:h-auto xs:-mt-20 lg:-mt-[80px] xl:mt-0">
        <GraphicSection />
      </div>
      <div className=" flex items-center w-full inner-pl-md-xl-xxl pt-[62px] xs:pt-[120px] md:pt-[120px] lg:pt-[160px] xl:flex-col xl:justify-center xl:gap-y-4 xl:pt-30 xl:w-[45%] xxl:w-[40%] h-auto">
        <TextSection linkTextStyle={mediumTextStyle} />
      </div>
      <ScrollPrompt />
    </div>
  );
};

export default Section_1;
