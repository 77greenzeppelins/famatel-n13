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
    <div className="relative min-h-[32px] flex items-center group">
      <div className="min-w-[24px]">
        <p className={textStyle}>{chapterNumber}</p>
      </div>
      <div className="flex xs:flex-row flex-col w-full justify-between flex-wrap">
        <div className="xs3xx:min-w-[312px] ">
          <p className={textStyle}>{chapterName}</p>
        </div>
        <div className="flex gap-6">
          <div className="flex">
            <ArrowDownloadIcon className={'w-6 h-6'} />
            <DownloadableLink
              staffToDownload={
                '/pdf/catalogChapters/05_przedluzacze_bebnowe.pdf'
              }
              linkLabel={'100 mb'}
              textStyle={textStyle}
            />
          </div>
        </div>
      </div>
      {/* <div className="flex gap-6">
        <p className="text text-grey">{chapterName}</p>
        <ArrowDownloadIcon className={'w-6 h-6'} />
      </div> */}
      <div className="absolute inset-0 flex border-b border-greyShade2 group-hover:border-grey ease-in duration-300 pointer-events-none" />
    </div>
  );
};

export default ChapterLine;
