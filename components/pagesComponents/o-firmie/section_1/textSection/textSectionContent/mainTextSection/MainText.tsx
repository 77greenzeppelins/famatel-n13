import React from 'react';
import H1AnimatedPresence from '../../../../../../_basicComponents/componentH1/H1AnimatedPresence';
/**HardCoded Data**/

const arrOfLabels = ['Elektryka', 'przemysłowa'];

/**---------------------------------------------------------------------**/
const MainText: React.FunctionComponent = () => {
  /**JSX**/
  return (
    <div className="flex flex-col">
      {arrOfLabels.map((label, index) => {
        /**...**/
        return (
          <H1AnimatedPresence
            key={index}
            uniqueKey={index}
            text={label}
            variantH="custome"
            customeStyle="text-light text-left text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] xxl:text-[5rem] font-bold tracking-[2px] leading-tight"
          />
        );
      })}
    </div>
  );
};

export default MainText;

// const labels = [{ l1: 'Elektryka', l2: 'przemysłowa' }];
//const labelsArray = Object.values(labels[slideNumber]);
//  {
//    Array.from({ length: Object.keys(labels[0]).length }).map((_, index) => {
//      /**...**/
//      const labelsArray = Object.values(labels[slideNumber]);
//      return (
//        <H1AnimatedPresence
//          key={index}
//          uniqueKey={slideNumber}
//          // text={labelsArray[index]}
//          text={'Elektryka przemysłowa'}
//        />
//      );
//    });
//  }
