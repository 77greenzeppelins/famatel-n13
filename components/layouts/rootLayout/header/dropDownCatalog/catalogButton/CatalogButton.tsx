import React, { useState } from 'react';
/**GlobalState Staff**/
import { useSnapshot } from 'valtio';
import { globalState } from '../../../../../../globalState/globalState';
/**Components**/
import ListIcon from '../../../../../SVG/icons/ListIcon';
/**FramerMotionStaff**/
import { motion } from 'framer-motion';

/**HardCodedStaff*/
const isDisabledDuration = 1000;

useSnapshot;
/**--------------------------**/
const CatalogButton = () => {
  /**GlobalState Section**/
  const snap = useSnapshot(globalState);
  /**LocalState**/
  const [isDisabled, setIsDisabled] = useState(false);
  /**onClick Handler*/
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    //___disable button
    setIsDisabled(true);
    //___do what you need to do...
    globalState.isCatalogOpened = !snap.isCatalogOpened;
    //___set timer...
    const timer = setTimeout(() => {
      setIsDisabled(false);
    }, isDisabledDuration); // disable button for 1 seconds
    //___clear timer...
    return () => {
      clearTimeout(timer);
    };
  };

  /**JSX**/
  return (
    <div className="w-6 h-6">
      <motion.button
        disabled={isDisabled}
        aria-label={'przycisk'}
        aria-expanded={snap.isCatalogOpened ? 'true' : 'false'}
        onClick={onClickHandler}
        className=" fc origin-center w-6 focus:outline-none disable pointer-events-auto focus-visible:ring focus-visible:ring-offset-2 ring-offset-dark focus-visible:ring-corpo"
        animate={{
          rotateY: snap.isCatalogOpened ? 180 : 0,
          transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
        }}
      >
        <ListIcon
          pathStyle={`${
            snap.isCatalogOpened ? 'stroke-corpo ' : 'stroke-dark'
          } transition-all`}
          strokeWidth={1.5}
        />
      </motion.button>
    </div>
  );
};

export default CatalogButton;
