import React, { useState } from 'react';
/**React Aria Staff*/
import { FocusRing } from 'react-aria';
/**Framer Motion Staff*/
import { motion } from 'framer-motion';

/**---------------------------------------------------**/
const ArrowButton: React.FunctionComponent<{
  onClickHandler: () => void;
  children: import('react').ReactNode;
  ariaLabel?: string;
  buttonStyle?: string;
}> = ({ children, ariaLabel, buttonStyle, onClickHandler }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
    // console.log('...clicked....');
    onClickHandler();
    setTimeout(() => {
      setIsDisabled(false);
    }, 1000); // disable button for 5 seconds
  };
  return (
    <FocusRing focusRingClass="ring ring-offset-2 ring-offset-black ">
      <button
        aria-label={ariaLabel ? ariaLabel : 'przycisk'}
        onClick={handleClick}
        disabled={isDisabled}
        className={`${
          buttonStyle
            ? buttonStyle
            : 'relative fc w-full h-full focus:outline-none disable pointer-events-auto group'
        } `}
      >
        {children}
      </button>
    </FocusRing>
  );
};

export default ArrowButton;
