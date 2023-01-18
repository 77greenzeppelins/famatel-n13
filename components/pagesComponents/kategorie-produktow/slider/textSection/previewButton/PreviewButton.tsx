import React, { Dispatch, SetStateAction } from 'react';
/**Components**/
import ListIcon from '../../../../../SVG/icons/ListIcon';
import AriaButton from '../../../../../_basicComponents/buttons/ariaButton/AriaButton';
/**Basic Data**/
import { corpoColors } from '../../../../../../data/_data';

/**-------------------------------------------**/
const PreviewButton: React.FunctionComponent<{
  setIsPreviewOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ setIsPreviewOpen }) => {
  /**JSX*/
  return (
    <div className="h-[36px] w-full">
      <AriaButton
        // onClick={showSubcategories}
        specialOnClickHandler={() => {
          console.log('.................');
          setIsPreviewOpen(prev => !prev);
        }}
        controlsSet={{ background: corpoColors.greyTint1 }}
        controlsStart={{
          // background: 'transparent', //dark
          background: corpoColors.dark, //background color
          transition: { duration: 0.4 },
        }}
        buttonStyle="flex items-center justify-between gap-4 h-full w-full border border-greyTint1 hover:border-corpo rounded-sm bg-transparent focus:outline-none group"
      >
        <p
          className={`header-link-label text-greyTint1 group-hover:text-corpo ease-in duration-300 px-2`}
        >
          Szybki podgląd kategorii
        </p>
        <ListIcon containerStyle="fc h-full aspect-square stroke-greyTint1 group-hover:stroke-corpo group-hover:translate-x-1 ease-in duration-300 scale-[0.75] origin-center" />
      </AriaButton>
    </div>
  );
};

export default PreviewButton;
