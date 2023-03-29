import styled, { keyframes } from "styled-components";

const fadeInPeriod = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const moveHeader = keyframes`
from{
  transform: translateX(-100%);
  opacity: 0;

}
to{
  transform: translateX(0);
  opacity: 1;
}
`;

const moveTextArea = keyframes`

from{

  transform: translateX(99%);
  opacity: 0;

}

to{

  transform: translateX(0);
  opacity: 1;

}

`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.blue};
`;

export const Header = styled.div`
  animation-timing-function: ease-in;
  animation-name: ${(props) => props.animateFirst && moveHeader};
  animation-duration: 1s;
  color: ${(props) => props.theme.color.black};
  padding: 1rem;
  font-size: 75px;
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const Period = styled.span`
  animation-name: ${(props) => props.animateSecond && fadeInPeriod};
  animation-duration: 500ms;
  color: ${(props) => props.theme.color.red};
`;

export const TextArea = styled.textarea`
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.fontFamily.japanese};
  font-size: 18px;
  border: 1px solid ${(props) => props.theme.color.black};
  animation-name: ${(props) => props.animateFirst && moveTextArea};
  animation-duration: 1s;
  animation-timing-function: ease-in;
  overflow: hidden;
  resize: none;
  outline: none;
  width: 75%;
  height: 15rem;
  padding: 1rem;
  border-radius: 3px;
  line-height: 1.5;
`;
