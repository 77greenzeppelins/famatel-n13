import React, { ReactNode } from 'react';

const DIYTable: React.FunctionComponent<{
  tableLayout: string;
  children: ReactNode;
}> = ({ tableLayout, children }) => {
  return <div className={tableLayout}>{children}</div>;
};
export default DIYTable;
