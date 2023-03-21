import React, { ReactNode } from 'react';
/**Components*/
import SmallPseudoHeader from '../../../../multipagesComponents/pseudoHeaders/SmallPseudoHeader.tsx/SmallPseudoHeader';

const SectionWithTable: React.FunctionComponent<{
  label: string;
  children: ReactNode;
}> = ({ label, children }) => {
  /**JSX**/
  return (
    <div className="flex flex-col w-full h-full gap-y-6">
      <SmallPseudoHeader
        text={label}
        hasBox={true}
        hasVerticalOrnament={false}
      />
      {children}
    </div>
  );
};

export default SectionWithTable;
