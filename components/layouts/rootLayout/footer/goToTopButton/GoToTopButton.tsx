import React from 'react';
/**Components**/
// import ArrowButton from '../../../../_basicComponents/buttons/arrowButton/ArrowButton';
import ChevronTopIcon from '../../../../SVG/icons/ChevronTopIcon';
/**Aria Staff**/
// import { FocusRing } from 'react-aria';
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
    // <ArrowButton
    //   buttonStyle="flex items-center justify-start focus:outline-none disable pointer-events-auto "
    //   //___border border-greyShade2
    //   onClickHandler={handleClick}
    // >
    //   <ChevronLeftIcon
    //     className={`w-6 h-6`}
    //     strokeColor={corpoColors.grey}
    //     scale={1.2}
    //     strokeColorWhileHover={corpoColors.orange}
    //   />
    // </ArrowButton>
    //___doesn't work with <FocusRing> ???
    // <FocusRing focusRingClass="ring ring-offset-2 ring-offset-black ">
    <button
      aria-label={'przycisk'}
      onClick={handleClick}
      className={
        'relative fc flex-col gap-y-2 h-8 w-8 disable-soft group border border-greyShade1'
      }
      //___focus:outline-none
    >
      <ChevronTopIcon
        className={`w-6 h-6`}
        strokeColor={corpoColors.grey}
        scale={1.2}
        strokeColorWhileHover={corpoColors.orange}
      />
      {/* <p className="duration-300 ease-in delay-100 header-link-label text-grey group-hover:text-corpo">
        powrót do góry
      </p> */}
      {/* <ChevronTopIcon
        className={`w-6 h-6`}
        strokeColor={corpoColors.grey}
        scale={1.2}
        strokeColorWhileHover={corpoColors.orange}
      /> */}
    </button>
    // </FocusRing>
  );
};

export default GoToTopButton;
