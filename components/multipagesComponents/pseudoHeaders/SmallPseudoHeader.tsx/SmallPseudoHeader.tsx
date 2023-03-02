import React from 'react';
/**Hardcoded Data**/
const textDefaultStyle =
  'header-link-label text-grey align-middle leading-none';
// const verticalOrnamentDefaultStyle = 'h-[16px] w-[10px] border-l border-corpo';
const boxDefaultStyle = 'h-[10px] md:h-[14px] aspect-square bg-corpo';

/**-----------------------------------------------------**/
const SmallPseudoHeader: React.FunctionComponent<{
  text?: string;
  containerStyle?: string;
  textStyle?: string;
  boxStyle?: string;
  // verticalOrnamentStyle?: string;
  hasVerticalOrnament?: boolean;
  hasHorizontalOrnament?: boolean;
  hasBox?: boolean;
}> = ({
  text,
  containerStyle,
  textStyle,
  boxStyle,
  // verticalOrnamentStyle,
  hasVerticalOrnament = true,
  hasHorizontalOrnament = false,
  hasBox = false,
}) => {
  return (
    <div
      className={`${
        containerStyle ? containerStyle : ''
      } relative flex items-center disable-soft ${hasBox ? 'gap-4' : 'gap-0'} `}
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
          hasVerticalOrnament ? 'border-l border-corpo pl-4' : ''
        } `}
      >
        {text}
      </p>
    </div>
  );
};

export default SmallPseudoHeader;
