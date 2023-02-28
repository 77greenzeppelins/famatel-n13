import React from 'react';
import ChevronLeftIcon from '../../../../SVG/icons/ChevronLeftIcon';
import ChevronRightIcon from '../../../../SVG/icons/ChevronRightIcon';
import ArrowButton from '../../../../_basicComponents/buttons/arrowButton/ArrowButton';

const NavSection: React.FunctionComponent<{
  //   setCategoryIndex;
  categoryIndex: number;
  setCategoryIndex: React.Dispatch<React.SetStateAction<number>>;
  categoriesNumber: number;
}> = ({ categoryIndex, setCategoryIndex, categoriesNumber }) => {
  /**OnClick Handlers*/
  const nextCategory = () => {
    setCategoryIndex(Math.min(categoryIndex + 1, categoriesNumber - 1));
  };
  const prevCategory = () => {
    setCategoryIndex(Math.max(categoryIndex - 1, 0));
  };
  /**JSX**/
  return (
    <div className="flex justify-between flex-col lg:flex-row-reverse h-auto w-10 lg:w-full lg:h-10 xl:max-w-[300px]">
      {/* <button onClick={nextCategory}>
        <ChevronRightIcon className={`w-6 h-6`} />
      </button> */}
      {/* <button onClick={prevCategory}>
        <ChevronLeftIcon className={`w-6 h-6`} />
      </button> */}
      <ArrowButton
        buttonStyle="focus:outline-none disable pointer-events-auto"
        onClickHandler={nextCategory}
      >
        <ChevronRightIcon className={`w-6 h-6`} />
      </ArrowButton>
      <ArrowButton
        buttonStyle="focus:outline-none disable pointer-events-auto"
        onClickHandler={prevCategory}
      >
        <ChevronLeftIcon className={`w-6 h-6`} />
      </ArrowButton>
    </div>
  );
};

export default NavSection;
