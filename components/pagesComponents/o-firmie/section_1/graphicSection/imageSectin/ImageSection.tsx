import React, { ReactNode } from 'react';
import Image from 'next/image';
/*FramerMotion Staff*/
import { motion } from 'framer-motion';
/**TS**/
import { IF_ImgStaticData } from '../../../../../../utils/TS/typeScriptStaff';
/** */
import useMeasure from 'react-use-measure';
import useWindowSize from '../../../../../../utils/hooks/useWindowSize';

/**-------------------------------------**/
const ImageSection: React.FunctionComponent<{
  imageData: IF_ImgStaticData;
  children?: ReactNode;
  imageAlt?: string;
}> = ({ imageData, imageAlt, children }) => {
  /**...**/
  const [ref, bounds] = useMeasure();
  const { width } = useWindowSize({ screensNumber: 1 });
  const condition = width >= 1280;
  const size = condition ? Math.min(bounds.width, bounds.height) : 'auto';
  // console.log('size', size);
  /**JSX**/
  return (
    <motion.div
      ref={ref}
      data-component="ImageSection__container"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1, transition: { delay: 0.4 } }}
      className="flex justify-end xl:items-center w-full h-full "
    >
      <div
        className="relative fc w-full h-full"
        style={{
          // width: Math.min(bounds.width, bounds.height),
          // height: Math.min(bounds.width, bounds.height),
          width: size,
          height: size,
        }}
      >
        {children}
        <Image
          alt={imageAlt ? imageAlt : 'zdjęcie produktu'}
          src={imageData.image}
          width={1200}
          height={1200}
          // fill
          // sizes="1200"
          // fill // intrinsic|fixed|responsive|fill allowed;  fill your parent bro! that is why I calculated width and height to make parent of square shape
        />
      </div>
    </motion.div>
  );
};

export default ImageSection;
