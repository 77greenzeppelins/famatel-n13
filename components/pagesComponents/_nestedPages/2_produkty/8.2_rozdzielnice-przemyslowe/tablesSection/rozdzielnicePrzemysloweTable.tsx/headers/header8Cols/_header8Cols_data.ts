import { ITechSpecData } from './_header8Cols_TS';

const header8ColumnsData: ITechSpecData = {
  mainGrid:
    // 'grid grid-template-columns: repeat(8, 1fr) grid-rows-4  gap-[0.125rem] w-full',
    'grid grid-columns: repeat(8, 1fr) grid-rows-4  gap-[0.125rem] w-full',

  mainGridItemStyle: 'col-start-2 col-span-7 ',
  innerGridStyle: 'grid grid-cols-[4fr_3fr] gap-[0.25rem]',
  cellsGridStyle16A: 'grid grid-cols-[1fr_1fr_1fr_1fr] gap-[0.125rem]',
  cellsGridStyle32A: 'grid grid-cols-[1fr_1fr_1fr] gap-[0.125rem]',
  modelsHeader: {
    label: 'Model',
    gridItemStyle: 'col-end-2 row-span-4',
  },
  mainHeader: {
    label: 'Gniazda IP44',
    gridItemStyle: 'col-start-2 col-span-7',
  },
  ampers: {
    labels: ['16A', '32A'],
  },
  poles: {
    labels16A: ['3P + T', '3P + T', '3P + T + N', '2P + TTL'],
    labels32A: ['2P + T', '3P + T', '3P + T + N'],
  },
  sockets: {
    labels16A: ['220V', '400V', '400V', '220V'],
    labels32A: ['220V', '400V', '400V'],
  },
};

export { header8ColumnsData };
