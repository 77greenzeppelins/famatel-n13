import React from 'react';
/**HardCoded Data*/
const headerColors = [
  'bg-grey',
  'bg-grey',

  'bg-[#ceae0e]',
  'bg-[#134976]',
  'bg-[#a01b29]',
  'bg-[#474a50]',
];

const CatalogTableRow: React.FunctionComponent<{
  rowData: string[] | (string | undefined)[];
}> = ({ rowData }) => {
  return (
    <>
      {rowData.map((label, index) => (
        <div className={`fc py-1 ${headerColors[index]}`} key={index}>
          <p className="p-medium text-center text-light">{label}</p>
        </div>
      ))}
    </>
  );
};

export default CatalogTableRow;
