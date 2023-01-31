interface ITechSpecData {
  mainGrid: string;
  mainGridItemStyle: string;
  innerGridStyle: string;
  cellsGridStyle16A: string;
  cellsGridStyle32A: string;
  modelsHeader: {
    label: string;
    gridItemStyle: string;
  };
  mainHeader: { label: string; gridItemStyle: string };
  ampers: {
    labels: string[];
  };
  poles: {
    labels16A: string[];
    labels32A: string[];
  };
  sockets: {
    labels16A: string[];
    labels32A: string[];
  };
}

export type { ITechSpecData };
