import React from 'react';
import CatalogTableRow from './row/CatalogTableRow';

const CatalogTableBody: React.FunctionComponent<{
  amper: string;
  rowsData: string[][] | (string | undefined)[][];
  bodyType: number;
}> = ({ amper, rowsData, bodyType }) => {
  /**... */
  console.log('rowsData:', rowsData);
  /**...**/
  const createStyles = (headerType: number) => {
    switch (headerType) {
      case 1:
        return {
          containerStyle:
            'grid grid-cols-[1fr_10fr] grid-rows-[1fr_1fr_1fr] divide-x-2 divide-dark group divide-y ', //grid-cols-[1fr_1fr_1fr_2fr_2fr_2fr_2fr]
          rowContainerStyle:
            'col-start-2 grid grid-cols-[1fr_1fr_2fr_2fr_2fr_2fr] divide-x-2 divide-dark',
          topCell_1: 'bg-dark flex flex-col border border-greyShade1 p-1',
          vatCollors: [
            'bg-[#ceae0e]',
            'bg-[#134976]',
            'bg-[#a01b29]',
            'bg-[#2c3038]',
          ],
        };

      case 2:
        return {
          containerStyle:
            'grid grid-cols-[1fr_9fr] grid-rows-[1fr_1fr_1fr] divide-x-2 divide-dark group divide-y-2',
          rowContainerStyle:
            'col-start-2 grid grid-cols-[1fr_1fr_3fr_3fr] divide-x-2 divide-dark',
          topCell_1: 'bg-dark flex flex-col border border-greyShade1',
          vatCollors: ['bg-[#134976]', 'bg-[#a01b29]'],
        };
      case 3:
        return {
          containerStyle:
            'grid grid-cols-[3fr_6fr] divide-x-2 divide-dark group gap-y-2',
          rowContainerStyle:
            'col-start-2 grid grid-cols-[1fr_1fr_3fr] divide-x-2 divide-dark',
          topCell_1: 'bg-dark flex flex-col border border-greyShade1 p-1',
          vatCollors: ['bg-[#a01b29]'],
        };
    }
  };
  /**JSX**/
  return (
    <div className={createStyles(bodyType)?.containerStyle}>
      <div className="col-start-1 col-end-2 row-span-full bg-grey">{amper}</div>
      {rowsData.map((rowData, index) => (
        <div className={createStyles(bodyType)?.rowContainerStyle} key={index}>
          <CatalogTableRow rowData={rowData} />
        </div>
      ))}
    </div>
  );
};

export default CatalogTableBody;
