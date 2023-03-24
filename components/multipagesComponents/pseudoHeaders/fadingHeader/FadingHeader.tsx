import React from 'react';
import SmallPseudoHeader from '../SmallPseudoHeader.tsx/SmallPseudoHeader';

/**---------------------------**/
const FadingHeader: React.FC<{
  label: string;
  mainContainerStyle?: string;
  //___for <SmallPseudoHeader>
  hasBox?: boolean;
  hasVerticalOrnament?: boolean;
  textStyle?: string;
}> = ({
  label,
  mainContainerStyle,
  hasBox,
  hasVerticalOrnament,
  textStyle,
}) => {
  /**JSX**/
  return (
    <div
      className={
        mainContainerStyle
          ? mainContainerStyle
          : 'w-full flex flex-col gap-[4px]'
      }
    >
      <SmallPseudoHeader
        text={label}
        textStyle={
          textStyle
            ? textStyle
            : 'text-grey text-1xl tracking-[1px] lg:tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025'
        }
        hasBox={hasBox}
        hasVerticalOrnament={hasVerticalOrnament}
      />
      <div className="w-full h-[1px] bg-gradient-to-r from-grey via-greyShade2 to-transparent" />
    </div>
  );
};

export default FadingHeader;
