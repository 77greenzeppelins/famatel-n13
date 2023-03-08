import React from 'react';
/**Components**/
import ArrowButton from '../../../../_basicComponents/buttons/arrowButton/ArrowButton';
import PseudoButton from '../pseudoButton/PseudoButton';
import { MapPinIcon } from '@heroicons/react/24/solid';

/**-----------------------------**/
const RoadPrompt: React.FunctionComponent<{
  setRoadPrompt: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setRoadPrompt }) => {
  /**JSX**/
  return (
    <ArrowButton onClickHandler={() => setRoadPrompt(prev => !prev)}>
      {/* <PseudoButton> */}
      <MapPinIcon className="h-[24px] w-[30px] text-grey" />
      {/* </PseudoButton> */}
    </ArrowButton>
  );
};

export default RoadPrompt;
