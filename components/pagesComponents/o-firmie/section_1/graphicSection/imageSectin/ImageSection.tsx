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
  const { width } = useWindowSize({ screensNumber: 1 });
  const condition = width >= layoutBreakPoint;
  const size = condition ? Math.min(bounds.width, bounds.height) : 'auto';
  /**JSX**/
  return (
    <div
      ref={ref}
      data-component="ImageSection__Ref-container"
      className="flex justify-end w-full h-full xl:items-center "
    >
      <div
        data-layout="DynamicallySizedContainer"
        className="relative fc"
        style={{
          width: size,
          height: size,
        }}
      >
        <PseudoTechPanel isSection_2_Open={isSection_2_Open} />
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
        {/* <ScrollPrompt isSection_2_Open={isSection_2_Open} /> */}
      </div>
      {/* <div
        className="absolute left-[40%] top-[80% w-[10px] h-[20%]"
        //___-bottom-[10%]
      >
        <ScrollPrompt isSection_2_Open={isSection_2_Open} />
      </div> */}
      <ScrollPrompt isSection_2_Open={isSection_2_Open} />
    </div>
  );
};

export default ImageSection;
