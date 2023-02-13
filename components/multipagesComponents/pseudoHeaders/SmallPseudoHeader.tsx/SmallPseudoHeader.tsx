import React from 'react';
/**Hardcoded Data**/
const containerDefaultStyle = '';
const textDefaultStyle =
  'header-link-label text-grey align-middle leading-none';
const verticalOrnamentDefaultStyle = 'h-[16px] w-[10px] border-l border-corpo';
const boxDefaultStyle = 'h-[16px] aspect-square bg-corpo';

/**-----------------------------------------------------**/
const SmallPseudoHeader: React.FunctionComponent<{
  text: string;
  containerStyle?: string;
  textStyle?: string;
  verticalOrnamentStyle?: string;
  hasVerticalOrnament?: boolean;
  hasHorizontalOrnament?: boolean;
  hasBox?: boolean;
}> = ({
  text,
  containerStyle,
  textStyle,
  verticalOrnamentStyle,
  hasVerticalOrnament = true,
  hasHorizontalOrnament = false,
  hasBox = false,
}) => {
  return (
    <div
      className={`${
        containerStyle ? containerStyle : containerDefaultStyle
      } relative flex items-center disable-soft ${hasBox ? 'gap-4' : 'gap-0'} `}
    >
      {hasVerticalOrnament && (
        <div
          className={
            verticalOrnamentStyle
              ? verticalOrnamentStyle
              : verticalOrnamentDefaultStyle
          }
        />
      )}
      {hasHorizontalOrnament && (
        <div className="absolute bottom-0 h-[1px] w-full border-b border-corpo" />
      )}
      {hasHorizontalOrnament && (
        <div className="absolute top-0 h-[1px] w-full border-b border-corpo" />
      )}
      {hasBox && <div className={boxDefaultStyle} />}
      <p className={textStyle ? textStyle : textDefaultStyle}>{text}</p>
    </div>
  );
};

export default SmallPseudoHeader;
