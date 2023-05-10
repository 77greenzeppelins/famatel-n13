import React from 'react';
/**Components**/
import ButtonsSection from './buttonsSection/ButtonsSection';

/**HardCoded Staff*/
const textStyle =
  'p-regular text-grey group-hover:text-light ease-in duration-300 disable-soft whitespace-normal';

/**-----------------------------**/
const DownloadableRow: React.FC<{
  rowLabel: string;
  rowNumber: number;
  buttonsLabels: string[];
  staffToDownload: string[];
}> = ({ rowLabel, rowNumber, buttonsLabels, staffToDownload }) => {
  /**JSX**/
  return (
    <li className="relative flex flex-col gap-[2px] items-center group">
      <div className=" flex w-full">
        <div
          className="flex items-center min-w-[24px] min-h-[64px] sm:min-h-[32px]"
          //__
        >
          <p className={textStyle}>{rowNumber}</p>
        </div>
        <div className="flex flex-col flex-wrap justify-between w-full sm:items-center gap-y-2 sm:flex-row">
          <div className="sm3xx:min-w-[312px]">
            <p className={textStyle}>{rowLabel}</p>
          </div>
          <div className="flex gap-9 ">
            <ButtonsSection
              buttonsLabels={buttonsLabels}
              staffToDownload={staffToDownload}
              textStyle={textStyle}
            />
          </div>
        </div>
      </div>
      <span
        className="w-full h-[1px] duration-300 ease-in border-b border-greyShade2 group-hover:border-grey"
        // className="absolute bottom-0 inset-x-0 h-[1px] flex duration-300 ease-in border-b border-greyShade2 group-hover:border-grey"
        //___pointer-events-none
      />
    </li>
  );
};

export default DownloadableRow;
