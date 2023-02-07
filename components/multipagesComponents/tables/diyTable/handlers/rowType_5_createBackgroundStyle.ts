const createBackgroundStyle = ({
  backGroundStyleCase,
  bgColors,
  rowDataLength,
  cellIndex = 0,
}: {
  backGroundStyleCase: number;
  bgColors: string[];
  rowDataLength?: number;
  cellIndex?: number;
}) => {
  switch (backGroundStyleCase) {
    //___niskie napięcia table; last column in other / dark color
    case 1:
      return bgColors[0];
    case 2:
      return rowDataLength && cellIndex < rowDataLength
        ? bgColors[0]
        : bgColors[1];
    default:
      console.log('createBackgroundStyle.......');
  }
};
export { createBackgroundStyle };
