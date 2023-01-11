import React from 'react';
/**Components**/
import ImageContnent from './imageContent/ImageContnent';
import IconsContent from './iconsContent/IconsContent';

/**-------------------------------------------------**/
const SlideContent: React.FunctionComponent<{
  slidesNumber: number;
  slideIndex: number;
  currentCategory: number; // from 0 to 11
  slidesLineIndex: number; // 0 or 1
}> = ({ slidesNumber, slideIndex, currentCategory, slidesLineIndex }) => {
  //   console.log(

  const contentCreator = ({
    categoryIndex,
    slideIndex,
    slidesLineIndex,
  }: {
    categoryIndex: number;
    slideIndex: number;
    slidesLineIndex: number;
  }) => {
    /**___JSX of contentCreator
     * if slide index is odd / "nieparzysty" return <ImageContnent>
     * **/
    return slideIndex % 2 ? (
      <ImageContnent
        categoryIndex={categoryIndex}
        slidesLineIndex={slidesLineIndex}
        slideIndex={slideIndex}
      />
    ) : (
      <IconsContent
        categoryIndex={categoryIndex}
        slidesLineIndex={slidesLineIndex}
        slideIndex={slideIndex}
      />
    );
  };
  /**JSX**/
  return (
    <div className="w-full h-full disabled">
      {contentCreator({
        categoryIndex: currentCategory,
        slideIndex: slideIndex,
        slidesLineIndex: slidesLineIndex,
      })}
    </div>
  );
};

export default SlideContent;

{
  //__________________________________________________________________________________________________
  /* {slideIndex % 2 ? (
        <div className="w-full h-full bg-light p-2">
          <div className="relative fc w-full h-full">
            <Image
              alt="produkt z kategorii"
          
              src={imgWtyczkiGniazda[slideIndex].image}
              fill // intrinsic|fixed|responsive|fill allowed;  fill your parent bro! that is why I calculated width and height to make parent of square shape
            />
            <div className="absolute inset-0" />
          </div>
        </div>
      ) : (
        <p className="fc flex-col w-full h-full text-corpo">
          <span>{`slidesNumber: ${slidesNumber}`}</span>
          <span>{`index: ${slideIndex}`}</span>
        </p>
      )} */
}

{
  /* <div>{createSwitcher({ index: slideIndex })}</div> */
}
{
  /* <SquareImageHolder
        // imageData={createSwitcher({ index: slideIndex })}
        imageData={imgOFirmiePage[1].image}
        refDivStyle="flex justify-end items-center w-full h-full pb-[60px] md:pt-[30%]  lg:pb-0 lg:pt-[10%]"
        squareDivStyle="relative overflow-hidden"
        hasOverlay={false}
        //
        itemsNumber={100}
        columns={10}
        gridStyle="grid-cols-[repeat(10,_1fr)]"
        delayPerPixel={0.0008}
      ></SquareImageHolder> */
}
{
  /* <p className="fc flex-col w-full h-full text-corpo">
        <span>{`slidesNumber: ${slidesNumber}`}</span>
        <span>{`index: ${slideIndex}`}</span>
      </p> */
}
