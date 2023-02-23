import React, { ReactNode } from 'react';
/**Components**/
import SectionWithImages from '../_sectionWithImages/SectionWithImages';
/**TS**/
import { IF_ImgStaticData } from '../../../../../utils/TS/typeScriptStaff';

/**
used in: productPages with large tables; layout breakpoint in set to "xxl" size
 * 
*/
/**----------------------------------------------------------**/
const ProductContentLayout_B: React.FunctionComponent<{
  children: ReactNode;
  imageData: IF_ImgStaticData;
}> = ({ children, imageData }) => {
  /**JSX**/
  return (
    <div className="flex flex-col gap-y-28 lg:flex-row-reverse lg:gap-y-0 lg:gap-x-10">
      <div className="w-full h-[40vh] sm:h-[50vh] lg:w-[50%] lg:h-auto lg:min-h-[400px]">
        <SectionWithImages imageData={imageData} />
      </div>
      <div className="flex flex-col w-full lg:w-[50%]">{children}</div>
    </div>
  );
};

export default ProductContentLayout_B;
