import React, { ReactNode, ReactElement, cloneElement } from 'react';

interface Props {
  //   children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  children: ReactElement;
}

const ReusableComponent: React.FC<Props> = ({ children }) => {
  const value2 = true;
  return (
    <div className="fc h-[200px] bg-vY">
      {React.cloneElement(children, { value: value2 })}
    </div>
  );
};

export { ReusableComponent };
