import React, { useRef } from 'react';
/**ReactAria Staff*/
import { FocusRing, useButton } from 'react-aria';
/**FramerMotion Staff*/
import { motion, useAnimation } from 'framer-motion';
/**BasicData*/
//___<a> style, optimised for "iconStyle"
const buttonDefaultStyle =
  // 'fc h-[70%] aspect-square bg-greyShade1 select-none touch-none focus:outline-none';
  'fc h-[70%] aspect-square bg-greyShade1 focus:outline-none';

/**----------------------------------------------------------------------------------**/
const AriaIconButton = ({ children, ...props }) => {
  /**Referencea*/
  const ref = useRef();
  /**FramerMotion Section*/
  const controls = useAnimation();

  /**React-aria Section*/
  const { buttonProps } = useButton(
    {
      onPressStart: () => {
        controls.stop();
        controls.set({ ...props.controlsSet }); //light
      },
      onPressEnd: () => {
        controls.start({ ...props.controlsStart });
      },
      onPress: () => {
        if (props.specialOnClickHandler) {
          props.specialOnClickHandler();
        }
        props.onPress();
      },
    },
    ref
  );

  // console.log('AriaIconButton / buttonProps:', buttonProps);
  // console.log('AriaIconButton / props:', props);

  /**JSX*/
  return (
    <FocusRing focusRingClass="ring ring-offset-2 ring-offset-black">
      <motion.button
        aria-label={props.ariaLabel}
        animate={controls}
        {...buttonProps}
        style={{
          WebkitTapHighlightColor: 'transparent',
        }}
        className={`${
          props.buttonStyle ? props.buttonStyle : buttonDefaultStyle
        } pointer-events-auto disabled`}
      >
        {children}
        {/* {childType ? children : createLabel(isPressed)} */}
      </motion.button>
    </FocusRing>
  );
};
export default AriaIconButton;
