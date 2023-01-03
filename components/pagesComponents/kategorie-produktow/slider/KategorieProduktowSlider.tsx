import React from 'react';
/**Components**/
import TextSection from './textSection/TextSection';
import GraphicSection from './graphicSection/GraphicSection';

/**-----------------------------------------------------------**/
const KategorieProduktowSlider: React.FunctionComponent<{
  currentCategory: number;
}> = ({ currentCategory }) => {
  /**JSX**/
  return (
    <div className="w-full h-full fc flex-col divide-y-2 sm:divide-x-2 sm:divide-y-0 divide-stone-600 sm:flex-row">
      <div className="fc w-full h-[50%] sm:w-[40%] sm:h-full">
        <TextSection currentCategory={currentCategory} />
      </div>
      <div className="fc w-full h-[50%] sm:w-[60%] sm:h-full">
        <GraphicSection currentCategory={currentCategory} />
      </div>
    </div>
  );
};

export default KategorieProduktowSlider;
