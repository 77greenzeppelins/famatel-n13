import React from 'react';
/**Components**/
import RowWithSideHeader from '../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
import BodyCell from '../../../../../multipagesComponents/tables/__cells/layoutXL/BodyCell';
/**TS**/
import { IF_ProductTechDataSchucoTablicowe } from '../../../../../../utils/TS/typeScriptStaff';
/**Tailwind Styles**/
import {
  horizGap,
  sideHeaderCellCenter,
} from '../../../../../../utils/tailwindStyles';

/**----------------------------------------------**/
const TechSpecTable: React.FunctionComponent<
  IF_ProductTechDataSchucoTablicowe
> = ({ productTechData }) => {
  /**JSX**/
  return (
    <div className={`flex flex-col w-full ${horizGap}`}>
      {productTechData.line1 ? (
        <div className={`grid grid-cols-[2fr_6fr] `}>
          <div className={`grid grid-cols-[repeat(6,1fr)] col-start-2 `}>
            {productTechData.line1.map((label, i) => (
              <BodyCell key={i} label={label} />
            ))}
          </div>
        </div>
      ) : null}
      {productTechData.line2 ? (
        <div className={`grid grid-cols-[2fr_repeat(6,1fr)] group`}>
          <RowWithSideHeader rowData={productTechData.line2} centered={true} />
        </div>
      ) : null}
      {productTechData.connectionType ? (
        <div className={`grid grid-cols-[2fr_6fr] group`}>
          <RowWithSideHeader
            rowData={productTechData.connectionType}
            centered={true}
          />
        </div>
      ) : null}
      {productTechData.mm ? (
        <div className={`grid grid-cols-[2fr_6fr] group`}>
          <RowWithSideHeader
            rowData={productTechData.mm}
            customeHeader={sideHeaderCellCenter}
            centered={true}
          />
        </div>
      ) : null}
      {productTechData.weight ? (
        <div className={`grid grid-cols-[2fr_6fr] group`}>
          <RowWithSideHeader
            rowData={productTechData.weight}
            customeHeader={sideHeaderCellCenter}
            centered={true}
          />
        </div>
      ) : null}
    </div>
  );
};

export default TechSpecTable;

/**Handler**/
// const createContent = ({
//   i = 0,
//   label,
//   headerStyle,
//   cellsStyle,
// }: {
//   i: number;
//   label: string;
//   headerStyle: string;
//   cellsStyle: string;
// }) => {
//   if (i === 0) {
//     return (
//       <div className={headerStyle} key={i}>
//         {label}{' '}
//       </div>
//     );
//   }
//   return (
//     <div className={cellsStyle} key={i}>
//       <p>{label}</p>
//     </div>
//   );
// };
