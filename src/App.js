//SECTION - IMPORTS

//Router
import { Route, Routes } from "react-router-dom";

//Components
import SubmittedText from "./components/SubmittedText";
import BilingualText from "./components/BilingualText";
import PastedText from "./components/PastedText";
import Navbar from "./components/Navbar";
import Toolbar from "./components/Toolbar";
import SaveDialogBox from "./components/SaveDialogBox";

//Hooks

import useToolbar from "./hooks/useToolbar";
import useSubmittedText from "./hooks/useSubmittedText";
import useFindWord from "./hooks/useFindWord";
import useWordPanel from "./hooks/useWordPanel";
import useSelectWord from "./hooks/useSelectWord";
import useFetch from "./hooks/useFetch";
import useHighlight from "./hooks/useHighlight";
import useTranslation from "./hooks/useTranslation";
import useAnimation from "./hooks/useAnimation";
import useContextMenu from "./hooks/useContextMenu";
import useSaveDialogueBox from "./hooks/useSaveDialogueBox";
import usePost from "./hooks/usePost";
import useNavigation from "./hooks/useNavigation";

//Styles
import "./styles.css";
import CssReset from "./styles/CssReset.styled";
import AppTheme from "./styles/Theme.styled";
import LineByLineTranslation from "./components/LineByLineTranslation";
import OverlayStyled from "./styles/Overlay.styled";

export default function App() {
  //SECTION - DESTRUCTURED HOOKS

  const {
    animateFirst,
    animateSecond,
    isFadeAnimation,
    handleFirstAnimationEnd,
    setIsFadeAnimation,
  } = useAnimation();

  const {
    validateInput,
    setPastedText,
    setShowText,
    handlePastedText,
    ref,
    showText,
    pastedText,
    copiedPastedText,
  } = useSubmittedText();

  const { getSelectedText, selectedWord } = useSelectWord();

  const { searchedWord, filterData, setSearchedWord } = useFindWord();

  const { fetchData } = useFetch(selectedWord, filterData);

  const { toggleHighlight } = useHighlight(
    searchedWord,
    setSearchedWord,
    pastedText,
    setPastedText
  );

  const { removeWord, toggleDefinition, displayWordList } = useWordPanel(
    searchedWord,
    setSearchedWord,
    pastedText,
    setPastedText,
    toggleHighlight
  );

  const { wordCard } = displayWordList();

  const { inputTranslation, lineByLineTranslation, insertTextAreas } =
    useTranslation(pastedText, getSelectedText);

  const {
    showSaveDialogue,
    boxPosition,
    title,
    date,
    openDialogueBox,
    closeDialogueBox,
    sendTranslation,
    titleInput,
    dateInput,
  } = useSaveDialogueBox();

  const {
    wordList,
    bilingualText,
    japaneseText,
    engTranslation,
    handleTimer,
    setShowWords,
    setShowTimer,
    showWords,
    showTimer,
    showBilingualText,
  } = useToolbar(setShowText);

  const [contextMenu, handleContextMenu, handleCloseMenu] = useContextMenu();

  const { handlePost } = usePost();
  const {
    goToTranslation,
    goToBilingualView,
    goToJapaneseText,
    goToHome,
    showNavbar,
  } = useNavigation();

  //SECTION - PROPS

  const pastedTextProps = {
    showText,
    pastedText,
    animateFirst,
    animateSecond,
    isFadeAnimation,
    ref,
    copiedPastedText,
    validateInput,
    setPastedText,
    handleFirstAnimationEnd,
    handlePastedText,
  };

  const submittedTextProps = {
    showText,
    showWords,
    searchedWord,
    pastedText,
    lineByLineTranslation,
    showTimer,
    setShowText,
    fetchData,
    getSelectedText,
    toggleHighlight,
    removeWord,
    insertTextAreas,
    inputTranslation,
    toggleDefinition,
    setIsFadeAnimation,
  };
  const lineByLineTranslationProps = {
    inputTranslation,
    getSelectedText,
    insertTextAreas,
    searchedWord,
    showWords,
    contextMenu,
    handleContextMenu,
    handleCloseMenu,
    lineByLineTranslation,
    pastedText,
  };

  const bilingualTextProps = {
    showBilingualText,
    showWords,
    pastedText,
    searchedWord,
    lineByLineTranslation,
    getSelectedText,
  };
  const wordPanelProps = {
    searchedWord,
    setSearchedWord,
    toggleHighlight,
    removeWord,
    toggleDefinition,
    wordCard,
  };
  console.log(wordCard);
  const menuProps = {
    handleCloseMenu,
    fetchData,
    setShowWords,
    contextMenu,
    handleContextMenu,
    wordList,
    handleTimer,
    openDialogueBox,
  };
  const toolbarProps = {
    fetchData,
    setShowWords,
    showWords,
    bilingualText,
    japaneseText,
    engTranslation,
    setShowTimer,
    handleTimer,
    openDialogueBox,
    wordList,
    showTimer,
  };

  const saveDialogBoxProps = {
    closeDialogueBox,
    handlePost,
    titleInput,
    dateInput,
    sendTranslation,
    copiedPastedText,
    title,
    date,
    pastedText,
    lineByLineTranslation,
    boxPosition,
    showSaveDialogue,
  };

  const navigationProps = {
    goToTranslation,
    goToBilingualView,
    goToJapaneseText,
    goToHome,
  };

  return (
    <AppTheme>
      <CssReset />
      <OverlayStyled showSaveDialogue={showSaveDialogue} />
      {showNavbar && <Navbar showTimer={showTimer} />}
      <Routes>
        <Route path="/" element={<PastedText {...pastedTextProps} />} />
        <Route
          path="/j-text"
          element={
            <SubmittedText
              {...submittedTextProps}
              {...menuProps}
              {...wordPanelProps}
            />
          }
        />
        <Route
          path="/translation"
          element={
            <LineByLineTranslation
              {...lineByLineTranslationProps}
              {...menuProps}
              {...wordPanelProps}
            />
          }
        />
        <Route
          path="/bilingual-view"
          element={
            <BilingualText
              {...bilingualTextProps}
              {...wordPanelProps}
              {...menuProps}
            />
          }
        />
      </Routes>
      {showNavbar && <Toolbar {...toolbarProps} {...navigationProps} />}
      {showSaveDialogue && showNavbar && (
        <SaveDialogBox {...saveDialogBoxProps} />
      )}
    </AppTheme>
  );
}
