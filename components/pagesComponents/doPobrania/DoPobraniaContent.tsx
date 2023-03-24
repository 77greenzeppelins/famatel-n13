import React, { useState } from 'react';
import CatalogChapters from './catalogChapters/CatalogChapters';
import ChatLoader from './loaderStaff/ChatLoader';

import ArrowDownloadIcon from '../../SVG/icons/ArrowDownloadIcon';

/**HardCoded Staff*/
const chapter05href = '/pdf/catalogChapters/05_przedluzacze_bebnowe.pdf';

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
        {/* <div className="w-full h-full inner-px-md-xl-xxl pt-[20px] lg:pt-[40px]">
        <div>
          <ImageSlider imageData={imgLadowarki} />
        </div>
      </div> */}
        <div>
          <div className="flex gap-6">
            <p className="text text-grey">Karty katalogowe</p>
            <ArrowDownloadIcon className={'w-6 h-6'} />
          </div>
          <div>
            <p className="text text-grey">deklaracje</p>
          </div>
          <div>
            <p className="text text-grey">katalog</p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-10 pt-10">
          <div>
            <CatalogChapters />
          </div>
          <div className="fc h-[50vh] py-4">
            <div className="fc w-[90%] h-full border-t border-b border-greyShade2">
              <a
                className="text-2xl text-light"
                href={chapter05href}
                // alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
                //___
                download
                // locale={false}
              >
                Download FIle
              </a>
            </div>
          </div>
          <div className="fc h-[50vh] py-4">
            <div className="fc w-[90%] h-full border-t border-b border-greyShade2">
              <ChatLoader />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoPobraniaContent;

/**

*/
