import React from 'react';
import Image from 'next/image';
/*Hook*/
import useMeasure from 'react-use-measure';
/*Framer Motion Staff*/
import { motion } from 'framer-motion';
/**TS**/
import { IF_ImgStaticData } from '../../../../../utils/TS/typeScriptStaff';

/**********************************************************************************/
const SlidesSection: React.FunctionComponent<{
  imageData: IF_ImgStaticData[];
  basicState: number;
  imageDirectContainer?: string;
}> = ({ imageData, basicState, imageDirectContainer }) => {
  /**useMeasure Section**/
  const [ref, { width, height }] = useMeasure();
  /**JSX**/
  return (
    <div
      ref={ref}
      data-component="SlidesSection__container"
      className="relative flex justify-center w-full max-w-[600px] h-full"
    >
      <div
        data-layout="sliderWrapper"
        className="overflow-hidden bg-light"
        style={{
          width: width,
          height: width,
        }}
      >
        <motion.div
          data-layout="slidingContainer"
          className="flex items-center w-full h-full flex-nowrap"
          initial={{ x: 0 }}
          animate={{ x: basicState * -width }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeIn' }}
        >
          {imageData.map((image, i) => (
            <div
              key={i}
              className="flex-none fc"
              style={{
                width: width,
                height: height,
              }}
            >
              <div
                className={
                  imageDirectContainer ? imageDirectContainer : `relative`
                }
              >
                <Image
                  alt={'zdjęcie produktu'}
                  src={image.image}
                  width={600}
                  height={600}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SlidesSection;

// const variants = {
//   start: ({ direction, width }: { direction: number; width: number }) => ({
//     x: direction * width,
//   }),
//   center: { x: 0 },
//   exit: ({ direction, width }: { direction: number; width: number }) => ({
//     x: direction * -width,
//   }),
// };

{
  /* <Carousel autoPlay={false} interval={2000} loop={false}>
        <SquareHolderWithImage
          key={direction}
          imageData={imageData}
          squareHolderOuterContainer="flex justify-center items-center w-full h-full bg-light"
          //___items-start
          squareHolderInnerContainer="relative overflow-hidden bg-light p-4"
        />
        <div
          draggable="true"
          className="w-full h-full bg-grey"
        />
      </Carousel> */
}

{
  /* <motion.div
        // className="absolute w-full h-full "
        className={`absolute flex h-full bg-corpo`}
        style={{ width: width * 2 }}
        key={basicState}
        variants={variants}
        // initial="start"
        // initial={{ x: 0 }}
        // animate="center"
        // animate={{
        //   x: basicState ? direction * width : direction * width,
        // }}
        // custom={{ direction, width }}
        //___
        // initial={{ x: width }}
        // animate={{ x: 0 }}
        // exit={{ x: -width }}
        //___

        initial="start"
        animate="animate"
        custom={{ direction, width }}
        transition={{ duration: 2, delay: 1 }}
      >
        <div className="h-full fc bg-vY" style={{ width: width }}>
          {width}
        </div>
        <div className="h-full fc bg-vB" style={{ width: width }}>
          {width}
        </div>
      </motion.div> */
}

{
  /* <AnimatePresence custom={{ direction, width }}>
        <motion.div
          // className="absolute w-full h-full "
          className={`absolute w-full h-full bg-light`}
          key={basicState}
          variants={variants}
          initial="start"
          animate="center"
          exit="exit"
          custom={{ direction, width }}
          //___
          // initial={{ x: width }}
          // animate={{ x: 0 }}
          // exit={{ x: -width }}
          transition={{ duration: 1 }}
        >
          {!basicState ? (
            <SquareHolderWithImage
              key={direction}
              imageData={imageData}
              squareHolderOuterContainer="flex justify-center items-center w-full h-full bg-light"
              //___items-start
              squareHolderInnerContainer="relative overflow-hidden bg-light p-4"
            />
          ) : (
            // <div key={direction} className="w-full h-full fc bg-light">
            //   <div className="w-[25%] aspect-square bg-vY" />
            // </div>
            <div key={direction} className="w-full h-full fc bg-light">
              <div className="w-[25%] aspect-square bg-vY" />
            </div>
          )}
        </motion.div>
      </AnimatePresence> */
}
