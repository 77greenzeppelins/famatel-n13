import React from 'react';
/**Components**/
import ArrowButton from '../../../../../_basicComponents/buttons/arrowButton/ArrowButton';
import XMarkIcon from '../../../../../SVG/icons/XmarkIcon';

/**-------------------------------------------------**/
const CloseButton: React.FunctionComponent<{
  productDescriptionOpener: React.Dispatch<React.SetStateAction<boolean>>;
  buttonStyle?: string;
}> = ({ productDescriptionOpener, buttonStyle }) => {
  return (
    <ArrowButton
      onClickHandler={() => productDescriptionOpener(false)}
      buttonStyle={buttonStyle}
    >
      <XMarkIcon containerStyle="origin-center w-6 h-6" />
    </ArrowButton>
  );
};

export default CloseButton;
