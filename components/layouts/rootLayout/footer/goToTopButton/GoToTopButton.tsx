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
      className={'relative fc flex-col gap-y-2 h-8 w-8 disable-soft bg-corpo'}
    >
      <ChevronTopIcon
        className={`w-6 h-6`}
        strokeColor={corpoColors.dark}
        scale={1.2}
        strokeColorWhileHover={corpoColors.light}
      />
    </button>
  );
};

export default GoToTopButton;
