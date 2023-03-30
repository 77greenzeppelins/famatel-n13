import React from 'react';
import ArrowDownloadIcon from '../../../../SVG/icons/ArrowDownloadIcon';
import DownloadableLink from '../../../../_basicComponents/links/downloadableLink/DownloadableLink';

/**---------------------------------------------------------------**/
const ButtonsSection: React.FC<{
  buttonsLabels: string[];
  staffToDownload: string[];
  textStyle: string;
}> = ({ buttonsLabels, staffToDownload, textStyle }) => {
  /**JSX**/
  return (
    <>
      {buttonsLabels.map((label, i) => (
        <div
          key={i}
          className="flex items-center justify-between min-w-[92px] gap-3 group"
        >
          <ArrowDownloadIcon
            className={
              'w-4 h-4 sm:w-6 sm:h-6 stroke-grey group-hover:stroke-light group-hover:translate-y-1 ease-in duration-300 delay-100'
              //___animate-bounce animate-ping group-hover:translate-y-1 group-hover:translate-x-1 group-hover:scale-[1.1]
              //___group-hover:translate-y-1 ease-in duration-300 delay-300
            }
          />
          <DownloadableLink
            staffToDownload={staffToDownload[i]}
            linkLabel={label}
            textStyle={textStyle}
          />
        </div>
      ))}{' '}
    </>
  );
};

export default ButtonsSection;
