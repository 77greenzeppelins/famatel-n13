import React, { useState } from 'react';
/**Components**/
import TextSection from './textSection/TextSection';
import GraphicSection from './graphicSection/GraphicSection';
/**Hook Staff**/
import useWindowSize from '../../../../utils/hooks/useWindowSize';
import useMeasure from 'react-use-measure';

/**-----------------------------------------------------------**/
const KategorieProduktowSlider: React.FunctionComponent<{
  currentCategory: number;
}> = ({ currentCategory }) => {
  /**Hook Section**/
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  /**Hook Section**/
  const { isLandscape } = useWindowSize({ screensNumber: 1 });
  /**Hook Section**/
  const [ref, { width, height }] = useMeasure();
  /**JSX**/
  return (
    <div
      className={`w-full h-full fc ${
        isLandscape ? 'flex-row' : 'flex-col-reverse'
      }`}
    >
      <div className="fc w-full h-full flex-3">
        <TextSection
          currentCategory={currentCategory}
          setIsPreviewOpen={setIsPreviewOpen}
        />
      </div>
      <div className="fc w-full h-full flex-2">
        <GraphicSection
          currentCategory={currentCategory}
          isPreviewOpen={isPreviewOpen}
        />
      </div>
    </div>
  );
};

export default KategorieProduktowSlider;
