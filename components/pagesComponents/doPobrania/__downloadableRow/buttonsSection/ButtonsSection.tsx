import React from 'react';
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
        <DownloadableLink
          key={i}
          staffToDownload={staffToDownload[i]}
          linkLabel={label}
          textStyle={textStyle}
        />
      ))}
    </>
  );
};

export default ButtonsSection;

{
  /* <div
          key={i}
          className="flex items-center justify-between min-w-[92px] gap-3 group"
        >
          <div className="hover:translate-y-1 ease-in duration-300 delay-100">
            <ArrowDownloadIcon
              className={
                'w-4 h-4 sm:w-6 sm:h-6 stroke-grey group-hover:stroke-light  ease-in duration-300 delay-100'
                //___animate-bounce animate-ping group-hover:translate-y-1 group-hover:translate-x-1 group-hover:scale-[1.1]
                //___group-hover:translate-y-1 ease-in duration-300 delay-300
              }
            />
          </div>
          <DownloadableLink
            staffToDownload={staffToDownload[i]}
            linkLabel={label}
            textStyle={textStyle}
          />
        </div> */
}
