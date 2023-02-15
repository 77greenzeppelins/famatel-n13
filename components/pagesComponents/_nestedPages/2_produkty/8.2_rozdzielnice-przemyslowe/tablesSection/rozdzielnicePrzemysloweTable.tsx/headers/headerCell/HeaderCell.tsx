import React from 'react';
/**Tailwind Styles*/
import {
  sideHeaderCellCenter,
  topHeaderCell,
} from '../../../../../../../../../utils/tailwindStyles';

/**-------------------------------------------------------**/
const HeaderCell = ({
  label,
  heightFull = true,
}: {
  label: string;
  heightFull?: boolean;
}) => {
  /**...JSX**/
  return (
    <div
      className={`${sideHeaderCellCenter} w-full ${
        heightFull ? 'h-full' : ''
      } `}
    >
      <p>{label}</p>
    </div>
  );
};

export default HeaderCell;
