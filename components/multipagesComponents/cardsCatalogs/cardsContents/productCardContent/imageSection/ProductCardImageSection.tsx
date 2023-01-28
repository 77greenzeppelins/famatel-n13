import React from 'react';
import Image from 'next/image';
/*FramerMotion Staff*/
import { motion } from 'framer-motion';
import { cardVariants } from '../../../../../../utils/framerMotion/framerMotionUtils';
/**TS**/
import { IF_ImgStaticData } from '../../../../../../utils/TS/typeScriptStaff';

/**-------------------------------------**/
const ProductCardImageSection: React.FunctionComponent<{
  imageData: IF_ImgStaticData;
  imageAlt?: string;
}> = ({ imageData, imageAlt }) => {
  /**JSX**/
  return (
    <motion.div
      data-component="ProductCardImageSection__white-container"
      className="fc w-[90%] aspect-square p-2 lg:p-4 xl:p-2 xxl:p-4 xxxl:p-5 rounded-sm "
      variants={cardVariants}
      initial="initial"
      animate="animate"
    >
      <div className="relative fc w-full h-full ">
        <Image
          alt={imageAlt ? imageAlt : 'zdjęcie produktu'}
          src={imageData.image}
          fill // intrinsic|fixed|responsive|fill allowed;  fill your parent bro! that is why I calculated width and height to make parent of square shape
        />
      </div>
    </motion.div>
  );
};

export default ProductCardImageSection;
