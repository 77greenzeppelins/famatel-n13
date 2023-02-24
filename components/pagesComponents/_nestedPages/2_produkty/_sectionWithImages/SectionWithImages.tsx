import React from 'react';
/**Components**/
import SvgImageSwitcher from '../../../../multipagesComponents/sliders/svgImageSwitcher/SvgImageSwitcher';
/**TS**/
import { IF_ImgStaticData } from '../../../../../utils/TS/typeScriptStaff';

/**-----------------------------------------------**/
const SectionWithImages: React.FunctionComponent<{
  imageData: IF_ImgStaticData;
}> = ({ imageData }) => {
  return (
    <div className="w-full h-full">
      <SvgImageSwitcher imageData={imageData} />
    </div>
  );
};

export default SectionWithImages;
