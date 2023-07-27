import React from 'react';
import ChevronTopIcon from '../../../../SVG/icons/ChevronTopIcon';
/**Basic Data**/
import { corpoColors } from '../../../../../data/_data';

/**---------------------------------**/
const GoToTopButton: React.FC = () => {
  /**Handler **/
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  /**JSX**/
  return (
    <button
      aria-label={'Przycisk: Idź do początku strony'}
      role="button"
      onClick={handleClick}
      className={
        'relative fc flex-col gap-y-2 h-10 w-10 disable-soft border border-grey '
        //___hover:border-corpo transition duration-300 ease-in-out group
      }
    >
      <ChevronTopIcon
        svgStyle="w-6 h-6"
        // className={`w-6 h-6 origin-center group-hover:scale-125 group-hover:stroke-corpo duration-500 ease-in-out`}
        strokeColor={corpoColors.grey}
        scale={1.2}
        strokeColorWhileHover={corpoColors.orange}
      />
    </button>
  );
};

export default GoToTopButton;
