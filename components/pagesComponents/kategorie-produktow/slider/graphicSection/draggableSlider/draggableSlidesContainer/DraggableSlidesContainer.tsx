import React from 'react';

const DraggableSlidesContainer: React.FunctionComponent<{
  slidesNumber: number;
  slideSide: number;
}> = ({ slidesNumber, slideSide }) => {
  // if (!slidesNumber) return;
  /**JSX**/
  return (
    <>
      {Array.from({ length: slidesNumber }).map((_, i) => {
        return (
          <div
            key={i}
            className="flex flex-col border border-greyShade2"
            style={{ width: slideSide, height: slideSide }}
            // className="w-[250px]  h-[250px] border"
            // className={`w-[${slideSide}px]  h-[${slideSide}px] border`}
            // className={`${cellSize} border`}
          >
            <p className="fc flex-col w-full h-full text-corpo">
              <span>{`n: ${slidesNumber}`}</span>
              <span>{`i: ${i}`}</span>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default DraggableSlidesContainer;
