import React from 'react';
import FadingFrame from '../../../../multipagesComponents/lines/fadingFrame/FadingFrame';
import FadingLine from '../../../../multipagesComponents/lines/fadingLine/FadingLine';

/**TS**/
type Props = {
  componentIsInView?: boolean;
  pseudoNumber?: string;
  text?: string;
};

/**------------------------------------------------**/
const SquareWithNumber: React.FC<Props> = ({
  componentIsInView = false,
  pseudoNumber = '000',
  text = 'lorem',
}) => {
  /**JSX**/
  return (
    <div
      className={`fc flex-col  ${
        componentIsInView ? ' translate-x-0' : ' translate-x-4'
      } duration-[0.9s] delay-[0.6] p-2 disable-soft w-[80px] h-[80px] md:w-[120px] md:h-[120px] aspect-square`}
    >
      <div
        className={`${
          componentIsInView ? 'opacity-1' : 'opacity-0'
        } duration-[0.9s] delay-[0.6]`}
      >
        <FadingFrame />
      </div>
      <p
        // ref={ref}
        className={` text-center text-[1.25rem] xs:text-[1.5rem]  md:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem]   font-bold tracking-[2px] leading-tight  ${
          componentIsInView ? 'text-light' : 'text-dark'
        } duration-[0.9s] delay-[0.6] pb-1`}
        // style={{ width: 'content-fit' }}
      >
        {pseudoNumber}
      </p>
      <div
        className={`w-full flex h-[1px] ${
          componentIsInView ? 'opacity-1' : 'opacity-0'
        } duration-[0.9s] delay-[0.6]`}
      >
        <FadingLine gradientTo="toLeft" />
        <FadingLine />
      </div>
      <p
        className={`header-link-label text-center ${
          componentIsInView ? 'text-light' : 'text-dark'
        } duration-[0.9s] delay-[0.6] pt-[2px]`}
        // style={{ width: 'content-fit' }}
      >
        {text}
      </p>
    </div>
  );

  // return (
  //   <div
  //     className={`fc flex-col border  ${
  //       componentIsInView
  //         ? 'border-corpo translate-x-0'
  //         : 'border-dark translate-x-4'
  //     } duration-[0.9s] delay-[0.6] p-2 disable-soft w-[80px] h-[80px] md:w-[120px] md:h-[120px] aspect-square`}
  //     // style={{
  //     //   //  width: val,
  //     //   aspectRatio: '1/1',
  //     // }}
  //   >
  //     <p
  //       // ref={ref}
  //       className={` text-center text-[1.25rem] xs:text-[1.5rem]  md:text-[1.75rem] lg:text-[2rem] xl:text-[2.25rem]   font-bold tracking-[2px] leading-tight  ${
  //         componentIsInView ? 'text-light' : 'text-dark'
  //       } duration-[0.9s] delay-[0.6] pb-1`}
  //       // style={{ width: 'content-fit' }}
  //     >
  //       {pseudoNumber}
  //     </p>
  //     <div
  //       className={`w-full h-[1px] border-t ${
  //         componentIsInView ? 'border-corpo ' : 'border-dark '
  //       } duration-[0.9s] delay-[0.6]`}
  //     />
  //     <p
  //       className={`header-link-label text-center ${
  //         componentIsInView ? 'text-light' : 'text-dark'
  //       } duration-[0.9s] delay-[0.6] pt-[2px]`}
  //       // style={{ width: 'content-fit' }}
  //     >
  //       {text}
  //     </p>
  //   </div>
  // );
};

export default SquareWithNumber;
