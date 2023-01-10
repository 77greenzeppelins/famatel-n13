import React from 'react';
import Image from 'next/image';
/**Basic Data / arrays of images for each category **/
import { imgWtyczkiGniazda } from '../../../../../../../../public/images/c1_wtyczki-gniazda/imgWtyczkiGniazda';
import { imgGniazdaZBlokada } from '../../../../../../../../public/images/c2_gniazda-z-blokada/imgGniazdaZBlokada';
import { imgAdapteryPrzemyslowe } from '../../../../../../../../public/images/c3_adaptery-przemyslowe/imgAdapteryPrzemyslowe';
import { imgGniazdaPodwieszaneFake } from '../../../../../../../../public/images/c4_gniazda-podwieszane/imgGniazdaPodwieszane';
import { imgPrzedluzaczeBebnowe } from '../../../../../../../../public/images/c5_przedluzacze-bebnowe/imgPrzedluzaczeBebnowe';

const arrOfImages = [
  imgWtyczkiGniazda,
  imgGniazdaZBlokada,
  imgAdapteryPrzemyslowe,
  imgGniazdaPodwieszaneFake,
  imgPrzedluzaczeBebnowe,
];

/**-------------------------------------------------**/
const SlideContent: React.FunctionComponent<{
  slidesNumber: number;
  slideIndex: number;
  currentCategory: number; // from 0 to 11
  slidesLineIndex: number; // 0 or 1
}> = ({ slidesNumber, slideIndex, currentCategory, slidesLineIndex }) => {
  //   console.log(
  //     'createSwitcher({ index: slideIndex }',
  //     createSwitcher({ index: slideIndex })
  //   );
  //   console.log(
  //     'imgWtyczkiGniazda[slideIndex].image',
  //     imgWtyczkiGniazda[slideIndex].image
  //   );
  //   console.log('slidesLineIndex % 2', slidesLineIndex % 2);

  const contentCreator = ({
    categoryIndex,
    slideIndex,
  }: {
    categoryIndex: number;
    slideIndex: number;
  }) => {
    // const categoryImages = slidesLineIndex
    //   ? arrOfImages[categoryIndex]
    //   : arrOfImages[categoryIndex].reverse();
    const categoryImages = arrOfImages[categoryIndex];

    // console.log(
    //   'arrOfImages[categoryIndex].reverse():',
    //   arrOfImages[categoryIndex].reverse()
    // );
    // console.log('arrOfImages[categoryIndex]:', arrOfImages[categoryIndex]);
    // console.log('categoryImages:', categoryImages);

    /**JSX of contentCreator**/
    return slideIndex % 2 ? (
      <div className="w-full h-full bg-light p-2">
        <div className="relative fc w-full h-full">
          <Image
            alt="produkt z kategorii"
            //   src={createSwitcher({ index: slideIndex })}
            // src={imgWtyczkiGniazda[slideIndex].image}
            src={
              slidesLineIndex
                ? categoryImages[slideIndex].image
                : categoryImages[categoryImages.length - slideIndex].image
            }
            fill // intrinsic|fixed|responsive|fill allowed;  fill your parent bro! that is why I calculated width and height to make parent of square shape
          />
          <div className="absolute inset-0" />
        </div>
      </div>
    ) : (
      <p className="fc flex-col w-full h-full text-corpo">
        <span>{`slidesNumber: ${slidesNumber}`}</span>
        <span>{`index: ${slideIndex}`}</span>
        <span>{`index: ${currentCategory}`}</span>
      </p>
    );
  };
  /**JSX**/
  return (
    <div className="w-full h-full disabled">
      {contentCreator({
        categoryIndex: currentCategory,
        slideIndex: slideIndex,
      })}
    </div>
  );
};

export default SlideContent;

{
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
