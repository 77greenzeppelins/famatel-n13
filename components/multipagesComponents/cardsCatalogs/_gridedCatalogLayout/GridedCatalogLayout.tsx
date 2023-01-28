import React, { ReactNode } from 'react';

/**--------------------------------------------------------------------------------**/
const GridedCatalogLayout: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  /**JSX**/
  return (
    <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr] gap-6 xl:gap-10 w-full">
      {children}
    </div>
  );
};

export default GridedCatalogLayout;
