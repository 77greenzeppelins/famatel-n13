import React from 'react';
/*Hook*/
import useMeasure from 'react-use-measure';
/*Framer Motion Staff*/
import { AnimatePresence, motion } from 'framer-motion';
import { IF_ImgStaticData } from '../../../../../../utils/TS/typeScriptStaff';
import SquareHolderWithImage from '../../../../holders/squareHolderWithImage/SquareHolderWithImage';

/*TS*/
interface ISvgProductTechImage {
  arrayIndex: number;
}
interface IComponent {
  id: number;
  Component: ({ arrayIndex }: ISvgProductTechImage) => JSX.Element;
}

interface ISlidesSection {
  arrayIndex: number;
  slideIndex: number;
  slidesNumber: number;
  direction: number;
  slidesContent: IComponent[];
}

interface IVariants {
  direction: number;
  width: number;
}

/**********************************************************************************/
const SlidesSection: React.FunctionComponent<{
  direction: number;
  imageData: IF_ImgStaticData;
  basicState: number;
}> = ({ direction, imageData, basicState }) => {
  /**useMeasure Section**/
  const [ref, { width }] = useMeasure();
  /**Framer Motion**/
  const variants = {
    start: ({ direction, width }: IVariants) => ({ x: direction * width }),
    center: { x: 0 },
    exit: ({ direction, width }: IVariants) => ({ x: direction * -width }),
  };
  // console.log('SlidesSection / basicState:', basicState);

  /**JSX**/
  return (
    <div
      ref={ref}
      data-component="SlidesSection__container"
      className="relative w-full h-full overflow-hidden bg-light"
      //___"bg-light" is cruciall... eliminates some trange vertical blaze...
    >
      <AnimatePresence custom={{ direction, width }}>
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
      </AnimatePresence>
    </div>
  );
};

export default SlidesSection;

{
  /* {
            //___"slidesContent" comes from "svgImageData.tsx"; this array alowes to render <SvgProductTechImage>
            slidesContent.map(({ id, Component }) => {
              if (id === slideIndex) {
                return <Component key={id} arrayIndex={arrayIndex} />;
              }
            })
          } */
}
{
  /* {direction ? (
            <SquareHolderWithImage
              key={direction}
              imageData={imageData}
              squareHolderOuterContainer="flex justify-center items-center w-full h-full bg-light"
              //___items-start
              squareHolderInnerContainer="relative overflow-hidden bg-light p-4"
            />
          ) : (
            <div key={direction} className="w-full h-full bg-vY" />
          )} */
}

{
  /* <AnimatePresence custom={{ direction, width }}>
  <motion.div
    // className="absolute w-full h-full "
    className="absolute w-full h-auto"
    // className={`absolute fc w-[200px] h-[200px] ${
    //   backgrounds[Math.abs(slideIndex) % slidesNumber]
    // }`}
    key={slideIndex}
    // initial={{ x: direction === 'forward' ? '-200%' : '200' }}
    // animate={{ x: 0 }}
    // exit={{ x: direction === 'forward' ? '200%' : '-200' }}
    variants={variants}
    initial="start"
    animate="center"
    exit="exit"
    custom={{ direction, width }}
    transition={{ duration: 1 }}
  >
    {slidesContent.map(({ id, Component }) => {
      console.log('id === slideIndex:', id === slideIndex);
      console.log('slideIndex:', slideIndex);
      console.log('id:', id);
      if (id === slideIndex) {
        return <Component key={id} arrayIndex={arrayIndex} />;
      }
    })}
  </motion.div>
</AnimatePresence>; */
}
