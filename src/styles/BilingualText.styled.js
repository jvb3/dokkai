import styled, { keyframes } from "styled-components";
const fadeInText = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  height: fit-content;
  background-color: ${(props) => props.theme.color.white};
`;

export const TextJap = styled.section`
  line-height: 2;
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.fontFamily.japanese};
  animation-name: ${fadeInText};
  animation-duration: 250ms;
  animation-timing-function: ease-in;
`;

export const TextEng = styled(TextJap)`
  font-family: ${(props) => props.theme.fontFamily.english};
  animation-name: ${fadeInText};
  animation-duration: 250ms;
  animation-timing-function: ease-in;
  color: black;
`;
