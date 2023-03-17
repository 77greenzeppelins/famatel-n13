import React from 'react';
/**HardCoded Staff*/
const defaultContainerStyle =
  'fc py-2 px-[1px] border-x-[1px] border-dark bg-greyTint2 group-hover:bg-light delay-100 ease-in duration-300 select-none';

/**--------------------------------------**/
const BodyCell: React.FunctionComponent<{
  label: string;
  containerStyle?: string;
  textStyle?: string;
  isBreakAll?: boolean;
}> = ({ label, textStyle, containerStyle, isBreakAll = true }) => {
  /**JSX*/
  return (
    <div className={containerStyle ? containerStyle : defaultContainerStyle}>
      <p
        className={`text-center text-[0.75rem]  lg:text-[0.75rem] xxl:text-[0.75rem] tracking-[1px] lg:tracking-[0.125rem] word-spacing-01 lg:word-spacing-0125 select-none ${
          isBreakAll && 'break-all'
        }  ${textStyle ? textStyle : 'text-dark'}`}
      >
        {label}
      </p>
    </div>
  );
};

export default BodyCell;
