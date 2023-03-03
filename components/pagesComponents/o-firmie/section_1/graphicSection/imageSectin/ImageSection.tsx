import React, { ReactNode } from 'react';
import Image from 'next/image';
/*FramerMotion Staff*/
import { motion } from 'framer-motion';
/**TS**/
import { IF_ImgStaticData } from '../../../../../../utils/TS/typeScriptStaff';
/** */
import useMeasure from 'react-use-measure';
import useWindowSize from '../../../../../../utils/hooks/useWindowSize';
import FlyingLine from '../../../../../multipagesComponents/lines/flyingLine/FlyingLine';
import { corpoColors } from '../../../../../../data/_data';
/**HardCoded Staff*/
const layoutBreakPoint = 1280;

/**-------------------------------------**/
const ImageSection: React.FunctionComponent<{
  imageData: IF_ImgStaticData;
  children?: ReactNode;
  imageAlt?: string;
}> = ({ imageData, imageAlt, children }) => {
  /**...**/
  const [ref, bounds] = useMeasure();
  const { width } = useWindowSize({ screensNumber: 1 });
  const condition = width >= layoutBreakPoint;
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
        className="relative fc w-full h-full "
        style={{
          // width: Math.min(bounds.width, bounds.height),
          // height: Math.min(bounds.width, bounds.height),
          width: size,
          height: size,
        }}
      >
        {children}
        {/* <div className="absolute inset-0 bg-vY" /> */}
        <Image
          alt={imageAlt ? imageAlt : 'zdjęcie produktu'}
          src={imageData.image}
          width={1200}
          height={1200}
          // fill
          // sizes="1200"
          // fill // intrinsic|fixed|responsive|fill allowed;  fill your parent bro! that is why I calculated width and height to make parent of square shape
        />
        <div className="absolute  left-[40%] bottom-[0%] w-[10px] h-[20%]  ">
          <div className="flex gap-1 items-center  flex-col w-full h-full ">
            <div className="h-[5%]  aspect-square bg-corpo" />
            <div className="relative w-[1px] h-[80%] bg-vY overflow-hidden">
              <FlyingLine
                variantsNumber={4}
                bgColor={'bg-light'}
                fgColor={'bg-corpo'}
              />
            </div>
            <div className="h-[5%]  aspect-square bg-corpo" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageSection;
