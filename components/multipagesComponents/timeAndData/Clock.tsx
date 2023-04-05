import React, { useEffect, useState } from 'react';

/**---------------------**/
const Clock: React.FC<{
  city: string | string[];
  timeZone: string;
  textStyle?: string;
}> = ({ city, timeZone, textStyle }) => {
  // const [currentTime, setCurrentTime] = useState('');
  const [currentTime2, setCurrentTime2] = useState(['', '']);

  useEffect(() => {
    const UpdateTime = () => {
      let time = new Date().toLocaleTimeString('pl', {
        timeZone: timeZone,
        hourCycle: 'h24', // delats PM / AM
      });
      let timePart2 = time.split(':')[2];
      let timePart1 = time.slice(0, 6);
      // setCurrentTime(time);
      setCurrentTime2([timePart1, timePart2]);
    };
    const timeController = setInterval(UpdateTime, 1000);
    return () => clearInterval(timeController);
  }, [timeZone]);

  return (
    <div className="flex items-end  w-[68px] sm:w-[94px] xl:w-[122px] ">
      {' '}
      <p className={textStyle}>{currentTime2[0]}</p>
      <p className="text-greyShade2 text-1xl xl:text-2xl tracking-[0.09rem]">
        {currentTime2[1]}
      </p>
    </div>
  );
};

export default Clock;

/**
 * <Clock city={'Dzierżoniów'} timeZone={'Europe/Warsaw'} />
 */
