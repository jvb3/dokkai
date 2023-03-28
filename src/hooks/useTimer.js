import { useState, useEffect } from "react";

function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  function handleStartTimer() {
    setIsTimerStarted(true);
    setIsTimerPaused(false);
  }
  function handlePauseTimer() {
    setIsTimerPaused(true);
  }
  function handleResetTimer() {
    setSeconds(0);
    setMinutes(0);
    setIsTimerPaused(false);
    setIsTimerStarted(false);
  }

  useEffect(() => {
    let intervalId;
    if (isTimerStarted && !isTimerPaused) {
      intervalId = setInterval(() => {
        if (seconds === 59) {
          setSeconds(0);
          setMinutes((prevMinutes) => prevMinutes + 1);
        } else {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isTimerStarted, isTimerPaused, seconds, setSeconds]);

  return [
    seconds,
    minutes,
    handleStartTimer,
    handlePauseTimer,
    handleResetTimer,
  ];
}

export default useTimer;
