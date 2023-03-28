//SECTION - IMPORTS

//Components
import MergedTranslation from "./MergedTranslation";
import WordPanel from "./WordPanel";
import Menu from "./Menu";

//Styles
import {
  Wrapper as Grid,
  TextJap,
  TextEng,
} from "../styles/BilingualText.styled";
import {
  Wrapper as WrapperStyled,
  Container as ContainerStyled,
} from "../styles/SubmittedText.styled";

function BilingualText({
  pastedText,
  lineByLineTranslation,
  getSelectedText,
  searchedWord,
  toggleHighlight,
  removeWord,
  toggleDefinition,
  handleCloseMenu,
  fetchData,
  setShowWords,
  contextMenu,
  handleContextMenu,
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

  return (
    <WrapperStyled>
      <ContainerStyled
        onContextMenu={handleContextMenu}
        onClick={handleCloseMenu}
      >
        <Grid>
          {contextMenu.show && (
            <Menu
              xCoords={contextMenu.x}
              yCoords={contextMenu.y}
              {...menuProps}
            />
          )}
          <TextJap
            onMouseUp={getSelectedText}
            dangerouslySetInnerHTML={{ __html: pastedText }}
          />
          <TextEng>
            <MergedTranslation lineByLineTranslation={lineByLineTranslation} />
          </TextEng>
        </Grid>
      </ContainerStyled>
      {showWords && <WordPanel {...wordPanelProps} />}
    </WrapperStyled>
  );
}

export default BilingualText;
