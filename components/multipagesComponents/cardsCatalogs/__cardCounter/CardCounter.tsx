import React from 'react';
/**Hardcoded Data**/
const containerDefaultStyle =
  'fc xs:border-r border-greyShade2 w-full max-w-[30px] md:max-w-[50px] h-full p-[0.25rem]  group-hover:border-grey ease-in duration-300';
const textDefaultStyle =
  'text-grey text-center text-[0.625rem] sm:text-[0.75rem] xxxl:text-[1.125rem] tracking-[0.09rem] leading-normal group-hover:text-light ease-in duration-300';
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
