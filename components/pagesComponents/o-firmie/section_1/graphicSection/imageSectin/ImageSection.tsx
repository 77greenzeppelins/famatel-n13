import React from 'react';
import Image from 'next/image';
/**Components**/
import PseudoTechPanel from '../pseudoTechPanel/PseudoTechPanel';
import SniperPanel from '../sniperPanel/SniperPanel';
/**TS**/
import { IF_ImgStaticData } from '../../../../../../utils/TS/typeScriptStaff';

/**-------------------------------------**/
const ImageSection: React.FunctionComponent<{
  imageData: IF_ImgStaticData;
  imageAlt?: string;
}> = ({ imageData, imageAlt }) => {
  /**JSX**/
  return (
    <div
      // ref={ref}
      data-component="ImageSection__container"
      className="relative flex w-full h-full justify-end"
    >
      <PseudoTechPanel />
      <SniperPanel />
      <Image
        className="aspect-square"
        alt={imageAlt ? imageAlt : 'zdjęcie produktu'}
        src={imageData.image}
        width={1200}
        height={1200}
        // fill
        // sizes="1200"
        // fill // intrinsic|fixed|responsive|fill allowed;  fill your parent
      />
    </div>
  );
};

export default ImageSection;
