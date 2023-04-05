import React, { useState } from 'react';
/**Components**/
import ChevronDownIcon from '../../../../../SVG/icons/ChevronDownIcon';
import ListIcon from '../../../../../SVG/icons/ListIcon';
/**Aria Staff**/
import { FocusRing } from 'react-aria';
/**Framer Motion Staff*/
import { motion } from 'framer-motion';
/**Basic Data**/
import { corpoColors } from '../../../../../../data/_data';

/**---------------------------------------------------**/
const CatalogOpener: React.FunctionComponent<{
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setHoverState: React.Dispatch<
    React.SetStateAction<{
      isHovered: boolean;
      label: string;
    }>
  >;
  label: string;
}> = ({ isClicked, setIsClicked, setHoverState, label }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  /**onClick Handler*/
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    //___disable button
    setIsDisabled(true);
    //___do what you need to do...
    const target = event.target as HTMLButtonElement; //TS requirements
    target.id = label;
    setIsClicked(prev => !prev);
    setHoverState(prevState => ({
      ...prevState,
      isHovered: !prevState.isHovered,
      label: target.id,
    }));
    //___set timer...
    const timer = setTimeout(() => {
      setIsDisabled(false);
    }, 1000); // disable button for 1 seconds
    //___clear timer...
    return () => {
      clearTimeout(timer);
    };
  };

  /**JSX**/
  return (
    <div className="fc h-full">
      <div className="hidden  lg:fc">
        <FocusRing focusRingClass="ring ring-offset-2 ring-offset-black ">
          <motion.button
            disabled={isDisabled}
            aria-label={'przycisk'}
            onClick={onClickHandler}
            className=" fc origin-center w-6 focus:outline-none disable pointer-events-auto"
            animate={{
              rotateX: isClicked ? 180 : 0,
              transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
            }}
          >
            <ChevronDownIcon
              strokeColor={corpoColors.grey}
              className="w-4 h-4"
            />
          </motion.button>
        </FocusRing>
      </div>
      <div className=" lg:hidden w-6 h-6">
        <FocusRing focusRingClass="ring ring-offset-2 ring-offset-black ">
          <motion.button
            disabled={isDisabled}
            aria-label={'przycisk'}
            onClick={onClickHandler}
            className=" fc origin-center w-6 focus:outline-none disable pointer-events-auto"
            animate={{
              rotateY: isClicked ? 180 : 0,
              transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' },
            }}
          >
            <ListIcon
              pathStyle={`${
                isClicked ? 'stroke-corpo ' : 'stroke-light'
              } transition-all`}
            />
          </motion.button>
        </FocusRing>
      </div>
    </div>
  );
};

export default CatalogOpener;
