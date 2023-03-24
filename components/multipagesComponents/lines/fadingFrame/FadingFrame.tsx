import React from 'react';
/*
(!) Parent should be "relative"
*/
/**--------------------------**/
const FadingFrame = () => {
  /**JSX{*/
  return (
    <>
      <div className="absolute flex inset-x-0 top-0 h-[1px]">
        <div className="w-[50%] h-[1px] bg-gradient-to-l from-grey via-greyShade2 to-transparent" />
        <div className="w-[50%] h-[1px] bg-gradient-to-r from-grey via-greyShade2 to-transparent" />
      </div>
      <div className="absolute flex inset-x-0 bottom-0 h-[1px]">
        <div className="w-[50%] h-[1px] bg-gradient-to-l from-grey via-greyShade2 to-transparent" />
        <div className="w-[50%] h-[1px] bg-gradient-to-r from-grey via-greyShade2 to-transparent" />
      </div>
      <div className="absolute flex flex-col inset-y-0 left-0 w-[1px]">
        <div className="w-[1px]] h-[50%] bg-gradient-to-t from-grey via-greyShade2 to-transparent" />
        <div className="w-[1px]] h-[50%] bg-gradient-to-b from-grey via-greyShade2 to-transparent" />
      </div>
      <div className="absolute flex flex-col inset-y-0 right-0 w-[1px]">
        <div className="w-[1px]] h-[50%] bg-gradient-to-t from-grey via-greyShade2 to-transparent" />
        <div className="w-[1px]] h-[50%] bg-gradient-to-b from-grey via-greyShade2 to-transparent" />
      </div>
    </>
  );
};

export default FadingFrame;
