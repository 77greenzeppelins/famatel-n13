import React from 'react';

const CatalogTableRow: React.FunctionComponent<{
  mainGrid: string;
  headerCellStyle: string;
  bodyCellStyle: string;
  label: string;
  value: string;
}> = ({ mainGrid, headerCellStyle, bodyCellStyle, label, value }) => {
  return (
    <div className={mainGrid}>
      <div className={headerCellStyle}>{label} </div>
      <div className={bodyCellStyle}>{value} </div>
    </div>
  );
};

export default CatalogTableRow;
