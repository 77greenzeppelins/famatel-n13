import React from 'react';
/**Hardcoded Data**/
const containerDefaultStyle = '';
const textDefaultStyle = 'header-link-label text-grey';
const verticalOrnamentDefaultStyle = 'h-auto w-[10px] border-l border-corpo';

const SmallPseudoHeader: React.FunctionComponent<{
  text: string;
  containerStyle?: string;
  textStyle?: string;
  verticalOrnamentStyle?: string;
  hesVerticalOrnament?: boolean;
  hesHorizontalOrnament?: boolean;
}> = ({
  text,
  containerStyle,
  textStyle,
  verticalOrnamentStyle,
  hesVerticalOrnament = true,
  hesHorizontalOrnament = false,
}) => {
  return (
    <div
      className={`${
        containerStyle ? containerStyle : containerDefaultStyle
      }relative flex disable`}
    >
      {hesVerticalOrnament && (
        <div
          className={
            verticalOrnamentStyle
              ? verticalOrnamentStyle
              : verticalOrnamentDefaultStyle
          }
        />
      )}
      {hesHorizontalOrnament && (
        <div className="absolute bottom-0 h-[1px] w-full border-b border-corpo" />
      )}
      {hesHorizontalOrnament && (
        <div className="absolute top-0 h-[1px] w-full border-b border-corpo" />
      )}
      <p className={textStyle ? textStyle : textDefaultStyle}>{text}</p>
    </div>
  );
};

export default SmallPseudoHeader;
