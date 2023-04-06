import React from 'react';
/**Components**/
import ArrowButton from '../../../../_basicComponents/buttons/arrowButton/ArrowButton';
import PseudoButton from '../pseudoButton/PseudoButton';
import { MapPinIcon } from '@heroicons/react/24/solid';

/**-----------------------------**/
const RoadPrompt: React.FunctionComponent<{
  roadPrompt: boolean;
  setRoadPrompt: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ roadPrompt, setRoadPrompt }) => {
  /**JSX**/
  return (
    <ArrowButton onClickHandler={() => setRoadPrompt(prev => !prev)}>
      <div className="flex flex-col items-center justify-between">
        <MapPinIcon
          className={`h-[24px] w-[30px] ${
            roadPrompt ? 'text-corpo' : 'text-grey'
          } transition-all delay-100 ease-in duration-400`}
        />
        <div className="px-2">
          <p className="p-small text-grey disable-soft">Wskazówki dojazdu</p>
        </div>
      </div>
    </ArrowButton>
  );
};

export default RoadPrompt;
