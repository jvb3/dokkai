import { useRef, useState } from "react";
import { Text, Textarea } from "../styles/LineByLineTranslation.styled";

function useTranslation(pastedText, getSelectedText) {
  const [lineByLineTranslation, setLineByLineTranslation] = useState({});
  const textareaRef = useRef([]);

  function inputTranslation(e, index) {
    const name = e.target.name;
    const value = e.target.value;
    setLineByLineTranslation((prev) => {
      return { ...prev, [name]: value };
    });
    resizeTextareaHeight(index);
  }

  function resizeTextareaHeight(index) {
    textareaRef.current[index].style.height = "auto";
    textareaRef.current[index].style.height =
      textareaRef.current[index].scrollHeight + "px";
  }

  function insertTextAreas() {
    const sentencesArr = pastedText?.split(`。`).filter((item) => item !== "");
    const textAreaVals = Object.values(lineByLineTranslation);
    let lineNumberIncrement = 0;
    let valIncrement = 0;
    const textAreas = sentencesArr?.map((item, index) => {
      return (
        <>
          <Text
            key={index + 1}
            dangerouslySetInnerHTML={{ __html: `${item}。` }}
            onMouseUp={getSelectedText}
          />
          <Textarea
            key={index}
            ref={(elem) => {
              textareaRef.current[index] = elem;
            }}
            name={`line${lineNumberIncrement++}`}
            onChange={(e) => inputTranslation(e, index)}
            value={
              textAreaVals.length === 0 ? "" : textAreaVals[valIncrement++]
            }
          />
        </>
      );
    });
    return { textAreas };
  }

  return {
    inputTranslation,
    lineByLineTranslation,
    insertTextAreas,
    resizeTextareaHeight,
  };
}
export default useTranslation;
