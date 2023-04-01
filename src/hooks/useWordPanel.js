import DOMPurify from "dompurify";
import {
  Container as ContainerStyled,
  WordData as WordDataStyled,
  IconContainer,
  HighlightIcon,
  DeleteIcon,
  MeaningContainer,
  Word,
  Meaning,
} from "../styles/WordPanel.styled";

function useWordPanel(
  searchedWord,
  setSearchedWord,
  pastedText,
  setPastedText,
  toggleHighlight
) {
  function removeWord(id) {
    console.log(searchedWord);
    const updatedWordList = searchedWord.filter((elem) => {
      return elem.id !== id;
    });
    setSearchedWord(updatedWordList);
    removeHighlight(id);
  }
  function removeHighlight(id) {
    const match = searchedWord.find((elem) => elem.id === id);
    const regexPattern = new RegExp(
      `<span class="highlight-on">${match.word}</span>`,
      "g"
    );
    const newSanitizedHTML = DOMPurify.sanitize(`${match.word}`);
    const replaceHTML = pastedText.replace(regexPattern, newSanitizedHTML);
    setPastedText(replaceHTML);
  }

  function toggleDefinition(id) {
    const updatedWordList = searchedWord.map((elem) => {
      if (elem.id === id) {
        return { ...elem, show: !elem.show };
      }
      return elem;
    });
    setSearchedWord(updatedWordList);
  }

  function displayWordList() {
    const reversedSearchedWord = [...searchedWord].reverse();
    const wordCard = reversedSearchedWord?.map((elem) => (
      <ContainerStyled>
        <WordDataStyled onClick={() => toggleDefinition(elem.id)} key={elem.id}>
          <Word>{elem.word}</Word>
          <Word>{elem.reading}</Word>
          <MeaningContainer show={elem.show}>
            {elem.meanings.map((item, index) => (
              <Meaning key={index + 1}>{item}</Meaning>
            ))}
          </MeaningContainer>
        </WordDataStyled>
        <IconContainer>
          <HighlightIcon onClick={() => toggleHighlight(elem.word)} />
          <DeleteIcon onClick={() => removeWord(elem.id)} />
        </IconContainer>
      </ContainerStyled>
    ));
    return { wordCard };
  }

  return { toggleDefinition, displayWordList };
}
export default useWordPanel;
