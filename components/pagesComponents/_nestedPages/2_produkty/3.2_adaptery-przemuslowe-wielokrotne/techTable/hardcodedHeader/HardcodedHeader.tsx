import React from 'react';
/**Components**/
import TopHeader from '../../../../../../multipagesComponents/tables/__cells/layoutXL/TopHeader';
import { horizGap } from '../../../../../../../utils/tailwindStyles';

const HardcodedHeader: React.FunctionComponent<{ headerData: string[] }> = ({
  headerData,
}) => {
  return (
    <div className="grid grid-cols-[repeat(5,1fr)] ">
      <div
        className={`grid grid-rows-[repeat(2,1fr)] col-start-1 col-end-3 row-start-1 row-span-full ${horizGap}`}
      >
        <TopHeader
          containerStyle="col-start-1 col-end-3"
          label={headerData[0]}
        />
        <TopHeader containerStyle="col-start-1  " label={headerData[1]} />
        <TopHeader containerStyle="col-start-2  " label={headerData[2]} />
      </div>
      <TopHeader label={headerData[3]} />
      <TopHeader label={headerData[4]} />

      <TopHeader label={headerData[5]} />
    </div>
  );
};

export default HardcodedHeader;
