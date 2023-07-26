import React from 'react';
/** */
import { AnimatePresence, motion } from 'framer-motion';
import { opacityScaleYVariants } from '../../../../utils/framerMotion/framerMotionUtils';
import ArrowLongRightIcon from '../../../SVG/icons/ArrowLongRightIcon';
/**HardCoded Staff*/
const containerDefaultStyle =
  'flex items-center w-fit max-w-[750px] h-[72px] lg:h-[60px] disable-soft origin-left group gap-x-4';
const textDefaultStyle = `text-grey p-medium group-hover:text-light ease-in duration-[0.4s] delay-[0.1s]`;

/**TS**/
interface Props {
  children?: React.ReactNode;
  uniqueKey: number | string;
  label: string;
  customeVariants?: {};
  containerStyle?: string;
  textStyle?: string;
  hasIcon?: boolean;
  iconStyle?: string;
}

/*
used in: various types of links
*/
/**---------------------------**/
const AnimatedLabel = ({
  children,
  uniqueKey,
  label,
  customeVariants,
  containerStyle,
  textStyle,
  hasIcon = false,
  iconStyle,
}: Props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={containerStyle ? containerStyle : containerDefaultStyle}
        key={uniqueKey}
        variants={customeVariants ? customeVariants : opacityScaleYVariants}
        initial="from"
        animate="to"
        exit="exit"
      >
        <motion.span className={textStyle ? textStyle : textDefaultStyle}>
          {label}
        </motion.span>
        {children}
        {hasIcon && (
          <ArrowLongRightIcon
            containerStyle={
              iconStyle
                ? iconStyle
                : 'fc h-6 w-6 min-w-6 min-h-6 aspect-square stroke-greyShade1 group-hover:stroke-light group-hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center flex-shrink-0'
            }
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedLabel;
