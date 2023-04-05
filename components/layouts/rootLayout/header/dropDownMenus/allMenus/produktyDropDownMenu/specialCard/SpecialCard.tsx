import React from 'react';
/**Components**/
import CardFrame from '../../../../../../../multipagesComponents/cardsCatalogs/__cardFrame/CardFrame';
import Clock from '../../../../../../../multipagesComponents/timeAndData/Clock';
import DateDisplayer from '../../../../../../../multipagesComponents/timeAndData/DateDisplayer';

/**--------------------------**/
const SpecialCard: React.FC<{
  mediumTextStyle?: string;
  largeTextStyle?: string;
}> = ({ mediumTextStyle, largeTextStyle }) => {
  /**JSX**/
  return (
    <CardFrame>
      <div className="flex w-full h-full group">
        {/* <div className="relative hidden lg:flex flex-col lg:w-[30%]"></div> */}

        <div className="relative flex flex-col items-center w-full lg:w-[70%] h-full">
          <div className="flex justify-end items-center  w-full h-[25%] min-h-[18px] px-2 xl:px-6">
            <DateDisplayer textStyle={mediumTextStyle} />
          </div>
          <div className="flex justify-between items-center w-full h-[75%] px-2 xl:px-6">
            <div className="">
              <p className={largeTextStyle}>Bielawa</p>
            </div>
            <Clock
              city={'Bielawa'}
              timeZone={'Europe/Warsaw'}
              textStyle={largeTextStyle}
            />
          </div>
        </div>
      </div>
    </CardFrame>
  );
};

export default SpecialCard;

{
  /* <div className="flex justify-end items-center  w-full h-[25%] min-h-[18px] px-2 xl:px-6" />
          <div className="relative flex justify-between items-center w-full h-[75%] px-2 xl:px-6">
            <div className="hidden lg:flex absolute inset-x-0 h-[70%] border-r border-greyShade2" />
          </div> */
}
{
  /* <SvgLogoF svgStyle={'w-[70%]'} gStyle={'stroke-grey'} /> */
}
{
  /* <SvgLogoFgrad svgStyle={'w-[70%]'} />*/
}
{
  /* <SvgLogoFgradient svgStyle={'w-[70%]'} /> */
}
