import DOMPurify from "dompurify";

function useHighlight(
  searchedWord,
  setSearchedWord,
  pastedText,
  setPastedText
) {
  function matchWord(word) {
    const match = searchedWord.find((item) => item.word === word);
    isMatchHighlighted(match);
  }
  function isMatchHighlighted(match) {
    if (match.highlight) {
      insertHighlight(match);
    } else {
      removeHighlight(match);
    }
  }

  function insertHighlight(match) {
    const regexPattern = new RegExp(`${match.word}`, "g");

    const newSanitizedHTML = DOMPurify.sanitize(
      `<span class="highlight-on">${match.word}</span>`
    );
    const replaceHTML = pastedText.replace(regexPattern, newSanitizedHTML);
    setPastedText(replaceHTML);
  }

  function removeHighlight(match) {
    const regexPattern = new RegExp(
      `<span class="highlight-on">${match.word}</span>`,
      "g"
    );
    const newSanitizedHTML = DOMPurify.sanitize(`${match.word}`);
    const replaceHTML = pastedText.replace(regexPattern, newSanitizedHTML);
    setPastedText(replaceHTML);
  }

  function toggleHighlight(word) {
    const highlightedText = searchedWord.map((elem) => {
      if (elem.word === word) {
        return { ...elem, highlight: !elem.highlight };
      }
      return elem;
    });
    setSearchedWord(highlightedText);
    matchWord(word);
  }

  return { toggleHighlight, removeHighlight };
}
export default useHighlight;
