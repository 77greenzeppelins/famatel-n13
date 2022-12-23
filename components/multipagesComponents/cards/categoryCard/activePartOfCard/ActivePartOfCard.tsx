import Image, { StaticImageData } from 'next/image';
import React from 'react';
// import ImageSquare from '../../../../../../../multiPagesComponents/imagesFrames/ImageSquare';
/*Hook staff*/
// import useMeasure from 'react-use-measure';
import useElementSize from '../../../../../utils/hooks/useElementSize';

/*TS*/
interface IActivePartOfCard {
  imageData: StaticImageData;
}
//___{ imageData }: IActivePartOfCard
/********************************************************************************/
const ActivePartOfCard = ({ imageData }: IActivePartOfCard) => {
  /**Hook Section**/
  // const [ref, { width, height }] = useMeasure();
  const [squareRef, { width, height }] = useElementSize();

  /**JSX**/
  return (
    <div
      data-component="ActivePartOfCard__container"
      ref={squareRef}
      className="fc relative h-full w-full"
    >
      <div
        className="relative bg-light p-[6px] overflow-hidden"
        style={{
          width: width >= height ? height : width,
          height: height >= width ? width : height,
        }}
      >
        <div className="relative w-full h-full ">
          <Image
            alt="produkt z kategorii"
            src={imageData}
            fill // intrinsic|fixed|responsive|fill allowed;  fill your parent bro! that is why I calculated width and height to make parent of square shape
          />
        </div>
      </div>

      {/* <ImageSquare src={imageData} imageScaleFactor={0.8} /> */}
    </div>
  );
};

export default ActivePartOfCard;
