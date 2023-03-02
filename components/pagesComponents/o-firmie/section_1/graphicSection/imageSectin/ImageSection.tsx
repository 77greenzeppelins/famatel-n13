import React from 'react';
import Image from 'next/image';
/*FramerMotion Staff*/
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
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1, transition: { delay: 0.4 } }}
      className="relative fc w-full h-full "
    >
      <Image
        alt={imageAlt ? imageAlt : 'zdjęcie produktu'}
        src={imageData.image}
        width={1200}
        height={1200}
        // fill
        // sizes="1500"
        // fill // intrinsic|fixed|responsive|fill allowed;  fill your parent bro! that is why I calculated width and height to make parent of square shape
      />
    </motion.div>
  );
};

export default ImageSection;
