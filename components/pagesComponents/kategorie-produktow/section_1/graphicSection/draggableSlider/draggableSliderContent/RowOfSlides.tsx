import React from 'react';
/**Components**/
import SlideContent from './slideContent/SlideContent';

/**-----------------------------------------------------**/
const RowOfSlides: React.FunctionComponent<{
  slidesNumber: number; // from... to ...
  slideSide: number; // 200 or 150
  currentCategory: number; // from 0 to 9
}> = ({ slidesNumber, slideSide, currentCategory }) => {
  // if (!slidesNumber) return;

  // console.log({ slidesLineIndex });
  /**JSX**/
  return (
    <div data-component="RowOfSlides__container" className="flex gap-[2px]">
      {Array.from({ length: slidesNumber }).map((_, i) => {
        return (
          <div key={i} style={{ width: slideSide, height: slideSide }}>
            <SlideContent
              currentCategory={currentCategory}
              slideIndex={i}
              slideSize={slideSide}
            />
          </div>
        );
      })}
    </div>
  );
};

export default RowOfSlides;
