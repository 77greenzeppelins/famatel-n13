import React, { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';
/*Hook staff*/
import useMeasure from 'react-use-measure';
/**Basic Data*/
const defaultRefDivStyle = 'fc relative h-full w-full';
const defaultSquareDivStyle = 'relative bg-light p-[6px] overflow-hidden';
/*TS**/
interface IF_SquareImageHolder {
  children?: ReactNode;
  imageData: StaticImageData;
  squareDivStyle?: string;
  refDivStyle?: string;
}

/**-----------------------------------------------------------------------**/
const SquareImageHolder = ({
  imageData,
  refDivStyle,
  squareDivStyle,
  children,
}: IF_SquareImageHolder) => {
  /**Hook Section**/
  const [ref, { width, height }] = useMeasure();
  /**...WTF**/
  console.log('width / height', width, height);
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
        } `}
        style={{
          width: width >= height ? height : width,
          height: height >= width ? width : height,
        }}
      >
        <div className="relative fc w-full h-full ">
          <Image
            alt="produkt z kategorii"
            src={imageData}
            fill // intrinsic|fixed|responsive|fill allowed;  fill your parent bro! that is why I calculated width and height to make parent of square shape
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default SquareImageHolder;
