import React from 'react';
/**Components**/
import BasicCardGraphicSection from './graphicSection/BasicCardGraphicSection';
/**Hook Staff**/
import useWindowSize from '../../../../../utils/hooks/useWindowSize';
import { IF_ImgStaticData } from '../../../../../utils/TS/typeScriptStaff';
/**HardCoded Data**/
const minHeight = 500;

/*
used in <ProduktyDropDownMenu>
*/
/**------------------------------------------------**/
const BasicCardMainSection: React.FunctionComponent<{
  label: string;
  imageData: IF_ImgStaticData;
  heightMattersCondition?: boolean;
  textStyle?: string;
}> = ({ label, imageData, heightMattersCondition, textStyle }) => {
  /**Hook Section; if not enough hight just get rid of images**/
  const { height, width } = useWindowSize({ screensNumber: 1 });
  const condition =
    (height < minHeight && heightMattersCondition) || width < 540;

  /**JSX**/
  return (
    <div className="w-full h-full flex flex-col">
      {condition ? null : <BasicCardGraphicSection imageData={imageData} />}
      <div
        data-layout="BasicCardMainSection__textSection"
        className={`${
          condition
            ? 'flex h-full items-start justify-center px-4 xs3xx:px-6'
            : 'fc h-[45%]'
        }  w-full p-1`}
      >
        <p className={textStyle}>{label}</p>
      </div>
    </div>
  );
};

export default BasicCardMainSection;
