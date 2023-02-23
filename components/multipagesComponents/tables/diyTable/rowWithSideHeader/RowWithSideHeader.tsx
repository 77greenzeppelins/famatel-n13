import React from 'react';
/**...**/
import BodyCell from '../../__cells/layoutXL/BodyCell';
import SideHeader from '../../__cells/layoutXL/SideHeader';
import SideHeaderCenter from '../../__cells/layoutXL/SideHeaderCenter';

const RowWithSideHeader = ({
  rowData,
  centered = false,
}: {
  rowData?: string[];
  centered?: boolean;
  //___should be delated...
  customeCell?: string;
  customeHeader?: string;
}) => {
  return (
    <>
      {rowData?.map((label, i) => {
        if (i === 0 && !centered) {
          return <SideHeader key={i} label={label} />;
        }
        if (i === 0 && centered) {
          return <SideHeaderCenter key={i} label={label} />;
        }
        return <BodyCell key={i} label={label} />;
      })}
    </>
  );
};

export default RowWithSideHeader;
