import React from 'react';
import { topHeaderCell } from '../../../../../utils/tailwindStyles';

/**-----------------------------------------------------**/
const BasicTableHeader: React.FunctionComponent<{
  tableHeader?: string | string[];
}> = ({ tableHeader }) => {
  /**JSX**/
  return (
    <div className={topHeaderCell}>
      <p>{tableHeader}</p>
    </div>
  );
};

export default BasicTableHeader;
