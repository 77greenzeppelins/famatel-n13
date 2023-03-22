import React from 'react';
/**Components**/
import BasicCardGraphicSection from './graphicSection/BasicCardGraphicSection';
/**Hook Staff**/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
import { IF_ImgStaticData } from '../../../../../utils/TS/typeScriptStaff';
/**HardCoded Data**/
const minHeight = 500;
const textStyle =
  'text-grey text-center text-[0.5rem] xs:text-[0.625rem] sm:text-[0.75rem] xxxl:text-[1.125rem] tracking-[0.09rem] leading-normal group-hover:text-light ease-in duration-300';

/*
used in <ProduktyDropDownMenu>
*/
/**------------------------------------------------**/
const BasicCardMainSection: React.FunctionComponent<{
  label: string;
  imageData: IF_ImgStaticData;
  heightMattersCondition?: boolean;
}> = ({ label, imageData, heightMattersCondition }) => {
  /**Hook Section; if not enough hight just get rid of images**/
  const { height, width } = useWindowSize({ screensNumber: 1 });
  const condition =
    (height < minHeight && heightMattersCondition) || width < 540;

  /**JSX**/
  return (
    <div className="w-full h-full flex flex-col">
      {condition ? null : <BasicCardGraphicSection imageData={imageData} />}
      <div
        data-layout="TextSection__container"
        className={`fc ${condition ? 'h-full' : 'h-[45%]'}  w-full p-1 `}
      >
        <p
          className={textStyle}
          // className="header-link-label text-grey text-center group-hover:text-light ease-in duration-300"
          // className="text-grey text-center text-[0.5rem] xs:text-[0.625rem] sm:text-[0.75rem] xxxl:text-[1.125rem] tracking-[0.09rem] leading-normal group-hover:text-light ease-in duration-300 "
        >
          {label}
        </p>
      </div>
    </div>
  );
};

export default BasicCardMainSection;
