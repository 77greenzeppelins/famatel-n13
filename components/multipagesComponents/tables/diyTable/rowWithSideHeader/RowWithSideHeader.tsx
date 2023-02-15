import React from 'react';
/**...**/
import { sideHeaderCell, bodyCell } from '../../../../../utils/tailwindStyles';

const RowWithSideHeader = ({
  rowData,
  customeCell,
  customeHeader,
}: {
  rowData: string[] | undefined;
  customeCell?: string;
  customeHeader?: string;
}) => {
  return (
    <>
      {rowData?.map((label, i) => {
        return (
          <div
            key={i}
            className={
              i ? customeCell || bodyCell : customeHeader || sideHeaderCell
            }
          >
            {label}
          </div>
        );
      })}
    </>
  );
};

export default RowWithSideHeader;
