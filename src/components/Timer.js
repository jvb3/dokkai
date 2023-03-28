import React from "react";
import useTimer from "../hooks/useTimer";
import {
  Container,
  IconContainer,
  Time,
  PlayIcon,
  PauseIcon,
  StopIcon,
} from "../styles/Timer.styled";

function Timer({ showTimer }) {
  const [
    seconds,
    minutes,
    handleStartTimer,
    handlePauseTimer,
    handleResetTimer,
  ] = useTimer();
  return (
    <Container showTimer={showTimer}>
      <Time>
        <span>{minutes}:</span>
        <span
          style={{
            display: "inline-block",
            width: "40px",
          }}
        >
          {seconds.toString().padStart(2, "0")}
        </span>
      </Time>
      <IconContainer>
        <PlayIcon onClick={handleStartTimer} />
        <PauseIcon onClick={handlePauseTimer} />
        <StopIcon onClick={handleResetTimer} />
      </IconContainer>
    </Container>
  );
}

export default Timer;
