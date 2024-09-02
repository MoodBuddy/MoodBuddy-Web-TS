import React, { useState, useEffect } from 'react';
import { differenceInSeconds } from 'date-fns';

const Timer = ({ displayTime }) => {
  const calculateTimeLeft = () => {
    const currentTime = new Date();
    const difference = differenceInSeconds(displayTime, currentTime);

    if (difference <= 0) {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const hours = Math.floor(difference / 3600);
    const minutes = Math.floor((difference % 3600) / 60);
    const seconds = difference % 60;

    return {
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const calculateAndSetTimeLeft = () => {
      setTimeLeft(calculateTimeLeft());
    };

    if (displayTime) {
      calculateAndSetTimeLeft();
      const timer = setInterval(calculateAndSetTimeLeft, 1000);

      return () => clearInterval(timer);
    }
  }, [displayTime]);

  const { hours, minutes, seconds } = timeLeft;

  return (
    <div className="w-[620px] h-[128px] rounded-[28px] bg-white border-[3px] border-black">
      <div className="text-[99px] flex justify-center relative top-[-12px]">
        {hours < 10 ? `0${hours}` : hours} :{' '}
        {minutes < 10 ? `0${minutes}` : minutes} :{' '}
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
};

export default Timer;
