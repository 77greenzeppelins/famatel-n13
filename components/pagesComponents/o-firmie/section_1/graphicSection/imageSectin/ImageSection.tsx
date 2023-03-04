import React, { ReactNode } from 'react';
import Image from 'next/image';
/**Components**/
import ScrollPrompt from '../scrollPrompt/ScrollPrompt';
/*FramerMotion Staff*/
import { motion } from 'framer-motion';
/**TS**/
import { IF_ImgStaticData } from '../../../../../../utils/TS/typeScriptStaff';
/** */
import useMeasure from 'react-use-measure';
import useWindowSize from '../../../../../../utils/hooks/useWindowSize';
import AnimatedButton from '../animatedButton/AnimatedButton';
import PseudoTechPanel from '../pseudoTechPanel/PseudoTechPanel';

/**HardCoded Staff*/
const layoutBreakPoint = 1280;

/**-------------------------------------**/
const ImageSection: React.FunctionComponent<{
  imageData: IF_ImgStaticData;
  children?: ReactNode;
  imageAlt?: string;
  //___
  isSection_2_Open: boolean;
  setIsSection_2_Open: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  imageData,
  imageAlt,
  children,
  isSection_2_Open,
  setIsSection_2_Open,
}) => {
  /**...**/
  const [ref, bounds] = useMeasure();
  const { width, height } = useWindowSize({ screensNumber: 1 });
  const condition = width >= layoutBreakPoint;
  // const size = condition
  //   ? Math.min(bounds.width, bounds.height)
  //   : Math.min(width, height) * 0.98;
  const size = condition ? Math.min(bounds.width, bounds.height) : 'auto';
  console.log('size', size);
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
        data-layout="DynamicContainer"
        className="relative fc"
        style={{
          // width: Math.min(bounds.width, bounds.height),
          // height: Math.min(bounds.width, bounds.height),
          width: size,
          height: size,
        }}
      >
        <PseudoTechPanel />
        <AnimatedButton
          isSection_2_Open={isSection_2_Open}
          onClick={() => {
            setIsSection_2_Open(true);
          }}
          sniperColor={'border-grey'}
        />
        <Image
          alt={imageAlt ? imageAlt : 'zdjęcie produktu'}
          src={imageData.image}
          width={1200}
          height={1200}
          // fill
          // sizes="1200"
          // fill // intrinsic|fixed|responsive|fill allowed;  fill your parent
        />
        <ScrollPrompt isSection_2_Open={isSection_2_Open} />
      </div>
    </motion.div>
  );
};

export default ImageSection;
