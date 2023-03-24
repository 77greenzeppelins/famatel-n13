import React from 'react';
/**Components**/
import FadingFrame from '../../../multipagesComponents/lines/fadingFrame/FadingFrame';
import ArrowDownloadIcon from '../../../SVG/icons/ArrowDownloadIcon';
import DownloadableLink from '../../../_basicComponents/links/downloadableLink/DownloadableLink';
/**Hardcoded Staff**/
const fakeLink = '/pdf/catalogChapters/05_przedluzacze_bebnowe.pdf';

const FullCatalog: React.FC<{ mdTextStyle?: string; lgTextStyle?: string }> = ({
  mdTextStyle,
  lgTextStyle,
}) => {
  return (
    <div className={`relative fc flex-col container aspect-video`}>
      <div
        className={`relative fc flex-col gap-10 w-full h-full max-w-[600px] max-h-[600px]`}
      >
        <FadingFrame />

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
