import React from 'react';
/**Components*/
import TopHeader from '../../__cells/layoutXL/TopHeader';

/**-----------------------------------------------------**/
const BasicTableHeader: React.FunctionComponent<{
  tableHeader?: string | string[];
  headerContainerGrid?: string;
}> = ({ tableHeader, headerContainerGrid }) => {
  /**Handler**/
  const createCells = () => {
    if (tableHeader && typeof tableHeader === 'string') {
      //___if rowData has type "{label: string, value: string}"" ????
      return (
        // <div className={`grid grid-cols-[1fr]`}>
        <TopHeader label={tableHeader} />
        // </div>
      );
    }
    // if (tableHeader && Array.isArray(tableHeader)) {
    //   return (
    //     <div
    //       className={
    //         headerContainerGrid
    //           ? headerContainerGrid
    //           : `grid grid-cols-[1fr] ${vertGap} group`
    //       }
    //     >
    //       {tableHeader?.map((cell, index) => {
    //         return (
    //           <div key={index} className={topHeaderCell}>
    //             <p>{cell}</p>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   );
    // }
  };
  /**JSX**/
  return <>{createCells()}</>;
};

export default BasicTableHeader;
