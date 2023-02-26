import React from 'react';
import H1AnimatedPresence from '../../../../../../_basicComponents/componentH1/H1AnimatedPresence';
/**HardCoded Data**/
const labels = [{ l1: 'Elektryka', l2: 'przemysłowa' }];

/**---------------------------------------------------------------------**/
const MainText: React.FunctionComponent<{ slideNumber: number }> = ({
  slideNumber,
}) => {
  /**....**/
  // console.log(Object.keys(labels[0]).length);

  /**JSX**/
  return (
    <div className="flex flex-col">
      {Array.from({ length: Object.keys(labels[0]).length }).map((_, index) => {
        /**...**/
        const labelsArray = Object.values(labels[slideNumber]);
        return (
          <H1AnimatedPresence
            key={index}
            uniqueKey={slideNumber}
            text={labelsArray[index]}
          />
        );
      })}
    </div>
  );
};

export default MainText;
