import React from 'react';
/**Components* */
import ChevronLeftIcon from '../../../../SVG/icons/ChevronLeftIcon';
import ChevronRightIcon from '../../../../SVG/icons/ChevronRightIcon';

/**Basic Data*/
import { corpoColors } from '../../../../../data/_data';
import ArrowButton from '../../../../_basicComponents/buttons/arrowButton/ArrowButton';
import NamesDisplayer from '../../../counters/namesDisplayer/NamesDisplayer';
import NumbersDisplayer from '../../../counters/numbersDisplayer/NumbersDisplayer';

const range = [0, 1];
/*
Comments:
1__ it works as a switcher
**********************************************************************************/
const NavSection: React.FunctionComponent<{
  basicState: number;
  setBasicState: React.Dispatch<React.SetStateAction<number>>;
  modelName?: string;
}> = ({ basicState, setBasicState, modelName }) => {
  /**Basic Data**/
  const modelsNames = [modelName, `${modelName} / tech`];
  const min = 0;
  const max = modelsNames.length - 1;
  /**OnClick Handlers*/
  const nextCategory = () => {
    setBasicState(Math.min(basicState + 1, max));
  };
  const prevCategory = () => {
    setBasicState(Math.max(basicState - 1, min));
  };
  /*
  JSX
  */
  return (
    <div className="relative flex items-center justify-between w-full h-full ">
      <ArrowButton
        buttonStyle="flex items-center justify-start  focus:outline-none disable"
        //___border border-greyShade2
        onClickHandler={prevCategory}
      >
        <ChevronLeftIcon
          className={`w-6 h-6`}
          strokeColor={corpoColors.grey}
          scale={basicState !== min ? 1.2 : 1}
          strokeColorWhileHover={
            basicState !== min ? corpoColors.orange : corpoColors.grey
          }
        />
      </ArrowButton>

      <div className="flex-col fc gap-y-2 ">
        <NamesDisplayer
          names={modelsNames}
          index={basicState}
          containerStyle={'flex justify-center'}
          // labelName={'Model'}
        />
        <NumbersDisplayer
          currentCategoryIndex={basicState}
          digitStyle="header-link-label text-grey"
          digitContainerStyle="fc w-[20px]"
          countedStaff={max + 1}
        />
      </div>

      <ArrowButton
        buttonStyle="flex items-center justify-start focus:outline-none disable pointer-events-auto "
        onClickHandler={nextCategory}
      >
        <ChevronRightIcon
          className={`w-6 h-6`}
          strokeColor={corpoColors.grey}
          scale={basicState !== max ? 1.2 : 1}
          strokeColorWhileHover={
            basicState !== max ? corpoColors.orange : corpoColors.grey
          }
        />
      </ArrowButton>
    </div>
  );
};

export default NavSection;
