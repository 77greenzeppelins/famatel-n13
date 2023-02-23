import React, { ReactNode } from 'react';

const AllTablesContainer: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className="flex flex-col w-full gap-16">{children}</div>;
};

export default AllTablesContainer;
