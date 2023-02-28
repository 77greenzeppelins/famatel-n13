import React from 'react';
import GraphicSection from './graphicSection/GraphicSection';
import TextSection from './textSection/TextSection';

/**--------------------------------------------------**/
const Section_1: React.FunctionComponent<{
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
}> = ({ categoryIndex, setCategoryIndex }) => {
  /**JSX**/
  return (
    <div className="flex flex-col-reverse xl:flex-row xl:gap-x-4 inner-px-md-xl-xxl">
      <div className="w-full xl:w-[50%]">
        <TextSection
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
        />
      </div>
      <div className="w-full xl:w-[50%] h-[400px]">
        <GraphicSection categoryIndex={categoryIndex} isPreviewOpen={false} />
      </div>
    </div>
  );
};

export default Section_1;
