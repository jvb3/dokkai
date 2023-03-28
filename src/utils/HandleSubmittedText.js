import { useState } from "react";

import useNavigation from "./HandleNavigation";

function useSubmittedText(ref) {
  const { goToJapaneseText } = useNavigation();
  const [pastedText, setPastedText] = useState();
  const [showText, setShowText] = useState(false);
  const [copiedPastedText, setCopiedPastedText] = useState("");

  function handlePastedText(e, ref) {
    setPastedText(e.target.value);
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = `${e.target.scrollHeight}px`;
    }
    saveOriginalText(e);
  }

  function saveOriginalText(e) {
    setCopiedPastedText(e.target.value);
  }

  function validateInput() {
    if (!pastedText) {
      alert("Enter text first");
    } else {
      goToJapaneseText();
    }
  }

  return {
    validateInput,
    setPastedText,
    setShowText,
    handlePastedText,
    copiedPastedText,
    showText,
    pastedText,
    ref,
  };
}

export default useSubmittedText;
