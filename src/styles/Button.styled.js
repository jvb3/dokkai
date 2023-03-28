import styled, { keyframes } from "styled-components";

const fadeInBtn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Button = styled.button`
  animation: ${fadeInBtn} 500ms ease-in;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 3px;
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.black};
  border: none;

  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.black};
    background-color: ${(props) => props.theme.color.white};
  }
`;

export const WordCardBtn = styled(Button)`
  margin: 0;
  width: 100%;
`;

export const SaveBtn = styled(Button)`
  margin: 0;
  animation: none;
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.black};
  }
`;

export default Button;
