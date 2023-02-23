import React from 'react';
import Image from 'next/image';
/*FramerMotion Staff*/
import { motion } from 'framer-motion';
import { cardVariants } from '../../../../../../utils/framerMotion/framerMotionUtils';
/*Hook*/
import useMeasure from 'react-use-measure';
/**TS**/
import { IF_ImgStaticData } from '../../../../../../utils/TS/typeScriptStaff';

/**-------------------------------------**/
const ProductCardImageSection: React.FunctionComponent<{
  imageData: IF_ImgStaticData;
  imageAlt?: string;
}> = ({ imageData, imageAlt }) => {
  /**...**/
  const [ref, bounds] = useMeasure();
  // console.log('bounds', bounds);
  /**JSX**/
  return (
    <motion.div
      ref={ref}
      data-component="ProductCardImageSection__white-container"
      className="fc w-[95%] aspect-square p-2 lg:p-4 xl:p-2 xxl:p-4 xxxl:p-5 rounded-sm overflow-hidden"
      variants={cardVariants}
      initial="initial"
      animate="animate"
    >
      <div
        className="relative fc w-full h-full"
        // style={{
        //   width: Math.min(bounds.width, bounds.height),
        //   height: Math.min(bounds.width, bounds.height),
        // }}
      >
        {/* <p>{bounds.width}</p>
        <p>{bounds.height}</p> */}
        <Image
          alt={imageAlt ? imageAlt : 'zdjęcie produktu'}
          src={imageData.image}
          width={Math.min(bounds.width, bounds.height)}
          height={Math.min(bounds.width, bounds.height)}
          // width={600}
          // height={600}
          // fill // intrinsic|fixed|responsive|fill allowed;  fill your parent bro! that is why I calculated width and height to make parent of square shape
        />
      </div>
    </motion.div>
  );
};

export default ProductCardImageSection;
