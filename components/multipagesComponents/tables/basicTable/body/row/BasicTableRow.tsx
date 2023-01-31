import React from 'react';

const BasicTableRow: React.FunctionComponent<{
  rowData:
    | string[]
    | {
        label: string;
        value: string;
      };
  cellsContainersStyle?: [
    'flex items-center h-full w-[50%] ',
    'h-full w-[50%] px-4'
  ];
  multiCellsContainer?: string;
  multiCellsCell?: string;
}> = ({ rowData, multiCellsContainer, multiCellsCell }) => {
  /**...**/
  const createCells = () => {
    if (!Array.isArray(rowData)) {
      return (
        <div className="relative flex justify-between items-center w-full py-2 group bg-greyTint2 border-y-2 border-dark hover:border-light hover:bg-light ease-in duration-300 divide-x-2 divide-dark">
          <div className="flex items-center h-full w-[50%] ">
            <p className="header-link-label text-dark px-6 ">{rowData.label}</p>
          </div>
          <div className="h-full w-[50%] px-4">
            <p className="fc header-link-label text-dark text-center">
              {rowData.value}
            </p>
          </div>
        </div>
      );
    } else {
      // rowData.map((cell, index) => (
      //   <div
      //     className="relative fc w-[500px] py-2 group bg-greyTint2 border-y-2 border-dark hover:border-light hover:bg-light ease-in duration-300"
      //     key={index}
      //   >
      //     <p className="relative header-link-label text-dark ">{cell}</p>
      //   </div>
      // ));
      <div
        className={
          multiCellsContainer
            ? multiCellsContainer
            : 'relative fc w-[500px] py-2 group bg-greyTint2 border-y-2 border-dark hover:border-light hover:bg-light ease-in duration-300'
        }
      >
        {rowData.map((cell, index) => (
          <p
            key={index}
            className={
              multiCellsCell
                ? multiCellsCell
                : 'relative header-link-label text-dark '
            }
          >
            {cell}
          </p>
        ))}
      </div>;
    }
  };
  return <>{createCells()}</>;
};

export default BasicTableRow;

{
  /* <div
  className="relative fc w-[500px] py-2 group bg-greyTint2 border-2 border-dark hover:border-light hover:bg-light ease-in duration-300"
  key={header}
>
  <p className="relative header-link-label text-dark ">{header}</p>
</div>; */
}
