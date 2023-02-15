import React from 'react';
/**Components**/
import BasicCardMainSection from './mainSection/BasicCardMainSection';
import CardCounter from '../../__cardCounter/CardCounter';
/**TS**/
import { IF_ImgStaticData } from '../../../../../utils/TS/typeScriptStaff';

/**----------------------------------------------------------**/
const SubCategoryCardContent: React.FunctionComponent<{
  arrayIndex: number;
  label: string;
  imageData: IF_ImgStaticData;
  heightMattersCondition?: boolean;
}> = ({ arrayIndex, label, imageData, heightMattersCondition }) => {
  return (
    <div className="relative fc w-full h-full ">
      <div className="w-[18%] h-[80%] ">
        <CardCounter arrayIndex={arrayIndex} />
      </div>
      <div className="w-[82%] h-full">
        <BasicCardMainSection
          label={label}
          imageData={imageData}
          heightMattersCondition={heightMattersCondition}
        />
      </div>
    </div>
  );
};

export default SubCategoryCardContent;
