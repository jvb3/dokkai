import styled, { keyframes } from "styled-components";

const fadeInText = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Text = styled.span`
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.fontFamily.japanese};
  animation-name: ${fadeInText};
  animation-duration: 250ms;
  animation-timing-function: ease-in;
  font-size: 18px;
`;

export const Textarea = styled.textarea`
  display: block;
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.black};
  width: 100%;
  overflow: hidden;
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.color.black};
  outline: none;
  resize: none;
  padding: 5px;
  margin: 1rem 0 1rem 0;
`;
