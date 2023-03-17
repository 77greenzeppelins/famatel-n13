import React from 'react';

const BodyRow: React.FunctionComponent<{
  rowData: string[];
  bodyRowStyle: string;
}> = ({ rowData, bodyRowStyle }) => {
  return (
    <div className={bodyRowStyle}>
      {rowData.map((cellData, i) => (
        <div
          className=" fc bg-greyTint2 py-2 group-hover:bg-light delay-50 ease-in duration-300 divide-dark"
          key={i}
        >
          <p className="text-dark text-center p-small">{cellData}</p>
        </div>
      ))}
    </div>
  );
};

export default BodyRow;
