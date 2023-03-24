import React from 'react';
/**Components**/
import DownloadableLink from '../../../../_basicComponents/links/downloadableLink/DownloadableLink';
import ArrowDownloadIcon from '../../../../SVG/icons/ArrowDownloadIcon';
/**Basic Data**/
import { corpoColors } from '../../../../../data/_data';

/**HardCoded Staff*/
const textStyle =
  'header-link-label text-grey group-hover:text-light ease-in duration-300 disable whitespace-normal';
const chapter05href = '/pdf/catalogChapters/05_przedluzacze_bebnowe.pdf';

/**-------------------------------------------**/
const ChapterLine: React.FC<{ chapterName: string; chapterNumber: number }> = ({
  chapterNumber,
  chapterName,
}) => {
  /**JSX**/

  return (
    <div className="relative min-h-[64px] sm:min-h-[32px] flex items-center">
      <div className="min-w-[24px]">
        <p className={textStyle}>{chapterNumber}</p>
      </div>
      <div className="flex flex-col gap-y-2 sm:flex-row  w-full justify-between flex-wrap">
        <div className="sm3xx:min-w-[312px] ">
          <p className={textStyle}>{chapterName}</p>
        </div>
        <div className="flex gap-9">
          <div className="flex items-center gap-3 group">
            <ArrowDownloadIcon
              className={
                'w-4 h-4 sm:w-6 sm:h-6 stroke-grey group-hover:stroke-light group-hover:translate-y-1 ease-in duration-300 delay-300'
                //___animate-bounce animate-ping group-hover:translate-y-1 group-hover:translate-x-1 group-hover:scale-[1.1]
              }
            />
            <DownloadableLink
              staffToDownload={
                '/pdf/catalogChapters/05_przedluzacze_bebnowe.pdf'
              }
              linkLabel={'150 mb'}
              textStyle={textStyle}
            />
          </div>
          <div className="flex items-center gap-3 group">
            <ArrowDownloadIcon
              className={
                'w-4 h-4 sm:w-6 sm:h-6 stroke-grey group-hover:stroke-light group-hover:translate-y-1 ease-in duration-300 delay-300'
                //___animate-bounce animate-ping group-hover:translate-y-1 group-hover:translate-x-1 group-hover:scale-[1.1]
              }
            />
            <DownloadableLink
              staffToDownload={
                '/pdf/catalogChapters/05_przedluzacze_bebnowe.pdf'
              }
              linkLabel={'25 mb'}
              textStyle={textStyle}
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex border-b border-greyShade2 group-hover:border-grey ease-in duration-300 pointer-events-none" />
    </div>
  );
};

export default ChapterLine;
