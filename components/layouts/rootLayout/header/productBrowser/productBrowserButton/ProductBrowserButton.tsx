import React, { useState } from 'react';
/**GlobalState Staff**/
import { useSnapshot } from 'valtio';
import { globalState } from '../../../../../../globalState/globalState';
/**Components**/
import MagGlassIcon from '../../../../../SVG/icons/MagGlassIcon';
/**FramerMotion Staff*/
import { motion } from 'framer-motion';
/**HardCodedStaff*/
const isDisabledDuration = 1000;

/**---------------------------------**/
const ProductBrowserButton = () => {
  /**GlobalState Section**/
  const snap = useSnapshot(globalState);
  /**LocalState**/
  const [isDisabled, setIsDisabled] = useState(false);
  /**onClick Handler*/
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    //___disable button
    setIsDisabled(true);
    //___do what you need to do...
    globalState.isProductBrowserOpened = !snap.isProductBrowserOpened;

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
        aria-expanded={snap.isProductBrowserOpened ? 'true' : 'false'}
        onClick={onClickHandler}
        className=" fc origin-center w-6 focus:outline-none disable pointer-events-auto focus-visible:ring focus-visible:ring-offset-2 ring-offset-dark focus-visible:ring-corpo"
        //___focus-visible:ring-2 focus-visible:ring-blue-500
        //___focus-visible:ring focus-visible:ring-offset-2 ring-offset-dark
        animate={{
          rotateY: snap.isProductBrowserOpened ? 180 : 0,
          transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
        }}
      >
        <MagGlassIcon
          pathStyle={`${
            snap.isProductBrowserOpened ? 'stroke-corpo ' : 'stroke-light'
          } transition-all`}
        />
      </motion.button>
    </div>
  );
};

export default ProductBrowserButton;
