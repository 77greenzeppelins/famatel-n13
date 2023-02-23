import React from 'react';
/**Components**/
import BasicCardGraphicSection from './graphicSection/BasicCardGraphicSection';
/**Hook Staff**/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
import { IF_ImgStaticData } from '../../../../../utils/TS/typeScriptStaff';
/**HardCoded Data
 * used in <ProduktyDropDownMenu>
 **/
const minHeight = 500;

/**------------------------------------------------**/
const BasicCardMainSection: React.FunctionComponent<{
  label: string;
  imageData: IF_ImgStaticData;
  heightMattersCondition?: boolean;
}> = ({ label, imageData, heightMattersCondition }) => {
  /**Hook Section; if not enough hight just get rid of images**/
  const { height } = useWindowSize({ screensNumber: 1 });
  const condition = height < minHeight && heightMattersCondition;

  /**JSX**/
  return (
    <div className="w-full h-full flex flex-col">
      {condition ? null : <BasicCardGraphicSection imageData={imageData} />}
      <div
        data-layout="TextSection__container"
        className={`fc ${condition ? 'h-full' : 'h-[45%]'}  w-full p-1 `}
      >
        <p className="header-link-label text-grey text-center group-hover:text-light ease-in duration-300 ">
          {label}
        </p>
      </div>
    </div>
  );
};

export default BasicCardMainSection;
