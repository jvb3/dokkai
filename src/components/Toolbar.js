import useMouseDrag from "../hooks/useMouseDrag";
import { useState } from "react";

import {
  ToolbarContainer,
  IconContainer,
  SearchIcon,
  HomeIcon,
  WordListIcon,
  TranslateIcon,
  BilingualIcon,
  TextIcon,
  TimerIcon,
  SaveIcon,
  RtArrow,
  LtArrow,
} from "../styles/Toolbar.styled";

const toolbarLabels = {
  backLabel: "Home",
  searchLabel: "Lookup",
  wordListLabel: "My Words",
  textLabel: "Japanese Text",
  translationLabel: "My Translation",
  bilingualLabel: "Biligual View",
  rotate: "Rotate Toolbar",
  timerLabel: "Start Timer",
  saveLabel: "Save Work",
};

function Toolbar({
  fetchData,
  handleTimer,
  openDialogueBox,
  wordList,
  rotate,
  goToTranslation,
  goToBilingualView,
  goToJapaneseText,
  goToHome,
}) {
  const { mouseDown, mouseMove, mouseUp, position } = useMouseDrag();
  const [isToolbar, setIsToolbar] = useState(false);

  function toggleToolbar() {
    setIsToolbar(!isToolbar);
  }

  return (
    <>
      <ToolbarContainer
        positionX={position.x}
        positionY={position.y}
        rotate={rotate}
        onMouseDown={(e) => mouseDown(e)}
        onMouseMove={mouseMove}
        onMouseUp={mouseUp}
      >
        <IconContainer isToolbar={isToolbar}>
          <HomeIcon title={toolbarLabels.backLabel} onClick={goToHome} />
          <SearchIcon
            title={toolbarLabels.searchLabel}
            onClick={() => fetchData()}
          />
          <WordListIcon
            title={toolbarLabels.wordListLabel}
            onClick={wordList}
          />
          <TimerIcon title={toolbarLabels.timerLabel} onClick={handleTimer} />

          <TextIcon
            title={toolbarLabels.textLabel}
            onClick={goToJapaneseText}
          />

          <TranslateIcon
            title={toolbarLabels.translationLabel}
            onClick={goToTranslation}
          />
          <BilingualIcon
            onClick={goToBilingualView}
            title={toolbarLabels.bilingualLabel}
          />
          <SaveIcon onClick={openDialogueBox} title={toolbarLabels.saveLabel} />
        </IconContainer>
        {isToolbar ? (
          <LtArrow onClick={toggleToolbar} />
        ) : (
          <RtArrow onClick={toggleToolbar} />
        )}
      </ToolbarContainer>
    </>
  );
}

export default Toolbar;
