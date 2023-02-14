import React from 'react';
/**
 * used in "Adaptery przemyslowe"
 * used in "Niskie Napięcia Table"
 * concept: row witch some anomaly / glitch => one strange column
 */
/**---------------------------**/
const RowType_6 = ({
  rowData,
  rowContainerStyle,
  glitchedCellStyle,
  indexOfGlitch,
  typeOfGlitch,
}: {
  rowData: (string | string[])[];
  rowContainerStyle: string;
  glitchedCellStyle: string;
  indexOfGlitch: number;
  typeOfGlitch: number;
}) => {
  /**..................**/
  const createBackgroundStyle = ({
    glitchType,
    arrayIndex,
    label,
  }: {
    glitchType: number;
    arrayIndex: number;
    label: string[];
  }) => {
    switch (glitchType) {
      //___niskie napięcia table; last column in other / dark color
      case 1:
        return (
          <div key={arrayIndex} className={glitchedCellStyle}>
            <div className="fc row-start-1 row-end-2 w-full bg-greyShade1 py-2">
              <p className="p-small text-center pointer-events-none text-light">
                {label[0]}
              </p>
            </div>
            <div className="flex row-start-2 row-end-3 w-full gap-x-[2px]">
              <div className="fc w-full bg-greyShade1 py-2">
                <p className="p-small text-center pointer-events-none text-light">
                  {label[1]}
                </p>
              </div>
              <div className="fc w-full bg-greyShade1 py-2">
                <p className="p-small text-center pointer-events-none text-light">
                  {label[2]}
                </p>
              </div>
            </div>
          </div>
        );

      default:
        console.log('createBackgroundStyle.......');
    }
  };

  return (
    <div data-component="TableRow__container" className={rowContainerStyle}>
      {rowData.map((label, index) => {
        if (index === indexOfGlitch && Array.isArray(label)) {
          return createBackgroundStyle({
            glitchType: typeOfGlitch,
            arrayIndex: index,
            label,
          });
        }

        return (
          <div
            className={`relative fc py-2 border-x-[1px] border-dark`}
            key={index}
          >
            <div className="absolute inset-0 bg-greyShade1" />
            <p className="relative p-small text-center pointer-events-none text-light">
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default RowType_6;
