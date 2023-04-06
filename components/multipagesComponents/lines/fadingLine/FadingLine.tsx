import React from 'react';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
/**TS**/
type Props = {
  containerStyle?: string;
  gradientTo?: string;
  fromColor?: string;
};
/**-------------------------**/
const FadingLine: React.FC<Props> = ({
  containerStyle,
  gradientTo,
  fromColor,
}) => {
  /**Switch statement*/
  const gradientDirection = () => {
    switch (gradientTo) {
      case 'toRight':
        return 'bg-gradient-to-r';
      case 'toLeft':
        return 'bg-gradient-to-l';
      case 'toTop':
        return 'bg-gradient-to-t';
      case 'toBottom':
        return 'bg-gradient-to-b';
      default:
        return 'bg-gradient-to-r';
    }
  };
  /**JSX*/
  return (
    <motion.div
      className={`${
        containerStyle ? containerStyle : 'w-full h-[1px]'
      } ${gradientDirection()} ${
        fromColor ? fromColor : 'from-light'
      }  via-greyShade2 to-transparent `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1, delay: 0.05 } }}
    />
  );
};

export default FadingLine;
