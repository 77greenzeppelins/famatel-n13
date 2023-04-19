import React from 'react';
import Link from 'next/link';
/**Components**/
import CardFrame from '../__cardFrame/CardFrame';
import CardCounter from '../__cardCounter/CardCounter';
import BasicCardMainSection from './mainSection/BasicCardMainSection';
/**TS**/
import { IF_Card } from '../../../../utils/TS/typeScriptStaff';
import ArrowLongRightIcon from '../../../SVG/icons/ArrowLongRightIcon';
import { useRouter } from 'next/router';

/**Tailwind**/
const basicTextStyle =
  ' text-center text-[0.5rem] xs3xx:text-[0.625rem] md:text-[0.75rem] xxxl:text-[1.125rem] tracking-[0.09rem] leading-normal group-hover:text-light ease-in duration-300 ';

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
  /**staff for setting arai-current*/
  const router = useRouter();
  const isActive = router.asPath === url;

  const routDrivenTextStyle = `${
    isActive ? 'text-corpo' : 'text-grey'
  }  text-center text-[0.5rem] xs3xx:text-[0.625rem] md:text-[0.75rem] xxxl:text-[1.125rem] tracking-[0.09rem] leading-normal ${
    isActive ? '' : 'group-hover:text-light ease-in duration-300'
  }  `;

  /**JSX**/
  return (
    <div
      data-component="Card_Basic__container"
      className={`relative w-full h-full cursor-pointer ${
        isActive ? '' : 'group'
      }`}
    >
      <Link
        aria-label={`Karta kategorii: ${label}`}
        role="link"
        className="relative block z-10 w-full h-full"
        href={url}
        scroll={false}
      ></Link>

      <div
        className="absolute inset-0 z-5"
        role="region"
        aria-label={`Tekstowo-graficzna zawartość karty kategorii: ${label}`}
      >
        <CardFrame>
          <div className="relative fc flex-col xs:flex-row w-full h-full">
            <div className="flex items-center justify-between  w-full h-[40%] xs:w-[20%] xs:h-[80%]">
              <div className="flex items-center justify-start w-[50%] h-[50%]  xs:h-full xs:w-full">
                <CardCounter
                  arrayIndex={arrayIndex}
                  textStyle={routDrivenTextStyle}
                  containerStyle={`fc xs:border-r ${
                    isActive ? 'border-corpo' : 'border-greyShade2'
                  } w-full max-w-[30px] md:max-w-[50px] h-full p-[0.25rem]  group-hover:border-grey ease-in duration-300`}
                />
              </div>
              <div className="flex items-center justify-end xs:hidden w-[50%] h-full ">
                <ArrowLongRightIcon
                  containerStyle={`fc h-6 w-6 aspect-square ${
                    isActive ? 'stroke-corpo' : 'stroke-greyShade1'
                  }  group-hover:stroke-light group-hover:translate-x-1 ease-in duration-[0.4s] delay-[0.1s] origin-center`}
                />
              </div>
            </div>
            <div className="w-full h-[60%] xs:w-[80%] xs:h-full ">
              <BasicCardMainSection
                label={label}
                imageData={imageData}
                heightMattersCondition={heightMattersCondition}
                textStyle={routDrivenTextStyle}
              />
            </div>
          </div>
        </CardFrame>
      </div>
    </div>
  );
};

export default Card_Basic;
