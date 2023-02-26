import React from 'react';
/**Components**/
import SquareOverlay from '../../../../../multipagesComponents/overlays/squareOverlay/SquareOverlay';
/**HardCoded Data*/
const cellsNumber = 16;
const columns = 4;
const gridStyle = 'grid-cols-[repeat(4,_1fr)]';
const delayPerPixel = 0.0008;
const cellStyle = '';

/**---------------------------------------**/
const OverlaySection = () => {
  /**JSX**/
  return (
    <div className="absolute inset-0 pointer-events-none bg-grey">
      {/* <SquareOverlay
        itemsNumber={cellsNumber}
        columns={columns}
        gridStyle={gridStyle}
        cellStyle={cellStyle}
        delayPerPixel={delayPerPixel}
      /> */}
    </div>
  );
};

export default OverlaySection;
