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
    <div className="flex flex-col gap-y-10 xs:gap-y-20 sm:gap-y-24 xxl:flex-row-reverse xxl:gap-x-10">
      <div className="flex xxl:justify-end w-full sm:min-h-[60vh] xxl:w-[45%] xxxl:w-[50%] xxl:h-auto xxl:min-h-[400px] pt-9">
        <div className="w-full xxl:max-w-[750px]">
          <SectionWithImages imageData={imageData} />
        </div>
      </div>
      <div className="flex w-full h-full xxl:w-[55%] xxxl:w-[50%]">
        {children}
      </div>
    </div>
  );
};

export default ProductContentLayout_A;
