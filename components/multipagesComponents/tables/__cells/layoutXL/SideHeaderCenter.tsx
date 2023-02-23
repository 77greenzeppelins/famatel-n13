import React from 'react';

const SideHeaderCenter: React.FunctionComponent<{
  label: string;
  containerStyle?: string;
  textStyle?: string;
}> = ({ label, containerStyle, textStyle }) => {
  return (
    <div
      className={`fc px-2 py-2 border-x-[1px] border-dark  duration-300 ease-in delay-100 bg-greyShade2 text-light group-hover:bg-corpo ${
        containerStyle ? containerStyle : ''
      }`}
    >
      <p
        className={`text-center text-[0.75rem] xs:text-[0.75rem] lg:text-[0.75rem] xxl:text-[0.75rem] tracking-[1px] lg:tracking-[0.125rem] word-spacing-01 lg:word-spacing-0125 select-none break-all ${
          textStyle ? textStyle : 'text-light'
        }`}
      >
        {label}
      </p>
    </div>
  );
};

export default SideHeaderCenter;
