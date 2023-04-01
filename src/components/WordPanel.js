import {
  Wrapper,
  Container as ContainerStyled,
} from "../styles/WordPanel.styled";

function WordPanel({ searchedWord, wordCard }) {
  return (
    <Wrapper>
      {searchedWord.length === 0 ? (
        <ContainerStyled>No Searched Words</ContainerStyled>
      ) : (
        wordCard
      )}
    </Wrapper>
  );
}

export default WordPanel;
