import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
/**Components**/
import SquareOverlay from '../overlays/squareOverlay/SquareOverlay';
/*Hook Staff*/
import useMeasure from 'react-use-measure';
/*FramerMotion Staff*/
import { motion } from 'framer-motion';
/**Basic Data*/
const defaultRefDivStyle = 'fc relative h-full w-full';
const defaultSquareDivStyle = 'relative bg-light p-[6px] overflow-hidden';
/*TS**/
interface IF_SquareImageHolder {
  children?: ReactNode;
  imageData: StaticImageData;
  squareDivStyle?: string;
  refDivStyle?: string;
  hasOverlay?: boolean;
  //___
  itemsNumber: number;
  columns: number;
  gridStyle?: string;
  cellStyle?: string;
  delayPerPixel: number;
}

/**-----------------------------------------------------------------------**/
const SquareImageHolder: React.FunctionComponent<IF_SquareImageHolder> = ({
  imageData,
  refDivStyle,
  squareDivStyle,
  children,
  hasOverlay = false,
  itemsNumber,
  columns,
  gridStyle,
  cellStyle,
  delayPerPixel,
}) => {
  /**Hook Section**/
  const [ref, { width, height }] = useMeasure();
  /**...WTF**/
  // console.log('width / height', width, height);
  /**
   * JSX
   * how it works?
   * first <div> fills parent's container (inherits its size) & ia a "template" for useElementSize()
   * second <div> reshapes to "square size"; always customisess itself to lower value of width 7 height
   **/
  return (
    <div
      data-component="SquareImageHolder__container"
      ref={ref}
      className={refDivStyle ? refDivStyle : defaultRefDivStyle}
      // className={`${refDivStyle ? refDivStyle : defaultRefDivStyle} bg-corpo`}
    >
      <div
        className={`${
          squareDivStyle ? squareDivStyle : defaultSquareDivStyle
        } relative`}
        style={{
          width: width >= height ? height : width,
          height: height >= width ? width : height,
        }}
      >
        {/* <div className="absolute inset-0 bg-greyShade2" /> */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4 } }}
          className="relative fc w-full h-full "
        >
          <Image
            alt="produkt z kategorii"
            src={imageData}
            fill // intrinsic|fixed|responsive|fill allowed;  fill your parent bro! that is why I calculated width and height to make parent of square shape
          />
          {children}
        </motion.div>
        {hasOverlay && (
          <div className="absolute inset-0">
            <SquareOverlay
              itemsNumber={itemsNumber}
              columns={columns}
              gridStyle={gridStyle}
              cellStyle={cellStyle}
              delayPerPixel={delayPerPixel}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SquareImageHolder;
