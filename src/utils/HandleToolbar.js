import { useState } from "react";

function useToolbar(setShowText) {
  const [showWords, setShowWords] = useState(true);
  const [showTimer, setShowTimer] = useState(false);
  const [showJapaneseText, setShowJapaneseText] = useState(true);
  const [showBilingualText, setShowBilingualText] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [rotate, setRotate] = useState(false);

  function returnToTextArea() {
    setShowText(false);
  }

  function wordList() {
    setShowWords(!showWords);
  }

  function handleTimer() {
    setShowTimer(!showTimer);
  }

  function japaneseText() {
    setShowJapaneseText(true);
    setShowBilingualText(false);
    setShowTranslation(false);
  }
  function engTranslation() {
    setShowJapaneseText(false);
    setShowBilingualText(false);
    setShowTranslation(true);
  }

  function bilingualText() {
    setShowBilingualText(true);
    setShowTranslation(false);
    setShowJapaneseText(false);
  }

  function rotateToolbar() {
    setRotate(!rotate);
  }

  return {
    wordList,
    bilingualText,
    japaneseText,
    engTranslation,
    handleTimer,
    setShowWords,
    setShowJapaneseText,
    setShowTranslation,
    setShowBilingualText,
    setShowTimer,
    rotateToolbar,
    returnToTextArea,
    rotate,
    showWords,
    showJapaneseText,
    showTranslation,
    showBilingualText,
    showTimer,
  };
}

export default useToolbar;
