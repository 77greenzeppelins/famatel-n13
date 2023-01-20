import React from 'react';

/**-------------------------------------------------------------------------------**/
const CardCounter: React.FunctionComponent<{ arrayIndex: number }> = ({
  arrayIndex,
}) => {
  /**JSX**/
  return (
    <div
      data-component="CardCounter__container"
      className="fc border-r border-light w-full h-full  p-[0.25rem] opacity-70 group-hover:opacity-100 ease-in duration-300"
    >
      <p className="text-light text-center text-[0.75rem] xxxl:text-[1.125rem] tracking-[0.09rem] leading-normal ">
        {arrayIndex + 1 < 10 ? `0${arrayIndex + 1}` : `${arrayIndex + 1}`}
      </p>
    </div>
  );
};

export default CardCounter;
