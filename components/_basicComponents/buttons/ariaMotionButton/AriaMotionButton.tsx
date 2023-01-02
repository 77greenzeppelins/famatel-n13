import React, { ReactNode } from 'react';
/**React Aria Staff*/
import { FocusRing } from 'react-aria';
/**Framer Motion Staff*/
import { motion } from 'framer-motion';

/**TS* */
export interface IF_AriaMotionButton {
  ariaLabel: string;
  whileHover?: {};
  whileTap?: {};
  transition?: {};
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  buttonStyle?: string;
}

/**-------------------------------------------------------------------------------**/
const AriaMotionButton: React.FunctionComponent<IF_AriaMotionButton> = ({
  ariaLabel,
  whileHover,
  whileTap,
  transition,
  onClick,
  children,
  buttonStyle,
}) => {
  return (
    <FocusRing focusRingClass="ring ring-offset-2 ring-offset-black ">
      <motion.button
        aria-label={ariaLabel}
        className={`${
          buttonStyle ? buttonStyle : 'relative fc'
        } w-full h-full focus:outline-none disable pointer-events-auto group`}
        whileTap={whileTap}
        whileHover={whileHover}
        transition={transition}
        onClick={onClick}
      >
        {children}
      </motion.button>
    </FocusRing>
  );
};

export default AriaMotionButton;
