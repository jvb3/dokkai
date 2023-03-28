import styled, { keyframes } from "styled-components";

import { AiOutlineHighlight as Highlight } from "react-icons/ai";

import { TiDeleteOutline as Delete } from "react-icons/ti";

const fadeInWordCards = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.white};
  padding: 1rem;
  margin: 1rem;
  border-radius: 3px;
  box-shadow: 3px 3px 1px ${(props) => props.theme.color.black};
  animation-name: ${fadeInWordCards};
  animation-duration: 250ms;
  animation-timing-function: ease-in;
`;
export const WordData = styled.div`
  word-wrap: break-word;
`;

export const Word = styled.div`
  font-family: ${(props) => props.theme.fontFamily.japanese};
  color: ${(props) => props.theme.color.black};
`;

export const MeaningContainer = styled.section`
  margin: 0.4rem 0 0.4rem 0;
  display: ${(props) => !props.show && "none"};
`;

export const Meaning = styled.li`
  font-size: ${(props) => props.theme.fontSize.small};
  margin: 2px;
  list-style-type: decimal;
  color: ${(props) => props.theme.color.black};
`;

export const IconContainer = styled.section`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const HighlightIcon = styled(Highlight)`
  color: ${(props) => props.theme.color.black};
  :hover {
    color: ${(props) => props.theme.color.red};
    cursor: pointer;
  }
`;

export const DeleteIcon = styled(Delete)`
  color: ${(props) => props.theme.color.black};
  :hover {
    color: ${(props) => props.theme.color.red};
    cursor: pointer;
  }
`;
