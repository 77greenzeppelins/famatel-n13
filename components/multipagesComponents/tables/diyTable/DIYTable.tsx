import React, { ReactNode } from 'react';

const DIYTable: React.FunctionComponent<{
  columnsNumber: number;
  tableLayout?: string;
  children: ReactNode;
}> = ({ columnsNumber, tableLayout, children }) => {
  return (
    <div className={tableLayout && tableLayout}>
      {/* {Array.from({ length: columnsNumber }).map((_, index) => (
        <div className="fc bg-grey" key={index}>
          {index}
        </div>
      ))} */}
      {children}
    </div>
  );
};

export default DIYTable;
