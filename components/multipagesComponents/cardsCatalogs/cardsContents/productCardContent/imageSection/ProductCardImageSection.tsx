import React, { useState } from 'react';
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
  const [state, setState] = useState(false);
  /**...**/
  const [ref, bounds] = useMeasure();
  // console.log('bounds', bounds);
  /**...**/
  const onLoadHandler = () => {
    setState(true);
    console.log('imageData', imageData.model);
  };
  /**JSX**/
  return (
    <motion.div
      ref={ref}
      data-component="ProductCardImageSection__white-container"
      className="relative fc  overflow-hidden w-full h-full bg-light"
      //___w-[95%] aspect-square p-2 lg:p-4 xl:p-2 xxl:p-4 xxxl:p-5  rounded-sm
      variants={cardVariants}
      initial="initial"
      animate="animate"
    >
      <div
        className="relative fc w-full h-full"
        style={{
          width: Math.min(bounds.width, bounds.height) * 0.9,
          height: Math.min(bounds.width, bounds.height) * 0.9,
        }}
      >
        <Image
          alt={imageAlt ? imageAlt : 'zdjęcie produktu'}
          src={imageData.image}
          // placeholder="blur"
          fill
          sizes="600"
          // width={Math.min(bounds.width, bounds.height) * 0.95}
          // height={Math.min(bounds.width, bounds.height) * 0.95}
          // width={600}
          // height={600}
          // fill // intrinsic|fixed|responsive|fill allowed;  fill your parent bro! that is why I calculated width and height to make parent of square shape
          onLoadingComplete={onLoadHandler}
        />
      </div>
      <motion.div
        className="absolute inset-0 dark"
        animate={{ opacity: state ? 0 : 1 }}
        transition={{ delay: 1.6, duration: 0.4, ease: 'easeIn' }}
      />
    </motion.div>
  );
};

export default ProductCardImageSection;
