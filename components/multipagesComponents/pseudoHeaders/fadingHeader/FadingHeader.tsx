import React from 'react';
/**Components**/
import SmallPseudoHeader from '../SmallPseudoHeader.tsx/SmallPseudoHeader';
/**FramerMotion staff**/
import { motion } from 'framer-motion';

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
          : 'w-full flex flex-col gap-[10px] '
      }
    >
      <SmallPseudoHeader
        text={label}
        textStyle={textStyle}
        hasBox={hasBox}
        hasVerticalOrnament={hasVerticalOrnament}
      />
      <motion.div
        className="w-full h-[1px] bg-gradient-to-r from-light via-greyShade2 to-transparent "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.1, delay: 0.05 } }}
      />
    </div>
  );
};

export default FadingHeader;

// textStyle={
//   textStyle
//     ? textStyle
//     : 'text-grey text-1xl tracking-[1px] lg:tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025'
// }
