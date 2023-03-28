import { useState } from "react";

function useSelectWord() {
  const [selectedWord, setSelectedWord] = useState("");

  function getSelectedText() {
    const word = window.getSelection().toString();
    setSelectedWord(word);
  }

  return { getSelectedText, selectedWord };
}

export default useSelectWord;
