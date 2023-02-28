import React from 'react';
/**Components**/
import SlideContent from './slideContent/SlideContent';

/**-----------------------------------------------------**/
const RowOfSlides: React.FunctionComponent<{
  slidesNumber: number; // from... to ...
  slideSide: number; // 200 or 150
  currentCategory: number; // from 0 to 11
  slidesLineIndex: number; // 0 or 1
}> = ({ slidesNumber, slideSide, currentCategory, slidesLineIndex }) => {
  // if (!slidesNumber) return;

  // console.log({ slidesLineIndex });
  /**JSX**/
  return (
    <div data-component="RowOfSlides__container" className="flex">
      {Array.from({ length: slidesNumber }).map((_, i) => {
        return (
          <div
            key={i}
            // className="border border-greyShade2"
            style={{ width: slideSide, height: slideSide }}
          >
            <SlideContent
              currentCategory={currentCategory}
              slidesLineIndex={slidesLineIndex % 2}
              slidesNumber={slidesNumber}
              slideIndex={i + (slidesLineIndex % 2)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RowOfSlides;
