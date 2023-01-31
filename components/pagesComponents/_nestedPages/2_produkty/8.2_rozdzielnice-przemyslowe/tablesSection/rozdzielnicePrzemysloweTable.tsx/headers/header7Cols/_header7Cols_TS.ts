interface IHeader7ColumnsData {
  columnsNumber: number;
  mainGrid: string;
  modelsHeader: {
    label: string;
    gridItemStyle: string;
  };
  mainHeader: { label: string; gridItemStyle: string };
  ampers: {
    gridItemStyle: string;
    gridStyle: string;
    labels: string[];
  };
  poles: {
    gridItemStyle: string;
    gridStyle: string;
    labels16A: string[];
    labels32A: string[];
    labels63A: string[];
  };
  sockets: {
    gridItemStyle: string;
    gridStyle: string;
    labels16A: string[];
    labels32A: string[];
    labels63A: string[];
  };
}

export type { IHeader7ColumnsData };
