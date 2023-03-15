import React from 'react';
import GraphicSection from './graphicSection/GraphicSection';
import NavSection from './navSection/NavSection';
import TextSection from './textSection/TextSection';

/**--------------------------------------------------**/
const Section_1: React.FunctionComponent<{
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  categoriesNumber: number;
}> = ({ categoryIndex, setCategoryIndex, categoriesNumber }) => {
  /**JSX**/
  return (
    <div
      data-component="Section_1__container"
      className="flex w-screen items-center flex-col-reverse gap-y-4 xs:gap-y-6 inner-px-md-xl-xxl pt-[60px] lg:pt-[100px] xl:flex-row xl:pt-[80px] xl:gap-x-6"
      //___xl:min-h-screen
    >
      <div
        className="relative w-full xl:w-[45%] xxl:w-[40%]"
        //___h-[200px]
      >
        <TextSection
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
          categoriesNumber={categoriesNumber}
        />
      </div>
      <div className="flex justify-center w-full xl:hidden">
        <NavSection
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
          categoriesNumber={categoriesNumber}
        />
      </div>
      <div
        className="w-full xl:w-[55%] xxl:w-[60%] h-[340px] xs:h-[440px]"
        //___h-[440px]
      >
        <GraphicSection categoryIndex={categoryIndex} isPreviewOpen={false} />
      </div>
    </div>
  );
};

export default Section_1;
