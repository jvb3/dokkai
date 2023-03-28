import usePost from "../hooks/usePost";
import { useState } from "react";

function useSaveDialogueBox() {
  const [boxPosition, setBoxPosition] = useState();
  const [showSaveDialogue, setShowSaveDialogue] = useState(false);
  const [title, setTitle] = useState();
  const [date, setDate] = useState();

  const { handlePost } = usePost();

  function openDialogueBox() {
    setShowSaveDialogue(true);
    setPosition();
    document.body.style.overflow = "hidden";
  }

  function setPosition() {
    const scrolled = window.scrollY;
    setBoxPosition(scrolled);
  }

  function titleInput(e) {
    const value = e.target.value;
    setTitle(value);
  }
  function dateInput(e) {
    const value = e.target.value;
    setDate(value);
  }

  function sendTranslation(e, newTranslation, dbURL) {
    handlePost(e, newTranslation, dbURL);
    setShowSaveDialogue(false);
  }

  function closeDialogueBox() {
    setShowSaveDialogue(false);
    document.body.style.overflow = "auto";
  }

  return {
    showSaveDialogue,
    boxPosition,
    title,
    date,
    openDialogueBox,
    closeDialogueBox,
    sendTranslation,
    titleInput,
    dateInput,
  };
}

export default useSaveDialogueBox;
