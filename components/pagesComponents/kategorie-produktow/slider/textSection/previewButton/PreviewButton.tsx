import React from 'react';
/**Components**/
import ListIcon from '../../../../../SVG/icons/ListIcon';
import AriaJSButton from '../../../../../_basicComponents/buttons/ariaIconButton/AriaIconButton';
/**Basic Data**/
import { corpoColors } from '../../../../../../data/_data';

/**-------------------------------------------**/
const PreviewButton = () => {
  /**JSX*/
  return (
    <div className="h-[40px]">
      <AriaJSButton
        // onClick={showSubcategories}
        specialOnClickHandler={() => {
          console.log('.................');
        }}
        controlsSet={{ background: corpoColors.greyTint1 }}
        // controlsStart={{
        //   background: corpoColors.greyShade1, //dark
        //   transition: { duration: 0.4 },
        // }}
        controlsStart={{
          // background: 'transparent', //dark
          background: corpoColors.dark, //background color
          transition: { duration: 0.4 },
        }}
        buttonStyle="fc gap-4 h-full border border-greyTint1 hover:border-corpo rounded-sm bg-transparent focus:outline-none group"
      >
        <p
          className={`header-link-label text-greyTint1 group-hover:text-corpo ease-in duration-300 px-2`}
        >
          Szybki podgląd kategorii
        </p>
        <ListIcon containerStyle="fc h-full aspect-square stroke-greyTint1 group-hover:stroke-corpo group-hover:translate-x-1 ease-in duration-300 scale-[0.75] origin-center" />
      </AriaJSButton>
    </div>
  );
};

export default PreviewButton;
