import React from 'react';
/**Hardcoded Data**/
const containerDefaultStyle = '';

const SmallPseudoHeader: React.FunctionComponent<{
  text: string;
  containerStyle?: string;
}> = ({ text, containerStyle }) => {
  return (
    <div
      className={`${
        containerStyle ? containerStyle : containerDefaultStyle
      } flex disable`}
    >
      <div className="h-auto w-[10px] border-l border-corpo" />
      <p className={`header-link-label text-grey `}>{text}</p>
    </div>
  );
};

export default SmallPseudoHeader;
