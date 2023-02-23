import React from 'react';
import Image from 'next/image';
/*FramerMotion Staff*/
import { motion } from 'framer-motion';
/**TS**/
import { IF_ImgStaticData } from '../../../../../../../../utils/TS/typeScriptStaff';
/*Hook*/
import useMeasure from 'react-use-measure';

/**-------------------------------------**/
const BasicCardImageSection: React.FunctionComponent<{
  imageData: IF_ImgStaticData;
  imageAlt?: string;
}> = ({ imageData, imageAlt }) => {
  /**...**/
  const [ref, bounds] = useMeasure();
  /**JSX**/
  return (
    <motion.div
      ref={ref}
      data-component="ImageSection__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4 } }}
      className="relative fc w-full h-full "
    >
      <div
        className="relative fc"
        // w-full h-full
        style={{
          width: Math.min(bounds.width, bounds.height),
          height: Math.min(bounds.width, bounds.height),
        }}
      >
        <Image
          alt={imageAlt ? imageAlt : 'zdjęcie produktu'}
          src={imageData.image}
          placeholder="blur"
          fill
          // className="object-cover"
          // width={Math.min(bounds.width, bounds.height)}
          // height={Math.min(bounds.width, bounds.height)}
          // width={600}
          // height={600}
          // fill // intrinsic|fixed|responsive|fill allowed;  fill your parent bro! that is why I calculated width and height to make parent of square shape

          //
        />
      </div>
    </motion.div>
  );
};

export default BasicCardImageSection;
