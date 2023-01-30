import React, { useEffect, useState } from 'react';

const Clock: React.FunctionComponent<{
  city: string | string[];
  timeZone: string;
}> = ({ city, timeZone }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const UpdateTime = () => {
      let time = new Date().toLocaleTimeString('pl', {
        timeZone: timeZone,
        hourCycle: 'h24', // delats PM / AM
      });
      setCurrentTime(time);
    };
    const timeController = setInterval(UpdateTime, 1000);
    return () => clearInterval(timeController);
  }, [timeZone]);

  return <div className="">{currentTime}</div>;
};

export default Clock;

/**
 * <Clock city={'Dzierżoniów'} timeZone={'Europe/Warsaw'} />
 */
