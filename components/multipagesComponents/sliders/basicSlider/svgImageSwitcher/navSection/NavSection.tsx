import React from 'react';
import { corpoColors } from '../../../../../../data/_data';
import ChevronLeftIcon from '../../../../../SVG/icons/ChevronLeftIcon';
import ChevronRightIcon from '../../../../../SVG/icons/ChevronRightIcon';

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
    <div className="relative flex items-center justify-between h-full w-full bg-light  group">
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
        <p className="text-grey p-small">{`MODEL: ${modelNumb}`}</p>
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

// <div
//   //___header container; cant be "fc"
//   className={`relative py-[0.3rem] px-[0.5rem] flex items-center h-full bg-light`}
// >
//   <div
//     className={`absolute inset-0 bg-greyShade2 opacity-[0.8] group-hover:opacity-[1] duration-300 ease-in delay-100`}
//   />
//   <p
//     className={`${
//       headerLabelStyle ? headerLabelStyle : globHeaderLabelStyle
//     } relative`}
//   >
//     <span> {label}</span>
//   </p>
// </div>;
