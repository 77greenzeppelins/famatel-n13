import React from 'react';

const UnderlinedRow: React.FunctionComponent<{
  rowData: string[];
  rowContainerStyle?: string;
  cellsStyles?: string[];
  textStyle?: string;
  fakeUnderline?: string;
}> = ({
  rowData,
  rowContainerStyle,
  cellsStyles,
  textStyle,
  fakeUnderline,
}) => {
  /**JSX**/
  return (
    <div
      data-component="UnderlinedRow__container"
      className={rowContainerStyle ? rowContainerStyle : 'relative flex group '}
    >
      {rowData.map((cellText, i) => {
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
      })}
      <div
        className={
          fakeUnderline
            ? fakeUnderline
            : 'absolute inset-0 flex border-b border-light opacity-60 group-hover:opacity-100 ease-in duration-300'
        }
      />
    </div>
  );
};

export default UnderlinedRow;
