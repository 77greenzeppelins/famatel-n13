import React from 'react';
/**Components**/
import H1AnimatedPresence from '../../../_basicComponents/componentH1/H1AnimatedPresence';

/**--------------------------------------**/
const SubCategoryPageHeader: React.FunctionComponent<{
  subCategoryIndex: number;
  fullName: string;
}> = ({ subCategoryIndex, fullName }) => {
  /**JSX**/
  return (
    <div>
      <H1AnimatedPresence
        uniqueKey={subCategoryIndex}
        text={fullName}
        variantH="text-light text-left 
    text-[1.5rem] lg:text-[2rem] xxl:text-[3rem] tracking-widest"
      />
    </div>
  );
};

export default SubCategoryPageHeader;
