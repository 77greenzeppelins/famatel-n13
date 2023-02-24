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
const ProductContentLayout_A: React.FunctionComponent<{
  children: ReactNode;
  imageData: IF_ImgStaticData;
}> = ({ children, imageData }) => {
  /**JSX**/
  return (
    <div className="flex flex-col gap-y-20 xxl:flex-row-reverse xxl:gap-x-10">
      <div className="w-full h-[40vh] sm:h-[70vh] xxl:w-[50%] xxl:h-auto xxl:min-h-[400px]">
        <SectionWithImages imageData={imageData} />
      </div>
      <div className="flex w-full xxl:w-[50%]">{children}</div>
    </div>
  );
};

export default ProductContentLayout_A;
