import React from 'react';
/**Components**/
import UnderlinedRow from './underlinedRow/UnderlinedRow';

/**-------------------------------------------------------**/
const TableWithUnderlinedRows: React.FunctionComponent<{
  rowsData?: string[][] | string[];
  tableContainerStyle?: string;
  rowContainerStyle?: string;
  cellsStyles?: string[];
  textStyle?: string[];
}> = ({
  rowsData,
  tableContainerStyle,
  rowContainerStyle,
  cellsStyles,
  textStyle,
}) => {
  /**JSX**/
  return (
    <div
      data-component="TableWithUnderlinedRows__container"
      className={
        tableContainerStyle
          ? tableContainerStyle
          : 'w-full flex flex-col gap-y-4'
      }
    >
      {rowsData?.map((rowData, i) => (
        <UnderlinedRow
          key={i}
          rowData={rowData}
          rowContainerStyle={rowContainerStyle}
          cellsStyles={cellsStyles}
          textStyle={textStyle}
        />
      ))}
    </div>
  );
};

export default TableWithUnderlinedRows;

/*
Case:
___1
const tableTextStyle =
  'p-small text-grey group-hover:text-light ease-in duration-300 disable';
___2
const rozlacznikiBezpieczenstwaGeneralFeatures_1_data = [
  ['Stopień ochrony: ', 'IP55'],
  ['Odporność na uderzenie: ', 'IK06'],
  ['Wymiary (sz × w × g)', '96,5 x 131 x 105,50 mm'],
  ['Waga ', '0.310kg'],
  ['Norma: ', 'CEI EN 60947-3'],
  //___
  ['Laying temperature: ', '-5°C +40°C'],
  ['Operating temperature: ', '60°C'],
  ['Test rozżarzonego drutu: ', '650°C '],
  ['Bieguny: ', '2P - 3P - 4P'],
  ['Napięcie izolacji: ', '690 V'],
  ['Rated voltage pulses: ', '6 KV'],
  ['Rated thermal current inside the box: ', '40 A'],
  ['Rated conditional short-circuit: ', '10 KA'],
  ['Częstotliwość: ', '50/60 Hz'],
  ['Connecting conductors flexible / solid mm²: ', '1.5 / 10'],
];
___3
<TableWithUnderlinedRows
    rowsData={rozlacznikiBezpieczenstwaGeneralFeatures_1_data}
    cellsStyles={['w-[55%]', 'w-[45%] pl-[10%]']}
    textStyle={[tableTextStyle, tableTextStyle]}
/>

*/
