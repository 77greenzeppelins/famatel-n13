import React from 'react';
/**Components**/
import H1AnimatedPresence from '../../../_basicComponents/componentH1/H1AnimatedPresence';

/**--------------------------------------**/
const CategoryPageHeader: React.FunctionComponent<{
  categoryIndex: number;
  categoryName: string;
}> = ({ categoryIndex, categoryName }) => {
  /**JSX**/
  return (
    <div>
      <H1AnimatedPresence uniqueKey={categoryIndex} text={categoryName} />
    </div>
  );
};

export default CategoryPageHeader;
