import { IHeader7ColumnsData } from './_header7Cols_TS';
const mainGridItemStyle = 'col-start-2 col-span-6 ';
const innerGridStyle = 'grid grid-cols-[3fr_2fr_1fr] gap-[0.25rem]';

const header7ColumnsData: IHeader7ColumnsData = {
  columnsNumber: 7,
  mainGrid:
    'grid grid-template-columns: repeat(7, minmax(0, 1fr)) grid-rows-4  gap-[0.125rem] w-full',
  modelsHeader: {
    label: 'Model',
    //   gridItemStyle: 'col-span-1 row-span-4 bg-grey',
    gridItemStyle: 'col-end-2 row-span-4 ',
  },
  mainHeader: {
    label: 'Gniazda IP44',
    //   gridItemStyle: 'col-span-6 row-span-1 bg-grey',
    gridItemStyle: 'col-start-2 col-span-6 ',
  },
  ampers: {
    gridItemStyle: mainGridItemStyle,
    gridStyle: innerGridStyle,
    labels: ['16A', '32A', '63A'],
  },
  poles: {
    gridItemStyle: mainGridItemStyle,
    gridStyle: innerGridStyle,
    labels16A: ['3P+T', '3P+T+N', '2P+TTL'],
    labels32A: ['3P+T', '3P+T+N'],
    labels63A: ['3P+T+N'],
  },
  sockets: {
    gridItemStyle: mainGridItemStyle,
    gridStyle: innerGridStyle,
    labels16A: ['400V', '400V', '220V'],
    labels32A: ['400V', '400V'],
    labels63A: ['400V'],
  },
};

export { header7ColumnsData };
