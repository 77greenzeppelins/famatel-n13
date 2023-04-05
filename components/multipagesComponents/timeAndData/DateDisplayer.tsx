import React from 'react';
import useDate from '../../../utils/hooks/useDate';

/**HardCoded Data**/
// const textStyle =
//   'text-greyShade2 text-center text-[0.5rem] xs:text-[0.625rem] sm:text-[0.75rem] xxxl:text-[1.125rem] tracking-[0.09rem] leading-normal group-hover:text-light ease-in duration-300';

/**------------------------------**/
const DateDisplayer: React.FC<{ textStyle?: string }> = ({ textStyle }) => {
  const { year, month, day, weekday } = useDate();

  const createMonthName = () => {
    switch (month) {
      case 0:
        return 'stycznia';
      case 1:
        return 'lutego';
      case 2:
        return 'marca';
      case 3:
        return 'kwietnia';
      case 4:
        return 'maja';
      case 5:
        return 'czerwca';
      case 6:
        return 'lipca';
      case 7:
        return 'sierpnia';
      case 8:
        return 'września';
      case 9:
        return 'października';
      case 10:
        return 'listopada';
      case 11:
        return 'grudnia';
      default:
        console.log('I love web development');
    }
  };

  /**JSX**/
  return (
    <div className="flex gap-[4px] ">
      <p className={textStyle}>{weekday}, </p>
      <p className={textStyle}>{day} </p>
      <p className={textStyle}>{createMonthName()} </p>
      <p className={textStyle}>{year} </p>
    </div>
  );
};

export default DateDisplayer;
