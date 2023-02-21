import React from 'react';

/**Components**/
import SvgImageSwitcher from '../../../../multipagesComponents/sliders/basicSlider/svgImageSwitcher/SvgImageSwitcher';
/**TS**/
import { IF_ImgStaticData } from '../../../../../utils/TS/typeScriptStaff';
/**-----------------------------------------------**/
const ImagesSection: React.FunctionComponent<{
  imageData: IF_ImgStaticData;
}> = ({ imageData }) => {
  return (
    <div className="w-full h-full">
      <SvgImageSwitcher imageData={imageData} />
    </div>
  );
};

export default ImagesSection;
