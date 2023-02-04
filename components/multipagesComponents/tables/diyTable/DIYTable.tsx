import React, { ReactNode } from 'react';

const DIYTable: React.FunctionComponent<{
  tableLayout: string;
  children: ReactNode;
}> = ({ tableLayout, children }) => {
  return <div className={tableLayout}>{children}</div>;
};

export default DIYTable;

{
  /* {Array.from({ length: columnsNumber }).map((_, index) => (
        <div className="fc bg-grey" key={index}>
          {index}
        </div>
      ))} */
}
