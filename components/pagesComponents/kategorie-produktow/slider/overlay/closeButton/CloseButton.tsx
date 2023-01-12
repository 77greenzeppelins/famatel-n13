import React, { Dispatch, SetStateAction } from 'react';
/**Components**/
import AriaButton from '../../../../../_basicComponents/buttons/ariaButton/AriaButton';
import XMarkIcon from '../../../../../SVG/icons/XmarkIcon';
/**Basic Data**/
import { corpoColors } from '../../../../../../data/_data';

const CloseButton: React.FunctionComponent<{
  setIsPreviewOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ setIsPreviewOpen }) => {
  /**JSX**/
  return (
    // <div className="fc w-full h-full">
    <AriaButton
      specialOnClickHandler={() => {
        //   console.log('.................');
        setIsPreviewOpen(prev => !prev);
      }}
      controlsSet={{ background: corpoColors.greyTint1 }}
      controlsStart={{
        // background: 'transparent', //dark
        background: corpoColors.dark, //background color
        transition: { duration: 0.4 },
      }}
      buttonStyle="fc gap-4 h-full border border-greyTint1 hover:border-corpo rounded-sm bg-transparent focus:outline-none group"
    >
      <XMarkIcon
        containerStyle="fc h-full aspect-square stroke-greyTint1 group-hover:stroke-corpo group-hover:rotate-[0.9] ease-in duration-300 scale-[0.75] origin-center"
        //___group-hover:rotate-90
      />
    </AriaButton>
    // </div>
  );
};

export default CloseButton;
