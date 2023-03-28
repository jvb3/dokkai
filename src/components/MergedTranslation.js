import React from "react";
import Hyphenated from "react-hyphen";

function MergedTranslation({ lineByLineTranslation }) {
  const mergedTranslation = Object.values(lineByLineTranslation).map((elem) => (
    <div className="merged-translation-container">
      <Hyphenated className="merged-translation">{elem}</Hyphenated>
    </div>
  ));
  return <>{mergedTranslation}</>;
}

export default MergedTranslation;
