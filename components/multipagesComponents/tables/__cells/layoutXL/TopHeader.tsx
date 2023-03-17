import React from 'react';

const TopHeader: React.FunctionComponent<{
  label: string;
  containerStyle?: string;
  textStyle?: string;
  isBreakAll?: boolean;
}> = ({ label, textStyle, containerStyle, isBreakAll = true }) => {
  return (
    <div
      className={`fc px-2 py-[10px] border-x-[1px] border-dark bg-greyShade2 text-light text-center ${
        containerStyle ? containerStyle : ''
      }`}
    >
      <p
        className={`text-center text-[0.75rem] xs:text-[0.75rem] lg:text-[0.75rem] xxl:text-[0.75rem] tracking-[1px] lg:tracking-[0.125rem] word-spacing-01 lg:word-spacing-0125 select-none ${
          isBreakAll && 'break-all'
        }  ${textStyle ? textStyle : 'text-light'}`}
      >
        {label}
      </p>
    </div>
  );
};

export default TopHeader;
