import React, { ReactNode } from 'react';
/**React Aria Staff*/
import { FocusRing } from 'react-aria';
/**Framer Motion Staff*/
import { motion } from 'framer-motion';

/**TS* */
export interface IF_AriaMotionButton {
  ariaLabel: string;
  whileHover?: {};
  transition?: {};
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  fake?: string;
}

/**-------------------------------------------------------------------------------**/
const AriaMotionButton: React.FunctionComponent<IF_AriaMotionButton> = ({
  ariaLabel,
  whileHover,
  transition,
  onClick,
  children,
}) => {
  return (
    <FocusRing focusRingClass="ring ring-offset-2 ring-offset-black">
      <motion.button
        aria-label={ariaLabel}
        className="w-full h-full focus:outline-none disable"
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
