import React from 'react';
/**Components**/
import TextSection from './textSection/TextSection';
import GraphicSection from './graphicSection/GraphicSection';
/**Hook Staff**/
import useWindowSize from '../../../../utils/hooks/useWindowSize';

/**-----------------------------------------------------------**/
const KategorieProduktowSlider: React.FunctionComponent<{
  currentCategory: number;
}> = ({ currentCategory }) => {
  /**Hook Section**/
  const { isLandscape } = useWindowSize({ screensNumber: 1 });
  /**JSX**/
  return (
    <div
      className={`w-full h-full fc ${
        isLandscape ? 'flex-row' : 'flex-col-reverse'
      }`}
    >
      <div className="fc w-full h-full bg-corpo">
        <TextSection currentCategory={currentCategory} />
      </div>
      <div className="fc w-full h-full bg-grey">
        <GraphicSection currentCategory={currentCategory} />
      </div>
    </div>
  );
};

export default KategorieProduktowSlider;
