import React, { useState } from 'react';
/**Components**/
import MagGlassIcon from '../../../../../SVG/icons/MagGlassIcon';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
/**HardCodedStaff*/
const isDisabledDuration = 1000;

/**---------------------------------**/
const ProductBrowserButton = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  /**onClick Handler*/
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    //___disable button
    setIsDisabled(true);
    //___do what you need to do...
    // const target = event.target as HTMLButtonElement; //TS requirements
    // target.id = label;
    setIsClicked(prev => !prev);
    // setHoverState(prevState => ({
    //   ...prevState,
    //   isHovered: !prevState.isHovered,
    //   label: target.id,
    // }));
    //___set timer...
    const timer = setTimeout(() => {
      setIsDisabled(false);
    }, isDisabledDuration); // disable button for 1 seconds
    //___clear timer...
    return () => {
      clearTimeout(timer);
    };
  };
  return (
    <div className="w-6 h-6">
      <motion.button
        disabled={isDisabled}
        aria-label={'przycisk'}
        aria-expanded={isClicked ? 'true' : 'false'}
        onClick={onClickHandler}
        className=" fc origin-center w-6 focus:outline-none disable pointer-events-auto focus-visible:ring focus-visible:ring-offset-2 ring-offset-dark focus-visible:ring-corpo"
        //___focus-visible:ring-2 focus-visible:ring-blue-500
        //___focus-visible:ring focus-visible:ring-offset-2 ring-offset-dark
        animate={{
          rotateY: isClicked ? 180 : 0,
          transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
        }}
      >
        <MagGlassIcon
          pathStyle={`${
            isClicked ? 'stroke-corpo ' : 'stroke-light'
          } transition-all`}
        />
      </motion.button>
    </div>
  );
};

export default ProductBrowserButton;
