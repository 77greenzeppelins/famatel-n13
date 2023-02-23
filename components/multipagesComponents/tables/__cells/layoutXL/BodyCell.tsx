import React from 'react';

const BodyCell: React.FunctionComponent<{
  label: string;
  containerStyle?: string;
  textStyle?: string;
}> = ({ label, textStyle, containerStyle }) => {
  return (
    <div
      className={`fc py-2 px-[1px] border-x-[1px] border-dark bg-greyTint2 group-hover:bg-light delay-100 ease-in duration-300 select-none ${
        containerStyle ? containerStyle : ''
      }`}
    >
      <p
        className={`text-center text-[0.75rem]  lg:text-[0.75rem] xxl:text-[0.75rem] tracking-[1px] lg:tracking-[0.125rem] word-spacing-01 lg:word-spacing-0125 select-none break-all ${
          textStyle ? textStyle : 'text-dark'
        }`}
      >
        {label}
      </p>
    </div>
  );
};

export default BodyCell;
