import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function useFindWord() {
  const [searchedWord, setSearchedWord] = useState([]);

  function filterData(data) {
    const { word, reading } = data?.data[0].japanese[0];
    const { english_definitions, parts_of_speech } = data?.data[0].senses[0];
    const searchedWordObj = {
      id: uuidv4(),
      word: `${word ? word : reading}`,
      reading: reading,
      meanings: english_definitions,
      partsOfSpeech: parts_of_speech,
      show: true,
      highlight: true,
    };
    setSearchedWord([...searchedWord, searchedWordObj]);
  }
  return { filterData, setSearchedWord, searchedWord };
}
export default useFindWord;
