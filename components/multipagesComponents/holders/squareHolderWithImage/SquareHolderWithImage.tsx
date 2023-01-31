import React from 'react';
import Image from 'next/image';
/**Components**/
import SquareHolder from '../squareHolder/SquareHolder';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';
/**TS**/
import { IF_ImgStaticData } from '../../../../utils/TS/typeScriptStaff';

const SquareHolderWithImage: React.FunctionComponent<{
  imageData: IF_ImgStaticData;
  imageAlt?: string;
  squareHolderOuterContainer?: string;
  squareHolderInnerContainer?: string;
}> = ({
  imageData,
  imageAlt,
  squareHolderOuterContainer,
  squareHolderInnerContainer,
}) => {
  /**JSX**/
  return (
    <SquareHolder
      refDivStyle={
        squareHolderOuterContainer
          ? squareHolderOuterContainer
          : 'fc w-full h-full bg-corpo'
      }
      squareDivStyle={
        squareHolderInnerContainer
          ? squareHolderInnerContainer
          : 'relative overflow-hidden bg-light p-4'
      }
    >
      <motion.div
        data-component="ImageSection__container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.4 } }}
        className="relative fc w-full h-full "
      >
        <Image
          alt={imageAlt ? imageAlt : 'zdjęcie produktu'}
          src={imageData.image}
          fill // intrinsic|fixed|responsive|fill allowed;  fill your parent bro! that is why I calculated width and height to make parent of square shape
        />
      </motion.div>
    </SquareHolder>
  );
};

export default SquareHolderWithImage;
