import React from 'react';
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';

const KatalogMenuHeader: React.FC<{ label: string }> = ({ label }) => {
  /**JSX**/
  return (
    <div className="flex items-center h-[16px]">
      <div className="flex items-center justify-start h-full w-[24px] ">
        <div className="h-[25%] w-[18px] border-t-[1px] border-grey" />
      </div>
      <div>
        <SmallPseudoHeader
          text={label}
          hasBox={false}
          hasVerticalOrnament={false}
        />
      </div>
    </div>
  );
};

export default KatalogMenuHeader;
