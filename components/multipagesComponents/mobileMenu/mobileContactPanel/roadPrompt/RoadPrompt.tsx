import React, { useState } from 'react';
/** */
import { MapPinIcon } from '@heroicons/react/24/solid';
/**Framer Motion Staff */
import { motion } from 'framer-motion';
/**Basic Data**/
import { corpoColors } from '../../../../../data/_data';
import ArrowButton from '../../../../_basicComponents/buttons/arrowButton/ArrowButton';
import { FocusRing } from 'react-aria';

/**-----------------------------**/
const RoadPrompt: React.FunctionComponent<{
  setRoadPrompt: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setRoadPrompt }) => {
  /**Local state**/
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    //___disable button
    setIsDisabled(true);
    //___do what you need to do...
    setRoadPrompt(prev => !prev);
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
    <ArrowButton onClickHandler={() => setRoadPrompt(prev => !prev)}>
      <motion.div
        className="fc aspect-square h-full border"
        whileTap={{ scale: 0.95, borderColor: corpoColors.orange }}
      >
        <MapPinIcon className="h-[40px] w-[40px] text-grey" />
      </motion.div>
    </ArrowButton>
    // <motion.div
    //   className="fc aspect-square h-full border"
    //   whileTap={{ scale: 0.95, borderColor: corpoColors.orange }}
    // >
    //   <ArrowButton onClickHandler={() => setRoadPrompt(prev => !prev)}>
    //     <MapPinIcon className="h-[40px] w-[40px] text-grey" />
    //   </ArrowButton>
    // </motion.div>
  );
};

export default RoadPrompt;

//
