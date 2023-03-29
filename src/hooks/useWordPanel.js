import DOMPurify from "dompurify";

function useWordPanel(
  searchedWord,
  setSearchedWord,
  pastedText,
  setPastedText
) {
  function removeWord(id) {
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
  return { removeWord, toggleDefinition };
}
export default useWordPanel;
