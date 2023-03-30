import React from 'react';
/**Components**/
import ButtonsSection from './buttonsSection/ButtonsSection';

/**HardCoded Staff*/
const textStyle =
  'p-medium text-grey group-hover:text-light ease-in duration-300 disable whitespace-normal';

/**-----------------------------**/
const DownloadableRow: React.FC<{
  rowLabel: string;
  rowNumber: number;
  buttonsLabels: string[];
  staffToDownload: string[];
}> = ({ rowLabel, rowNumber, buttonsLabels, staffToDownload }) => {
  /**JSX**/
  return (
    <div className="relative min-h-[64px] sm:min-h-[32px] flex items-center ">
      <div className="flex items-center min-w-[24px] min-h-[64px] sm:min-h-[32px] ">
        <p className={textStyle}>{rowNumber}</p>
      </div>
      <div className="flex sm:items-center flex-col gap-y-2 sm:flex-row w-full justify-between flex-wrap">
        <div className="sm3xx:min-w-[312px]">
          <p className={textStyle}>{rowLabel}</p>
        </div>
        <div className="flex gap-9">
          <ButtonsSection
            buttonsLabels={buttonsLabels}
            staffToDownload={staffToDownload}
            textStyle={textStyle}
          />
        </div>
      </div>
      <div className="absolute inset-0 flex border-b border-greyShade2 group-hover:border-grey ease-in duration-300 pointer-events-none" />
    </div>
  );
};

export default DownloadableRow;
