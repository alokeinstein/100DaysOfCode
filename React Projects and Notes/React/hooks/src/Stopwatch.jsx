import { useRef, useState } from "react";

const Stopwatch = () => {
  const [now, setNow] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const interval = useRef(null);

  function handleStart() {
    setNow(Date.now());
    setStartTime(Date.now());
  }

  clearInterval(interval.current);
  interval.current = setInterval(() => {
    setNow(Date.now());
  }, 10);

  function handleStop() {
    clearInterval(interval.current);
  }

  let timeInSec = 0;
  if (now != null && startTime != null){
    timeInSec = (now - startTime) / 1000;//now-startTime gives the value in millisecond to convert it into second i have divided it from 1000
  }
    return (
      <div>
        <h1>STOPWATCH</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <h2>{timeInSec}</h2>
      </div>
    );
};

export default Stopwatch;
