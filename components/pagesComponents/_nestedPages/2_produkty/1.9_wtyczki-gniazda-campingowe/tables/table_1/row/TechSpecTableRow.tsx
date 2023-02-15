import React from 'react';
import {
  sideHeaderCell,
  bodyCell,
} from '../../../../../../../../utils/tailwindStyles';
/**
 * used in "wtyczki-gniazda-estradowe" / layoput_1 /
 *
 */
/**-----------------------------------------------------**/
const TechSpecTableRow: React.FunctionComponent<{
  rowData: string[];
}> = ({ rowData }) => {
  /**JSX**/
  return (
    <>
      {rowData.map((label, i) => {
        return (
          <div key={i} className={i ? bodyCell : sideHeaderCell}>
            {label}{' '}
          </div>
        );
      })}
    </>
  );
};

export default TechSpecTableRow;
