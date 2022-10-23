import React from 'react';
import { useState, useEffect } from 'react';

const getTimerFormat = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${hours > 9 ? hours : '0' + hours}:${
    minutes > 9 ? minutes : '0' + minutes
  }:${seconds > 9 ? seconds : '0' + seconds}`;
};

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return <div>{getTimerFormat(count)}</div>;
};

export default Timer;
