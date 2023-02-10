import React from 'react';
/**Components**/
/**TS**/
import { IF_ProductTechDataSchucoTablicowe } from '../../../../../../utils/TS/typeScriptStaff';

/**HardCoded Data**/
const vertGap = 'divide-x-[2px] divide-dark';
const horizGap = 'divide-y-[2px] divide-dark';
const topHeaderCell =
  'fc bg-greyShade1 py-2 px-[1px] text-light text-center p-small select-none';
const sideHeaderCell =
  'fc py-2 px-[1px] bg-greyShade1 text-light text-center p-small group-hover:bg-corpo delay-100 ease-in duration-300 select-none';
const bodyCell =
  'fc py-2 px-[1px] bg-greyTint1 text-dark text-center p-small group-hover:bg-light delay-100 ease-in duration-300 select-none';

/**Handler**/
const createContent = ({
  i = 0,
  label,
  headerStyle,
  cellsStyle,
}: {
  i: number;
  label: string;
  headerStyle: string;
  cellsStyle: string;
}) => {
  if (i === 0) {
    return (
      <div className={headerStyle} key={i}>
        {label}{' '}
      </div>
    );
  }
  return (
    <div className={cellsStyle} key={i}>
      <p>{label}</p>
    </div>
  );
};

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
          <div
            className={`grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] ${vertGap}`}
          >
            {productTechData.line1.map((label, i) => {
              return createContent({
                i: i,
                label: label,
                headerStyle: 'bg-dark',
                cellsStyle: topHeaderCell,
              });
            })}
          </div>
        ) : null}
        {productTechData.line2 ? (
          <div
            className={`grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] ${vertGap} group`}
          >
            {productTechData.line2.map((label, i) => {
              return createContent({
                i: i,
                label: label,
                headerStyle: sideHeaderCell,
                cellsStyle: bodyCell,
              });
            })}
          </div>
        ) : null}
        {productTechData.connectionType ? (
          <div className={`grid grid-cols-[2fr_6fr] ${vertGap} group`}>
            {productTechData.connectionType.map((label, i) => {
              return createContent({
                i: i,
                label: label,
                headerStyle: sideHeaderCell,
                cellsStyle: bodyCell,
              });
            })}
          </div>
        ) : null}
        {productTechData.mm ? (
          <div className={`grid grid-cols-[2fr_6fr] ${vertGap} group`}>
            {productTechData.mm.map((label, i) => {
              return createContent({
                i: i,
                label: label,
                headerStyle: sideHeaderCell,
                cellsStyle: bodyCell,
              });
            })}
          </div>
        ) : null}
        {productTechData.weight ? (
          <div className={`grid grid-cols-[2fr_6fr] ${vertGap} group`}>
            {productTechData.weight.map((label, i) => {
              return createContent({
                i: i,
                label: label,
                headerStyle: sideHeaderCell,
                cellsStyle: bodyCell,
              });
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TechSpecTable;
