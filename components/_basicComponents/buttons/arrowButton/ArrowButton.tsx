import React, { useState } from 'react';
/**React Aria Staff*/
import { FocusRing } from 'react-aria';

/**-----------------------------------------**/
const ArrowButton: React.FunctionComponent<{
  onClickHandler: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
  buttonStyle?: string;
}> = ({ children, ariaLabel, buttonStyle, onClickHandler }) => {
  /**Local state**/
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    //___disable button
    setIsDisabled(true);
    //___do what you need to do...
    onClickHandler();
    //___set "timer"...
    const timer = setTimeout(() => {
      setIsDisabled(false);
    }, 1000); // disable button for 1 seconds
    //___clean "timer"...
    return () => {
      clearTimeout(timer);
    };
  };
  /**JSX**/
  return (
    <FocusRing focusRingClass="ring ring-offset-2 ring-offset-black ">
      <button
        aria-label={ariaLabel ? ariaLabel : 'przycisk'}
        onClick={handleClick}
        disabled={isDisabled}
        className={`${
          buttonStyle
            ? buttonStyle
            : 'relative fc w-full h-full focus:outline-none disable group'
        } ${isDisabled ? 'pointer-events-none' : 'pointer-events-auto'}`}
      >
        {children}
      </button>
    </FocusRing>
  );
};

export default ArrowButton;
