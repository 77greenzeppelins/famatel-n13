import React, { ReactNode } from 'react';

const PageContentLayout: React.FunctionComponent<{
  children: ReactNode;
  divStyle?: string;
}> = ({ children, divStyle }) => {
  /**JSX**/
  return (
    <div
      className={
        divStyle
          ? divStyle
          : 'flex flex-col gap-y-[50px] lg:gap-y-[50px] pt-[50px]'
      }
    >
      {children}
    </div>
  );
};

export default PageContentLayout;
