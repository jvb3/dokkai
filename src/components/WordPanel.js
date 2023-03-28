import {
  Wrapper,
  Container as ContainerStyled,
  WordData as WordDataStyled,
  IconContainer,
  HighlightIcon,
  DeleteIcon,
  MeaningContainer,
  Word,
  Meaning,
} from "../styles/WordPanel.styled";

function WordPanel({
  searchedWord,
  toggleHighlight,
  removeWord,
  toggleDefinition,
}) {
  const reversedSearchedWord = [...searchedWord].reverse();

  const wordList = reversedSearchedWord.map((elem) => (
    <ContainerStyled>
      <WordDataStyled onClick={() => toggleDefinition(elem.id)} key={elem.id}>
        <Word>{elem.word}</Word>
        <Word>{elem.reading}</Word>
        <MeaningContainer show={elem.show}>
          {elem.meanings.map((item, index) => (
            <Meaning key={index}>{item}</Meaning>
          ))}
        </MeaningContainer>
      </WordDataStyled>
      <IconContainer>
        <HighlightIcon onClick={() => toggleHighlight(elem.word)} />
        <DeleteIcon onClick={() => removeWord(elem.id)} />
      </IconContainer>
    </ContainerStyled>
  ));

  return (
    <Wrapper>
      {searchedWord.length === 0 ? (
        <ContainerStyled>No Searched Words</ContainerStyled>
      ) : (
        wordList
      )}
    </Wrapper>
  );
}

export default WordPanel;
