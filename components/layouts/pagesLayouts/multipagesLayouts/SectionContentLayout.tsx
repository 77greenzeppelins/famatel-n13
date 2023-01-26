import React, { ReactNode } from 'react';

const SectionContentLayout: React.FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  /**JSX**/
  return <div className="flex flex-col gap-y-4">{children}</div>;
};

export default SectionContentLayout;
