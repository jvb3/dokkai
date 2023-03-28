//SECTION - IMPORTS

//Components
import Menu from "./Menu";
import WordPanel from "./WordPanel";

//Styles
import {
  Wrapper as WrapperStyled,
  Container as ContainerStyled,
} from "../styles/SubmittedText.styled";

function LineByLineTranslation({
  insertTextAreas,
  handleContextMenu,
  handleCloseMenu,
  contextMenu,
  searchedWord,
  toggleHighlight,
  removeWord,
  toggleDefinition,
  fetchData,
  setShowWords,
  showWords,
  openDialogueBox,
  handleTimer,
  wordList,
}) {
  const wordPanelProps = {
    searchedWord,
    toggleHighlight,
    removeWord,
    toggleDefinition,
  };
  const menuProps = {
    handleCloseMenu,
    fetchData,
    setShowWords,
    contextMenu,
    handleContextMenu,
    openDialogueBox,
    handleTimer,
    wordList,
  };

  const { textAreas } = insertTextAreas();

  return (
    <WrapperStyled>
      <ContainerStyled
        onContextMenu={handleContextMenu}
        onClick={handleCloseMenu}
      >
        {contextMenu.show && (
          <Menu
            xCoords={contextMenu.x}
            yCoords={contextMenu.y}
            {...menuProps}
          />
        )}
        {textAreas}
      </ContainerStyled>
      {showWords && <WordPanel {...wordPanelProps} />}
    </WrapperStyled>
  );
}

export default LineByLineTranslation;
