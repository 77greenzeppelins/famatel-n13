import React, { ReactNode } from 'react';

const PageContentLayout: React.FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  /**JSX**/
  return <div className="flex flex-col gap-y-[100px]">{children}</div>;
};

export default PageContentLayout;
