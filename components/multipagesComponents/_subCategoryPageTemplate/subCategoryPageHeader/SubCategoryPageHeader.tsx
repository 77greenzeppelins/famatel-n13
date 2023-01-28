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
        variantH="custome"
        customeStyle="text-light text-left text-[2rem] xs:text-[2.5rem] xxl:text-[3rem] tracking-widest"
      />
    </div>
  );
};

export default SubCategoryPageHeader;
