import React from 'react';
import GraphicSection from './graphicSection/GraphicSection';
import TextSection from './textSection/TextSection';

/**--------------------------------------------------**/
const Section_1: React.FunctionComponent<{
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  categoriesNumber: number;
}> = ({ categoryIndex, setCategoryIndex, categoriesNumber }) => {
  /**JSX**/
  return (
    <div className="flex items-center flex-col-reverse gap-y-10 xl:flex-row xl:gap-x-4 inner-px-md-xl-xxl xl:min-h-screen pt-[60px] xl:pt-0">
      <div className="w-full xl:w-[50%]">
        <TextSection
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
          categoriesNumber={categoriesNumber}
        />
      </div>
      <div className="w-full xl:w-[50%] h-[400px]">
        <GraphicSection categoryIndex={categoryIndex} isPreviewOpen={false} />
      </div>
    </div>
  );
};

export default Section_1;
