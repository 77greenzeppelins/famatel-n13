import React from 'react';
import Link from 'next/link';
/**Components**/
import CardFrame from '../__cardFrame/CardFrame';
import CardCounter from '../__cardCounter/CardCounter';
import BasicCardMainSection from './mainSection/BasicCardMainSection';
/**TS**/
import { IF_Card } from '../../../../utils/TS/typeScriptStaff';
/*
used in: manu expanded menu / catalog....
*/
/**-----------------------------------------------------------**/
const Card_Basic: React.FunctionComponent<IF_Card> = ({
  arrayIndex,
  label,
  url,
  imageData,
  heightMattersCondition,
}) => {
  /**JSX**/
  return (
    <div
      id="Card_Basic__container"
      className="w-full h-full cursor-pointer group"
    >
      <Link href={url} scroll={false}>
        <CardFrame>
          <div className="relative fc flex-col xs:flex-row w-full h-full ">
            <div className="fc w-full h-[40%] xs:w-[18%] xs:h-[80%]">
              <CardCounter arrayIndex={arrayIndex} />
            </div>
            <div className="w-full h-[60%] xs:w-[82%] xs:h-full">
              <BasicCardMainSection
                label={label}
                imageData={imageData}
                heightMattersCondition={heightMattersCondition}
              />
            </div>
          </div>
        </CardFrame>
      </Link>
    </div>
  );
};

export default Card_Basic;
