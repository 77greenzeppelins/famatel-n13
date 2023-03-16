import React from 'react';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';

const KatalogMenuHeader: React.FC<{ label: string }> = ({ label }) => {
  /**JSX**/
  return (
    <div className="flex items-center h-[16px]">
      {/* <div className="flex items-center justify-start h-full w-[24px] ">
        <div className="h-[25%] w-[18px] border-t-[1px] border-grey" />
      </div> */}
      <div>
        <SmallPseudoHeader
          text={label}
          hasBox={false}
          boxStyle="h-[8px] aspect-square bg-dark border-[0.5px] border-grey"
          textStyle="text-[0.625rem] lg:text-[0.75rem] xxxl:text-[0.825rem] tracking-[0.125rem]  word-spacing-0125 lg:word-spacing-025 text-grey leading-4 xxxl:leading-[0.825rem]"
          hasVerticalOrnament={false}
        />
      </div>
    </div>
  );
};

export default KatalogMenuHeader;
