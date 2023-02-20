import React from 'react';
/**Components**/
import RowWithSideHeader from '../../../../../multipagesComponents/tables/diyTable/rowWithSideHeader/RowWithSideHeader';
/**TS**/
import { IF_ProductTechDataSchucoTablicowe } from '../../../../../../utils/TS/typeScriptStaff';
/**Tailwind Styles**/
import {
  vertGap,
  horizGap,
  sideHeaderCellCenter,
  bodyCell,
} from '../../../../../../utils/tailwindStyles';

/**----------------------------------**/
const TechSpecTable: React.FunctionComponent<
  IF_ProductTechDataSchucoTablicowe
> = ({ productTechData }) => {
  /**JSX**/
  return (
    <div
      data-component="TablesSection___container"
      className="flex flex-col gap-10"
    >
      <div className={`flex flex-col w-full ${horizGap}`}>
        {productTechData.line1 ? (
          <div className={`grid grid-cols-[2fr_repeat(6,1fr)] ${vertGap} `}>
            <RowWithSideHeader
              rowData={productTechData.line1}
              customeHeader={'bg-dark'}
            />
          </div>
        ) : null}
        {productTechData.line2 ? (
          <div
            className={`grid grid-cols-[2fr_repeat(6,1fr)] ${vertGap} group`}
          >
            <RowWithSideHeader
              rowData={productTechData.line2}
              customeHeader={sideHeaderCellCenter}
            />
          </div>
        ) : null}
        {productTechData.connectionType ? (
          <div className={`grid grid-cols-[2fr_6fr] ${vertGap} group`}>
            <RowWithSideHeader
              rowData={productTechData.connectionType}
              customeHeader={sideHeaderCellCenter}
            />
          </div>
        ) : null}
        {productTechData.mm ? (
          <div className={`grid grid-cols-[2fr_6fr] ${vertGap} group`}>
            <RowWithSideHeader
              rowData={productTechData.mm}
              customeHeader={sideHeaderCellCenter}
            />
          </div>
        ) : null}
        {productTechData.weight ? (
          <div className={`grid grid-cols-[2fr_6fr] ${vertGap} group`}>
            <RowWithSideHeader
              rowData={productTechData.weight}
              customeHeader={sideHeaderCellCenter}
            />
          </div>
        ) : null}
      </div>
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
