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
  direction: number;
  imageData: IF_ImgStaticData;
  basicState: number;
}> = ({ direction, imageData, basicState }) => {
  /**useMeasure Section**/
  const [ref, { width, height }] = useMeasure();
  /**Framer Motion**/
  // const variants = {
  //   start: ({ direction, width }: { direction: number; width: number }) => ({
  //     x: direction * width,
  //   }),
  //   center: { x: 0 },
  //   exit: ({ direction, width }: { direction: number; width: number }) => ({
  //     x: direction * -width,
  //   }),
  // };
  console.log('SlidesSection / basicState:', basicState);
  console.log('SlidesSection / direction:', direction);
  // const variants = {
  //   start: ({ direction, width }: { direction: number; width: number }) => ({
  //     x: 0,
  //   }),

  //   animate: ({ direction, width }: { direction: number; width: number }) => ({
  //     x: direction * -width,
  //   }),
  // };

  /**JSX**/
  return (
    <div
      ref={ref}
      data-component="SlidesSection__container"
      className="relative flex justify-center w-full h-full overflow-hidden "
      //___"bg-light" is cruciall... eliminates some trange vertical blaze...bg-greyShade2
    >
      <div
        data-layout="sliderWrapper"
        className="bg-light overflow-hidden"
        style={{
          width: Math.min(width, height),
          height: Math.min(width, height),
        }}
      >
        <motion.div
          data-layout="slidingContainer"
          className="flex items-center flex-nowrap w-full h-full bg-light"
          initial={{ x: 0 }}
          animate={{ x: basicState ? -Math.min(width, height) : 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeIn' }}
        >
          <div
            className="fc flex-none "
            style={{
              width: Math.min(width, height),
              height: Math.min(width, height),
            }}
          >
            <div className="relative w-[90%] h-[90%] ">
              <Image
                alt={'zdjęcie produktu'}
                src={imageData.image}
                fill // intrinsic|fixed|responsive|fill allowed;  fill your parent bro! that is why I calculated width and height to make parent of square shape
              />
            </div>
          </div>
          <div
            className="fc flex-none "
            style={{
              width: Math.min(width, height),
              height: Math.min(width, height),
            }}
          >
            {' '}
            <div className="w-[25%] h-[25%] bg-grey" />
          </div>
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
        <div className="fc h-full bg-vY" style={{ width: width }}>
          {width}
        </div>
        <div className="fc h-full bg-vB" style={{ width: width }}>
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
            // <div key={direction} className="fc w-full h-full bg-light">
            //   <div className="w-[25%] aspect-square bg-vY" />
            // </div>
            <div key={direction} className="fc w-full h-full bg-light">
              <div className="w-[25%] aspect-square bg-vY" />
            </div>
          )}
        </motion.div>
      </AnimatePresence> */
}
