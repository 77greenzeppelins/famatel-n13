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
    <div className="flex flex-col gap-y-10 xs:gap-y-20 sm:gap-y-24 lg:flex-row-reverse lg:gap-x-14">
      <div className="flex xxl:justify-end w-full sm:h-[60vh] lg:w-[50%] lg:h-auto lg:min-h-[400px] pt-9">
        <div className="w-full lg:max-w-[650px] ">
          <SectionWithImages imageData={imageData} />
        </div>
      </div>
      <div className="flex w-full h-full lg:w-[50%]">{children}</div>
    </div>
  );
};

export default ProductContentLayout_B;
