import React from 'react';
import ArrowDownloadIcon from '../../../SVG/icons/ArrowDownloadIcon';
import DownloadableLink from '../../../_basicComponents/links/downloadableLink/DownloadableLink';
/**Hardcoded Staff**/
const fakeLink = '/pdf/catalogChapters/05_przedluzacze_bebnowe.pdf';
const textStyle =
  'header-link-label text-grey group-hover:text-light ease-in duration-300 disable whitespace-normal';

const FullCatalog: React.FC<{ mdTextStyle?: string; lgTextStyle?: string }> = ({
  mdTextStyle,
  lgTextStyle,
}) => {
  return (
    <div
      className={`relative fc flex-col container aspect-video`}
      //__className={`relative fc flex-col w-full h-full max-w-[800px] bg-vB`}
    >
      <div
        className={`relative fc flex-col gap-10 w-full h-full max-w-[600px] max-h-[600px]`}
      >
        <div className="absolute flex inset-x-0 top-0 h-[1px]">
          <div className="w-[50%] h-[1px] bg-gradient-to-l from-grey via-greyShade2 to-transparent" />
          <div className="w-[50%] h-[1px] bg-gradient-to-r from-grey via-greyShade2 to-transparent" />
        </div>
        <div className="absolute flex inset-x-0 bottom-0 h-[1px]">
          <div className="w-[50%] h-[1px] bg-gradient-to-l from-grey via-greyShade2 to-transparent" />
          <div className="w-[50%] h-[1px] bg-gradient-to-r from-grey via-greyShade2 to-transparent" />
        </div>
        <div className="absolute flex flex-col inset-y-0 left-0 w-[1px]">
          <div className="w-[1px]] h-[50%] bg-gradient-to-t from-grey via-greyShade2 to-transparent" />
          <div className="w-[1px]] h-[50%] bg-gradient-to-b from-grey via-greyShade2 to-transparent" />
        </div>
        <div className="absolute flex flex-col inset-y-0 right-0 w-[1px]">
          <div className="w-[1px]] h-[50%] bg-gradient-to-t from-grey via-greyShade2 to-transparent" />
          <div className="w-[1px]] h-[50%] bg-gradient-to-b from-grey via-greyShade2 to-transparent" />
        </div>

        <div className="fc flex-col ">
          <p className={lgTextStyle}>Katalog</p>
          <p className={mdTextStyle}>2023</p>
        </div>
        <div className="flex items-center justify-between min-w-[92px] gap-3 group">
          <ArrowDownloadIcon
            className={
              'w-4 h-4 sm:w-6 sm:h-6 stroke-grey group-hover:stroke-light group-hover:translate-y-1 ease-in duration-300 delay-300'
            }
          />
          <DownloadableLink
            staffToDownload={fakeLink}
            linkLabel={'PEŁNA WERSJA'}
            textStyle={
              'header-link-label text-grey group-hover:text-light ease-in duration-300 disable whitespace-normal'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FullCatalog;
