import React, { useState } from 'react';
import Image from 'next/image';
/**Components**/
import SquareHolder from '../squareHolder/SquareHolder';
/**Framer Motion Staff**/
import { motion } from 'framer-motion';

/**TS**/
import { IF_ImgStaticData } from '../../../../utils/TS/typeScriptStaff';

interface Props {
  imageData: IF_ImgStaticData;
  imageAlt?: string;
  squareHolderOuterContainer?: string;
  squareHolderInnerContainer?: string;
  imageWidth?: number;
  imageHeight?: number;
}

/**------------------------------------**/
const SquareHolderWithImage: React.FC<Props> = ({
  imageData,
  imageAlt,
  squareHolderOuterContainer,
  squareHolderInnerContainer,
  imageWidth,
  imageHeight,
}) => {
  /**...**/
  const [state, setState] = useState(false);
  /**...**/
  const onLoadHandler = () => {
    setState(true);
    console.log('imageData', imageData.model);
  };
  /**JSX**/
  return (
    <>
      <SquareHolder
        refDivStyle={
          squareHolderOuterContainer
            ? squareHolderOuterContainer
            : 'fc w-full h-full bg-light'
        }
        squareDivStyle={
          squareHolderInnerContainer
            ? squareHolderInnerContainer
            : 'relative overflow-hidden p-2 '
        }
      >
        <motion.div
          data-component="ImageSection__container"
          // variants={cardVariants}
          // initial="initial"
          // animate="animate"
          className="relative fc w-full h-full "
        >
          <Image
            alt={imageAlt ? imageAlt : 'zdjęcie produktu'}
            src={imageData.image}
            width={imageWidth ? imageWidth : 600}
            height={imageHeight ? imageHeight : 600}
            // fill // intrinsic|fixed|responsive|fill allowed;  fill your parent bro! that is why I calculated width and height to make parent of square shape
            onLoadingComplete={onLoadHandler}
          />
        </motion.div>
      </SquareHolder>
      <motion.div
        className="absolute inset-0 bg-dark "
        animate={{ opacity: state ? 0 : 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeIn' }}
      />
    </>
  );
};

export default SquareHolderWithImage;
