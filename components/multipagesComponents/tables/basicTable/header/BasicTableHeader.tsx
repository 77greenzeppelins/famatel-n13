import React from 'react';

const BasicTableHeader: React.FunctionComponent<{
  tableHeader?: string | string[];
}> = ({ tableHeader }) => {
  return (
    <div className="relative fc w-full py-2 group bg-greyShade1 border-y-2 border-dark ">
      {/* <div className="absolute top-[1px] bottom-[1px] left-[1px] right-[1px] bg-dark" /> */}
      <p className="relative header-link-label text-light text-center ">
        {tableHeader}
      </p>
    </div>
  );
};

export default BasicTableHeader;
