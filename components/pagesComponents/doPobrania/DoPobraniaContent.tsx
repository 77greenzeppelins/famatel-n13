import React, { useState } from 'react';
import FadingHeader from '../../multipagesComponents/pseudoHeaders/fadingHeader/FadingHeader';
/**Components**/
import CatalogChapters from './catalogChapters/CatalogChapters';
import DeclarationsSection from './declarations/DeclarationsSection';
import FullCatalog from './fullCatalog/FullCatalog';
/**Hardcoded Staff*/

const lgTextStyle =
  'text-light text-left text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[4.5rem] xxl:text-[5rem] font-bold tracking-[2px] md:leading-[3rem] lg:leading-[4rem] xl:leading-[3.5rem] xxl:leading-[4rem]';
const mdTextStyle =
  'text-grey text-1xl tracking-[1px] lg:tracking-[0.125rem] word-spacing-0125 lg:word-spacing-025';

/**----------------------------------**/
const DoPobraniaContent = () => {
  /**Local State**/
  // const [animationStage, setAnimationStage] = useState<number>(0);

  // console.log('.......animationStage', animationStage);
  /**JSX**/
  return (
    <div
      data-component="KontaktContent__container"
      className="relative bg-dark pt-[60px]"
    >
      <div className="w-full h-full inner-px-md-xl-xxl">
        <div className="w-full flex flex-col gap-y-10 pt-10">
          <FadingHeader
            label={'KATALOG'}
            // hasBox={true}
            // hasVerticalOrnament={false}
          />
          <div className="flex flex-col-reverse xxl:flex-row gap-10">
            <CatalogChapters />
            <FullCatalog mdTextStyle={mdTextStyle} lgTextStyle={lgTextStyle} />
          </div>
          <FadingHeader label={'DEKLARACJE'} />
          <div>
            <DeclarationsSection />
          </div>

          <FadingHeader label={'KARTY KATALOGOWE'} />
          <div className="h-[10vh]" />
        </div>
      </div>
    </div>
  );
};

export default DoPobraniaContent;

/**

*/
