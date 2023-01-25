import React from 'react';
/**Components**/
import BasicSlider from '../../../../../multipagesComponents/sliders/basicSlider/BasicSlider';
/**Data Staff*/
import { svgArray } from './CategoryPreviewGraphicSection_data';

/**-----------------------------------------------------------------**/
const CategoryPreviewGraphicSection: React.FunctionComponent<{
  categoryIndex: number;
}> = ({ categoryIndex }) => {
  /**JSX**/
  return (
    <div
      data-component="OverlayGraphicSection__container"
      className="w-full max-w-[1000px] h-full"
    >
      <BasicSlider imagesArray={svgArray} categoryIndex={categoryIndex} />
    </div>
  );
};

export default CategoryPreviewGraphicSection;
