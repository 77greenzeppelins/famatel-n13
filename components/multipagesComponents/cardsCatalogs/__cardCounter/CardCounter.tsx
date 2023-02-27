import React from 'react';
/**Hardcoded Data**/
const containerDefaultStyle =
  'fc border-r border-light w-full h-full  p-[0.25rem] opacity-70 group-hover:opacity-100 ease-in duration-300';
const textDefaultStyle =
  'text-light text-center text-[0.625rem] sm:text-[0.75rem] xxxl:text-[1.125rem] tracking-[0.09rem] leading-normal ';
/**-------------------------------------------------------------------------------**/
const CardCounter: React.FunctionComponent<{
  arrayIndex: number;
  textStyle?: string;
  containerStyle?: string;
}> = ({ arrayIndex, containerStyle, textStyle }) => {
  /**JSX**/
  return (
    <div
      data-component="CardCounter__container"
      className={containerStyle ? containerStyle : containerDefaultStyle}
    >
      <p className={textStyle ? textStyle : textDefaultStyle}>
        {arrayIndex + 1 < 10 ? `0${arrayIndex + 1}` : `${arrayIndex + 1}`}
      </p>
    </div>
  );
};

export default CardCounter;
