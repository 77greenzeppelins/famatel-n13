import React from 'react';
/**...**/
import BodyCell from '../../__cells/layoutXL/BodyCell';
import SideHeader from '../../__cells/layoutXL/SideHeader';
import SideHeaderCenter from '../../__cells/layoutXL/SideHeaderCenter';

const RowWithSideHeader = ({
  rowData,
  centered = false,
  isBreakAll,
}: {
  rowData?: string[];
  centered?: boolean;
  //___should be delated...
  customeCell?: string;
  customeHeader?: string;
  isBreakAll?: boolean;
}) => {
  return (
    <>
      {rowData?.map((label, i) => {
        if (i === 0 && !centered) {
          return <SideHeader key={i} label={label} isBreakAll={isBreakAll} />;
        }
        if (i === 0 && centered) {
          return (
            <SideHeaderCenter key={i} label={label} isBreakAll={isBreakAll} />
          );
        }
        return <BodyCell key={i} label={label} />;
      })}
    </>
  );
};

export default RowWithSideHeader;
