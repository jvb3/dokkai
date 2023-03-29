import styled, { keyframes } from "styled-components";

const fadeInText = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.article`
  background-color: ${(props) => props.theme.color.blue};
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 25%;
  position: relative;
  padding-left: 1.5rem;
`;

export const Container = styled.article`
  border-radius: 3px;
  height: fit-content;
  background-color: ${(props) => props.theme.color.white};
  padding: 1.5rem;
  margin: 1rem 0 1rem 3rem;
`;

export const Text = styled.section`
  line-height: 2;
  animation-name: ${fadeInText};
  animation-duration: 250ms;
  animation-timing-function: ease-in;
  color: ${(props) => props.theme.color.black};
  font-family: ${(props) => props.theme.fontFamily.japanese};
  font-size: 18px;
`;
