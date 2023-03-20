import React, { ReactNode } from 'react';
/**Components**/
import TableFrame from '../_tableFrame/TableFrame';

/**-----------------------**/
const DIYTable: React.FC<{
  children: ReactNode;
  sliderTriggersValue?: string;
  tableLayout?: string;
}> = ({ children, sliderTriggersValue = 'md', tableLayout }) => {
  /**JSX**/
  return (
    <TableFrame sliderTriggersValue={sliderTriggersValue}>
      {children}
    </TableFrame>
  );
};
export default DIYTable;

// return <div className={tableLayout}>{children}</div>;
