import React from 'react';
/**Hardcoded Data**/
const textDefaultStyle =
  'header-link-label text-grey align-middle leading-none';
// const verticalOrnamentDefaultStyle = 'h-[16px] w-[10px] border-l border-corpo';
const boxDefaultStyle = 'h-[10px] aspect-square bg-corpo';
/**TS**/
interface Props {
  text?: string;
  containerStyle?: string;
  textStyle?: string;
  inlineTextStyle?: {};
  boxStyle?: string;
  // verticalOrnamentStyle?: string;
  hasVerticalOrnament?: boolean;
  hasHorizontalOrnament?: boolean;
  hasBox?: boolean;
}
/**-----------------------------------------------------**/
const SmallPseudoHeader: React.FunctionComponent<Props> = ({
  text,
  containerStyle,
  textStyle,
  inlineTextStyle,
  boxStyle,
  // verticalOrnamentStyle,
  hasVerticalOrnament = true,
  hasHorizontalOrnament = false,
  hasBox = false,
}) => {
  return (
    <h2
      role="heading"
      className={`${
        containerStyle
          ? containerStyle
          : 'relative flex items-center disable-soft'
      }  ${hasBox ? 'gap-4 w-fit' : 'gap-0 w-fit'} `}
    >
      {hasHorizontalOrnament && (
        <div className="absolute bottom-0 h-[1px] w-full border-b border-corpo" />
      )}
      {hasHorizontalOrnament && (
        <div className="absolute top-0 h-[1px] w-full border-b border-corpo" />
      )}
      {hasBox && <div className={boxStyle ? boxStyle : boxDefaultStyle} />}
      <p
        className={`${textStyle ? textStyle : textDefaultStyle} ${
          hasVerticalOrnament ? 'border-l-[2px] border-corpo pl-3' : ''
        } `}
        style={inlineTextStyle}
      >
        {text}
      </p>
    </h2>
  );
};

export default SmallPseudoHeader;
