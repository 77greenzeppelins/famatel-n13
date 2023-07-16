import React from 'react';
import Image from 'next/image';
/**Components**/
import PseudoTechPanel from '../pseudoTechPanel/PseudoTechPanel';
import SniperPanel from '../sniperPanel/SniperPanel';
/**FramerMotin Staff*/
import { motion } from 'framer-motion';
/**TS**/
import { IF_ImgStaticData } from '../../../../../../utils/TS/typeScriptStaff';

/**-------------------------------------**/
const ImageSection: React.FunctionComponent<{
  imageData: IF_ImgStaticData;
  imageAlt?: string;
}> = ({ imageData, imageAlt }) => {
  /**JSX**/
  return (
    <motion.div
      data-component="ImageSection__container"
      className="relative flex w-full h-full justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.6 }}
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
    </motion.div>
  );
};

export default ImageSection;
