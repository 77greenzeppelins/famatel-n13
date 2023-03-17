import React, { ReactNode } from 'react';

const SectionContentLayout: React.FunctionComponent<{
  children: ReactNode;
  divStyle?: string;
}> = ({ children, divStyle }) => {
  /**JSX**/
  return (
    <div className={divStyle ? divStyle : 'flex flex-col gap-y-4'}>
      {children}
    </div>
  );
};

export default SectionContentLayout;
