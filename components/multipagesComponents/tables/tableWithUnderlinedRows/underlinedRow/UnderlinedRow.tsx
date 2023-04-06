import React from 'react';

const UnderlinedRow: React.FunctionComponent<{
  rowData: string[] | string;
  rowContainerStyle?: string;
  cellsStyles?: string[] | string;
  textStyle?: string[];
  fakeUnderline?: string;
}> = ({
  rowData,
  rowContainerStyle,
  cellsStyles,
  textStyle,
  fakeUnderline,
}) => {
  /**...**/
  const createCells = () => {
    if (Array.isArray(rowData)) {
      return rowData.map((cellText, i) => {
        //___if you pass "string[]", each cell can have unique style...
        const cellStyles = cellsStyles && cellsStyles[i];
        return (
          <div key={i} className={cellStyles ? cellStyles : 'w-[50%] '}>
            {' '}
            <p
              className={
                textStyle
                  ? textStyle[i]
                  : 'p-small text-grey group-hover:text-light ease-in duration-300 disable'
              }
            >
              {cellText}
            </p>{' '}
          </div>
        );
      });
    } else {
      return (
        <div className="w-full ">
          {' '}
          <p
            className={
              textStyle
                ? textStyle[0]
                : 'header-link-label text-grey group-hover:text-light ease-in duration-300 disable'
            }
          >
            {rowData}
          </p>{' '}
        </div>
      );
    }
  };
  /**JSX**/
  return (
    <div
      data-component="UnderlinedRow__container"
      className={rowContainerStyle ? rowContainerStyle : 'relative flex group'}
    >
      {createCells()}
      <div
        className={
          fakeUnderline
            ? fakeUnderline
            : 'absolute inset-0 flex border-b border-greyShade1  group-hover:border-grey ease-in duration-300'
        }
      />
    </div>
  );
};

export default UnderlinedRow;

{
  /* {rowData.map((cellText, i) => {
        //___each cell can have unique style...
        const cellStyles = cellsStyles && cellsStyles[i];
        return (
          <div key={i} className={cellStyles ? cellStyles : 'width-[50%]'}>
            {' '}
            <p
              className={
                textStyle
                  ? textStyle
                  : 'header-link-label text-grey group-hover:text-light ease-in duration-300 disable'
              }
            >
              {cellText}
            </p>{' '}
          </div>
        );
      })} */
}
