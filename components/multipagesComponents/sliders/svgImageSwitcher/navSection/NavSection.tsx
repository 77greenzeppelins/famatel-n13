import React from 'react';
/**Components* */
import ChevronLeftIcon from '../../../../SVG/icons/ChevronLeftIcon';
import ChevronRightIcon from '../../../../SVG/icons/ChevronRightIcon';

/**Basic Data*/
import { corpoColors } from '../../../../../data/_data';

const range = [0, 1];
/*
Comments:
1__ it works as a switcher
**********************************************************************************/
const NavSection: React.FunctionComponent<{
  setBasicState: React.Dispatch<React.SetStateAction<number>>;
  modelNumb?: string;
}> = ({ setBasicState, modelNumb }) => {
  /*
  JSX
  */
  return (
    <div className="relative flex items-center justify-between h-full w-full bg-greyShade2">
      <div
        className={`fc h-full w-10`}
        onClick={() => {
          // console.log('..................');
          setBasicState(prev => Math.max(prev - 1, range[0]));
        }}
      >
        <ChevronLeftIcon className={'w-6 h-6'} strokeColor={corpoColors.dark} />
      </div>
      <div>
        <p className="text-light p-small">{`MODEL: ${modelNumb}`}</p>
      </div>
      <div
        className={`fc h-full w-10`}
        onClick={() => {
          setBasicState(prev => Math.min(prev + 1, range[1]));
        }}
      >
        <ChevronRightIcon
          className={'w-6 h-6'}
          strokeColor={corpoColors.dark}
        />
      </div>
    </div>
  );
};

export default NavSection;
