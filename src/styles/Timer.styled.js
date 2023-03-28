import styled from "styled-components";

import { ImPlay2, ImPause, ImStop } from "react-icons/im";

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.black};
  width: 150px;
  height: 35px;
  color: ${(props) => props.theme.color.white};
  display: ${(props) => (props.showTimer ? "flex" : "none")};
  gap: 0.5;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

export const Time = styled.div`
  font-size: ${(props) => props.theme.fontSize.regular};
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const PlayIcon = styled(ImPlay2)`
  color: ${(props) => props.theme.color.white};

  :hover {
    cursor: pointer;
  }
`;

export const PauseIcon = styled(ImPause)`
  color: ${(props) => props.theme.color.white};

  :hover {
    cursor: pointer;
  }
`;

export const StopIcon = styled(ImStop)`
  color: ${(props) => props.theme.color.white};

  :hover {
    cursor: pointer;
  }
`;
