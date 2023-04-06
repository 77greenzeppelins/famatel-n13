import React from 'react';
/**Components**/
import SmallPseudoHeader from '../SmallPseudoHeader.tsx/SmallPseudoHeader';
/**FramerMotion staff**/
import { motion } from 'framer-motion';
import FadingLine from '../../lines/fadingLine/FadingLine';
/**TS**/
interface Props {
  label: string;
  mainContainerStyle?: string;
  //___options for <SmallPseudoHeader>
  hasBox?: boolean;
  hasVerticalOrnament?: boolean;
  textStyle?: string;
}

/**---------------------------**/
const FadingHeader: React.FC<Props> = ({
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
          : 'w-full flex flex-col gap-[10px] '
      }
    >
      <SmallPseudoHeader
        text={label}
        textStyle={textStyle}
        hasBox={hasBox}
        hasVerticalOrnament={hasVerticalOrnament}
      />
      <FadingLine />
    </div>
  );
};

export default FadingHeader;

// textStyle={
//   textStyle
//     ? textStyle
//     : 'text-grey text-1xl tracking-[1px] lg:tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025'
// }
