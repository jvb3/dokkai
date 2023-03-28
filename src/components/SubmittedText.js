//SECTION - IMPORTS

//Components
import WordPanel from "./WordPanel";
import Menu from "./Menu";

//Styles
import {
  Wrapper as WrapperStyled,
  Text as TextStyled,
  Container as TextContainerStyled,
} from "../styles/SubmittedText.styled";

function SubmittedText(props) {
  const {
    handleContextMenu,
    handleCloseMenu,
    getSelectedText,
    pastedText,
    fetchData,
    searchedWord,
    toggleHighlight,
    removeWord,
    toggleDefinition,
    contextMenu,
    setShowWords,
    showWords,
    handleTimer,
    openDialogueBox,
    wordList,
  } = props;

  //SECTION - PROPS

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
    showWords,
    handleTimer,
    openDialogueBox,
    wordList,
  };

  return (
    <WrapperStyled>
      <TextContainerStyled
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
        <TextStyled
          onMouseUp={getSelectedText}
          dangerouslySetInnerHTML={{ __html: pastedText }}
        />
      </TextContainerStyled>
      {showWords && <WordPanel {...wordPanelProps} />}
    </WrapperStyled>
  );
}

export default SubmittedText;
