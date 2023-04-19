import React from 'react';
import Link from 'next/link';
/**Components**/
import CardFrame from '../__cardFrame/CardFrame';
import CardCounter from '../__cardCounter/CardCounter';
import BasicCardMainSection from './mainSection/BasicCardMainSection';
/**TS**/
import { IF_Card } from '../../../../utils/TS/typeScriptStaff';
import ArrowLongRightIcon from '../../../SVG/icons/ArrowLongRightIcon';

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
  textStyle,
}) => {
  /**JSX**/
  return (
    <div
      data-component="Card_Basic__container"
      className="relative w-full h-full cursor-pointer group"
    >
      <Link
        className="relative block z-10 w-full h-full"
        role="link"
        href={url}
        scroll={false}
        aria-label={`Karta kategorii: ${label}`}
      ></Link>

      <div
        className="absolute inset-0 z-5"
        role="region"
        aria-label={`Testowo-graficzna zawartość karty kategorii: ${label}`}
      >
        <CardFrame>
          <div className="relative fc flex-col xs:flex-row w-full h-full ">
            <div className="flex items-center justify-between  w-full h-[40%] xs:w-[20%] xs:h-[80%]">
              <div className="flex items-center justify-start w-[50%] h-[50%]  xs:h-full xs:w-full">
                <CardCounter arrayIndex={arrayIndex} textStyle={textStyle} />
              </div>
              <div className="flex items-center justify-end xs:hidden w-[50%] h-full ">
                <ArrowLongRightIcon containerStyle="fc h-6 w-6 aspect-square stroke-greyShade1 group-hover:stroke-light group-hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center " />
              </div>
            </div>
            <div className="w-full h-[60%] xs:w-[80%] xs:h-full ">
              <BasicCardMainSection
                label={label}
                imageData={imageData}
                heightMattersCondition={heightMattersCondition}
                textStyle={textStyle}
              />
            </div>
          </div>
        </CardFrame>
      </div>
    </div>
  );
};

export default Card_Basic;
