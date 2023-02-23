import React from 'react';
import BodyCell from '../../__cells/layoutXL/BodyCell';
import SideHeader from '../../__cells/layoutXL/SideHeader';
/**
 * used in "wtyczki-gniazda-estradowe" / layoput_1 /
 *
 */
/**-----------------------------------------------------**/
const RowOfBasicTable2: React.FunctionComponent<{
  rowData: string[];
}> = ({ rowData }) => {
  /**JSX**/
  return (
    <>
      {rowData.map((label, i) => {
        if (i === 0) {
          return <SideHeader key={i} label={label} />;
        }
        return <BodyCell key={i} label={label} />;
      })}
    </>
  );
};

export default RowOfBasicTable2;
