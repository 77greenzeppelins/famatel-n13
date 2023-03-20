import React from 'react';

const SideHeader: React.FunctionComponent<{
  label: string;
  containerStyle?: string;
  textStyle?: string;
  isBreakAll?: boolean;
}> = ({ label, containerStyle, textStyle, isBreakAll = true }) => {
  return (
    <div
      className={`flex items-center px-2 py-2 border-x-[1px] border-dark  duration-300 ease-in delay-100 bg-greyShade2 text-light group-hover:bg-corpo ${
        containerStyle ? containerStyle : ''
      }`}
    >
      <p
        className={`text-left text-[0.75rem] xs:text-[0.75rem] lg:text-[0.75rem] xxl:text-[0.75rem] tracking-[1px] lg:tracking-[0.125rem] word-spacing-01 lg:word-spacing-0125 select-none ${
          isBreakAll && 'break-all'
        } ${textStyle ? textStyle : 'text-light'}`}
      >
        {label}
      </p>
    </div>
  );
};

export default SideHeader;
